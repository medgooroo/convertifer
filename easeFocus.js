
// load the file, find the end of the preamble and ungzip 
const fc2_fileSelector = document.getElementById('file-fc2');
fc2_fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    if (fileList.length == 0) return;
    var arrayBuffer;
    var fileReader = new FileReader();
    fileReader.onload = function () {
        arrayBuffer = this.result;
        let buff = new Uint8Array(arrayBuffer);
        const signature = [0x1f, 0x8b, 0x08, 0x00, 0x00]; // gzip magic number, deflate, some zeros.
        let offset = findOffset(buff, signature); // find offset into file for magic number
        let result = pako.ungzip(buff.slice(offset), { "to": "string" }); // ungzip from offset
        const easeXML = new DOMParser().parseFromString(result, "application/xml");
        processEase(easeXML, fileList[0].name.split(".")[0]);

    };
    fileReader.readAsArrayBuffer(fileList[0]);
});

function findOffset(buff, signature) { // find where the signature is is the file.
    return buff.findIndex(function (currentValue, index, arr) {
        if ((index + signature.length) > arr.length) return false;
        aSlice = arr.slice(index, index + signature.length);
        for (var i = 0; i < aSlice.length; i++) {
            if (aSlice[i] !== signature[i]) return false;
            if (i == aSlice.length - 1) return true;
        }
    });
}

function processEase(easeXML, fileName) {
    var easeKeys = easeXML.getElementsByTagName('Keys')[0];
    var easeValues = easeXML.getElementsByTagName('Values')[0];
    var keysRef = easeKeys.getAttribute("href").slice(1);
    var valuesRef = easeValues.getAttribute("href").slice(1);

    var keys = [];
    const keyElements = easeXML.getElementById(keysRef);
    for (const child of keyElements.children) {
        keys.push(child.innerHTML);
    }
    var values = [];
    const valueElements = easeXML.getElementById(valuesRef);
    for (const child of valueElements.children) {
        values.push(child.innerHTML);
    }

    function createObjects(parent, chainArray, value) {
        if (chainArray.length == 1) {
            parent[chainArray[0]] = value;
            return parent;
        }
        else {
            parent[chainArray[0]] = parent[chainArray[0]] || {};
            return createObjects(parent[chainArray[0]], chainArray.slice(1, chainArray.length), value);
        }
    }

    var result = {};
    for (var i = 0, l = keys.length; i < l; i++) {
        createObjects(result, keys[i].split('.'), values[i]);
    }

    // FINALLY! we have a javascript object.
    console.log(result);// <-----------------------------------------------HERE for json overall
    // fuck yeah, motherfucker.
    console.log(result.Project.Title);
    //console.log(result.Project.Notes);
    //   console.log(result.Project.Author);

    var doc = document.implementation.createDocument("", "", null);
    var main = doc.createElement("ArrayCalc");
    main.setAttribute("Version", "11.1.1");

    var project = doc.createElement("Project");
    project.setAttribute("Name", result.Project.Title);
    var el = doc.createElement("Date");
    var d = new Date();
    el.textContent = d.toLocaleDateString();
    project.appendChild(el);

    el = doc.createElement("Author");
    el.textContent = result.Project.Author;
    project.appendChild(el);

    el = doc.createElement("Comments");
    el.textContent = result.Project.Notes + " \nImported from EASE" // TODO from file
    project.appendChild(el);
    main.appendChild(project);

    var venue = doc.createElement("Venue");
    venue.setAttribute("Version", "9"); // sure. 9 sounds good.
    main.appendChild(venue);

    function getUniqueName(nameList, desiredName) {
        function filterItems(arr, query) {
            return arr.filter((el) => el.includes(query));
        }
        let count = filterItems(nameList, desiredName);
        nameList.push(desiredName);

        if (count == 0) return desiredName;
        return (desiredName + "#" + count.length);
    }
    let nameList = [];


    console.log(main);
    let projectOrigin = {
        x: parseFloat(result.Project.Origin.X),
        y: parseFloat(result.Project.Origin.Y)
    };

    for (const [zone, zoneValue] of Object.entries(result.Project.AudienceZoneManager)) {
        if (zone.slice(0, 5) == "Zone[") {
            // get the zone properties
            var roomObjectGroup = doc.createElement("RoomObject");
            roomObjectGroup.setAttribute("ObjectGroup", "true");
            roomObjectGroup.setAttribute("Shape", "5"); // group "shape"
            roomObjectGroup.setAttribute("ObjectGroup", "true");
            roomObjectGroup.setAttribute("PlaneType", "1"); // dunno?
            roomObjectGroup.setAttribute("Name", getUniqueName(nameList, zoneValue.Label));
            roomObjectGroup.setAttribute("Enabled", "1"); //
            roomObjectGroup.setAttribute("Transparent", "1"); //
            roomObjectGroup.setAttribute("Locked", "0"); // 
            roomObjectGroup.setAttribute("ListenerHeight", "1.7"); //  make this an option?
            roomObjectGroup.setAttribute("Color", "4294967295"); // needs a u.
            roomObjectGroup.setAttribute("PrintColor", "4294945280"); // ^
            roomObjectGroup.setAttribute("ParentVenueObjectId", "0"); // 
            roomObjectGroup.setAttribute("OrderIndex", "4"); // F O U R 


            /// *Screaming noises intensify*
            // ease considers the origin of the element to be the center. (at least with rectangles)
            let xOrigin = parseFloat(zoneValue.X) - projectOrigin.x;
            let yOrigin = parseFloat(zoneValue.Y) - projectOrigin.y;
            el = doc.createElement("Origin");
            el.setAttribute("x", xOrigin);
            el.setAttribute("y", yOrigin);
            el.setAttribute("z", 0);
            roomObjectGroup.appendChild(el);

            el = doc.createElement("Rotation");
            el.setAttribute("x", 0);
            el.setAttribute("y", 0);
            el.setAttribute("z", 0);
            roomObjectGroup.appendChild(el);

            el = doc.createElement("Scaling");
            el.setAttribute("x", "1");
            el.setAttribute("y", "1");
            el.setAttribute("z", "1");
            roomObjectGroup.appendChild(el);

            for (const [area, areaValue] of Object.entries(zoneValue)) {
                var roomObject = doc.createElement("RoomObject");
                if (area.slice(0, 5) == "Area[") {
                    var roomObject = doc.createElement("RoomObject");
                    if (zoneValue.Type == "") {  // WHY is this sometimes not defined???
                        if (zoneValue.Width != undefined) zoneValue.Type = "Rectangle";
                        if (zoneValue.Radius != undefined) zoneValue.Type = "Arc";
                        if (zoneValue.FrontEdge != undefined) zoneValue.Type = "Trapezoid";
                        if (zoneValue.RightAngleLeft != undefined) zoneValue.Type = "Right Trapezoid"; // order is relevant..
                    }

                    if (zoneValue.Type == "Arc") roomObject.setAttribute("Shape", "2"); // 
                    if (zoneValue.Type == "Rectangle") roomObject.setAttribute("Shape", "1"); // 
                    if (zoneValue.Type == "Annulus") roomObject.setAttribute("Shape", "2"); // 
                    if (zoneValue.Type == "Trapezoid") roomObject.setAttribute("Shape", "1"); // 
                    if (zoneValue.Type == "Right Trapezoid") roomObject.setAttribute("Shape", "1"); //                
                    roomObject.setAttribute("PlaneType", "1"); // dunno?
                    roomObject.setAttribute("Name", getUniqueName(nameList, zoneValue.Label + " " + areaValue.Label)); // This must be unique. 
                    roomObject.setAttribute("Enabled", "1"); //
                    roomObject.setAttribute("Transparent", "1"); //
                    roomObject.setAttribute("Locked", "0"); // 
                    roomObject.setAttribute("ListenerHeight", areaValue.EarHeightValue); //  make this an option?
                    roomObject.setAttribute("Color", "4294967295"); // needs a u.
                    roomObject.setAttribute("PrintColor", "4294945280"); // ^
                    roomObject.setAttribute("ParentVenueObjectId", "0"); // 
                    roomObject.setAttribute("OrderIndex", "4"); // F O U R 

                    function setScaling(object, x = 0, y = 0, z = 0) {
                        el = doc.createElement("Scaling");
                        el.setAttribute("x", "1");
                        el.setAttribute("y", "1");
                        el.setAttribute("z", "1");
                        object.appendChild(el);
                    }

                    function setRotation(object, x = 0, y = 0, z = 0) {
                        el = doc.createElement("Rotation");
                        el.setAttribute("x", x);
                        el.setAttribute("y", y)
                        el.setAttribute("z", z);
                        object.appendChild(el);
                    }

                    function setOrigin(object, x = 0, y = 0, z = 0) {
                        el = doc.createElement("Origin");
                        el.setAttribute("x", x);
                        el.setAttribute("y", y)
                        el.setAttribute("z", z);
                        object.appendChild(el);
                    }

                    function genArcSec(roomObject, zoneValue, areaValue) {
                        roomObject.setAttribute("SpanAngle", zoneValue.SweepAngle);
                        roomObject.setAttribute("InnerRadiusA", parseFloat(zoneValue.InnerRadius) + parseFloat(areaValue.D1));
                        roomObject.setAttribute("InnerRadiusB", parseFloat(zoneValue.InnerRadius) + parseFloat(areaValue.D1));
                        roomObject.setAttribute("OuterRadiusA", parseFloat(zoneValue.InnerRadius) + parseFloat(areaValue.D2));
                        roomObject.setAttribute("OuterRadiusB", parseFloat(zoneValue.InnerRadius) + parseFloat(areaValue.D2));
                        //TODO fix the file loader to make things the right types :/
                        roomObject.setAttribute("StartAngle", 360 - (zoneValue.SweepAngle / 2))
                        roomObject.setAttribute("InnerZ", areaValue.Z1);
                        roomObject.setAttribute("OuterZ", areaValue.Z2);
                        setOrigin(roomObject);
                        setScaling(roomObject);
                        setRotation(roomObject, 0, 0, zoneValue.Orientation); // actually works for arcs
                    }


                    function genRightTrapezoid(roomObject, zoneValue, areaValue) {
                        // rotates around "mid" of front edgeF
                        let orthSideIsRight = zoneValue.RightAngleLeft;
                        console.warn(orthSideIsRight);
                        let d1 = parseFloat(areaValue.D1);
                        let d2 = parseFloat(areaValue.D2);
                        let frontEdge = parseFloat(zoneValue.FrontEdge);
                        // let backEdge = parseFloat(zoneValue.BackEdge); taken from zonevalue.depth
                        let widthPerUnitDepth = (zoneValue.BackEdge - zoneValue.FrontEdge) / zoneValue.Depth;

                        //build it with orthside == 1) {
                        var p4 = {
                            x: (-zoneValue.Depth / 2) + +d1,
                            y: 0,
                            z: areaValue.Z1
                        }
                        var p3 = {
                            x: (-zoneValue.Depth / 2) + +d2,
                            y: 0,
                            z: areaValue.Z2
                        }
                        var p2 = {
                            x: (-zoneValue.Depth / 2) + +d2,
                            y: frontEdge + (((-zoneValue.Depth / 2) + +d2) * widthPerUnitDepth),
                            z: areaValue.Z2
                        }
                        var p1 = {
                            x: (-zoneValue.Depth / 2) + +d1,
                            y: frontEdge + (((-zoneValue.Depth / 2) + +d1) * widthPerUnitDepth),
                            z: areaValue.Z1
                        }
                        let points = [p1, p2, p3, p4];
                        if (orthSideIsRight == 0) {
                            p2.y = -p2.y;
                            p1.y = -p1.y;
                            points = [p4, p3, p2, p1]; // flipped thing, wound backwards.
                        }
                        for (var i = points.length - 1; i >= 0; i--) {
                            el = doc.createElement("P" + (i + +1));
                            el.setAttribute("x", points[i].x);
                            el.setAttribute("y", points[i].y);
                            el.setAttribute("z", points[i].z);
                            roomObject.appendChild(el);
                        }
                        roomObject.appendChild(el);
                        setOrigin(roomObject, 0, 0, 0);
                        setScaling(roomObject);

                        setRotation(roomObject, 0, 0, zoneValue.Orientation); // actually works for rects
                    }

                    function genTrapezoid(roomObject, zoneValue, areaValue) {
                        let widthPerUnitDepth = (zoneValue.BackEdge - zoneValue.FrontEdge) / zoneValue.Depth;
                        el = doc.createElement("P4");
                        let d1 = parseFloat(areaValue.D1);
                        let d2 = parseFloat(areaValue.D2);
                        let frontEdge = parseFloat(zoneValue.FrontEdge);
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d1);
                        el.setAttribute("y", (-d1 * widthPerUnitDepth / 2) - frontEdge / 2);
                        el.setAttribute("z", areaValue.Z1);
                        roomObject.appendChild(el);
                        el = doc.createElement("P3");
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d2);
                        el.setAttribute("y", (-d2 * widthPerUnitDepth / 2) - frontEdge / 2);
                        el.setAttribute("z", areaValue.Z2);
                        roomObject.appendChild(el);
                        el = doc.createElement("P2");
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d2);
                        el.setAttribute("y", (d2 * widthPerUnitDepth / 2) + frontEdge / 2);
                        el.setAttribute("z", areaValue.Z2);
                        roomObject.appendChild(el);
                        el = doc.createElement("P1");
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d1);
                        el.setAttribute("y", (d1 * widthPerUnitDepth / 2) + frontEdge / 2);
                        el.setAttribute("z", areaValue.Z1);
                        roomObject.appendChild(el);
                        setOrigin(roomObject);
                        setScaling(roomObject);

                        setRotation(roomObject, 0, 0, zoneValue.Orientation); // actually works for rects
                    }

                    function genRectangle(roomObject, zoneValue, areaValue) {
                        el = doc.createElement("P4"); // reconsider this in terms of the center point
                        let d1 = parseFloat(areaValue.D1);
                        let d2 = parseFloat(areaValue.D2);
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d1);
                        el.setAttribute("y", -zoneValue.Width / 2);
                        el.setAttribute("z", areaValue.Z1);
                        roomObject.appendChild(el);
                        el = doc.createElement("P3");
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d2);
                        el.setAttribute("y", -zoneValue.Width / 2);
                        el.setAttribute("z", areaValue.Z2);
                        roomObject.appendChild(el);
                        el = doc.createElement("P2");
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d2);
                        el.setAttribute("y", zoneValue.Width / 2);
                        el.setAttribute("z", areaValue.Z2);
                        roomObject.appendChild(el);
                        el = doc.createElement("P1");
                        el.setAttribute("x", -(zoneValue.Depth / 2) + d1);
                        el.setAttribute("y", zoneValue.Width / 2);
                        el.setAttribute("z", areaValue.Z1);
                        roomObject.appendChild(el);
                        setOrigin(roomObject);
                        setScaling(roomObject);
                        setRotation(roomObject, 0, 0, zoneValue.Orientation); // actually works for rects
                    }  

                    switch (zoneValue.Type) {
                        case "Annulus":
                            genArcSec(roomObject, zoneValue, areaValue);
                            break;
                        case "Arc":
                            genArcSec(roomObject, zoneValue, areaValue);
                            break;
                        case "Right Trapezoid":
                            genRightTrapezoid(roomObject, zoneValue, areaValue);
                            break;
                        case "Trapezoid":
                            genTrapezoid(roomObject, zoneValue, areaValue);
                            break;
                        case "Rectangle":
                            genRectangle(roomObject, zoneValue, areaValue);
                            break;
                        default:
                    }


                    //roomObject.appendChild(el);
                    roomObjectGroup.appendChild(roomObject);
                }
            }
            venue.appendChild(roomObjectGroup);
            console.log("\n");

        }
    }
    //    roomObjectGroup.appendChild(roomObject);
    var xmlText = new XMLSerializer().serializeToString(main);
    xmlText = "<!DOCTYPE ArrayCalc>" + xmlText;
    var blob = new Blob([xmlText], {
        type: "application/xml;charset=utf-8;"
    });
    saveAs(blob, fileName + ".dbacv");
}


function genGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}



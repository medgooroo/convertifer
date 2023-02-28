
// load the file, find the end of the preamble and ungzip 
const fc2_fileSelector = document.getElementById('file-fc2');
fc2_fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    if (fileList.length == 0) return;
    var arrayBuffer;
    var fileReader = new FileReader();
    fileReader.onload = function () {
        arrayBuffer = this.result;
        //try {
        let buff = new Uint8Array(arrayBuffer);
        const signature = [0x1f, 0x8b, 0x08, 0x00, 0x00]; // gzip magic number, deflate, some zeros.
        let offset = findOffset(buff, signature); // find offset into file for magic number
        let result = pako.ungzip(buff.slice(offset), { "to": "string" }); // ungzip from offset
        const easeXML = new DOMParser().parseFromString(result, "application/xml");
        processEase(easeXML);
        // catch (err) {
        // console.log("Error " + err);
        //}
    };
    //console.log(fileList[0]);
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

function processEase(easeXML) {
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


    // HOLY FUCKING SHITBALLS.
    // FINALLY! we have a javascript object.

    console.log(result);// <-----------------------------------------------HERE for json overall
    // fuck yeah, motherfucker.
    console.log(result.Project.Title);
    //console.log(result.Project.Notes);
    console.log(result.Project.Author);

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
            console.log("Width: " + zoneValue.Width)
            console.log("Orientation: " + zoneValue.Orientation)
            console.log("X: " + zoneValue.X)
            console.log("Y: " + zoneValue.Y)


            console.log("Radius: " + zoneValue.Radius);
            console.log("SweepAngle: " + zoneValue.SweepAngle);
            console.log("InnerRadius: " + zoneValue.InnerRadius);
            console.log("FrontEdge: " + zoneValue.FrontEdge); // front width
            console.log("BackEdge: " + zoneValue.BackEdge); // back width


            for (const [area, areaValue] of Object.entries(zoneValue)) {
                var roomObject = doc.createElement("RoomObject");
                if (area.slice(0, 5) == "Area[") {
                    console.log("****************" + area + "***********")
                    var roomObject = doc.createElement("RoomObject");

                    if (zoneValue.Type == "") {  // WHY is this sometimes not defined???
                        if (zoneValue.Width != undefined) zoneValue.Type = "Rectangle";
                        if (zoneValue.Radius != undefined) zoneValue.Type = "Arc";
                        if (zoneValue.FrontEdge != undefined) zoneValue.Type = "Trapezoid";
                        if (zoneValue.RightAngleLeft != undefined) zoneValue.Type = "Right Trapezoid"; // order is relevant..
                    }
                    console.log("type: " + zoneValue.Type);
                    if (zoneValue.Type == "Arc") roomObject.setAttribute("Shape", "2"); // 
                    if (zoneValue.Type == "Rectangle") roomObject.setAttribute("Shape", "1"); // 
                    if (zoneValue.Type == "Annulus") roomObject.setAttribute("Shape", "2"); // 
                    if (zoneValue.Type == "Trapezoid") roomObject.setAttribute("Shape", "1"); // 
                    if (zoneValue.Type == "Right Trapezoid") roomObject.setAttribute("Shape", "1"); //                 roomObjectGroup.setAttribute("ParentVenueObjectId", "1337"); // doesnt seem to matter?

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

                    el = doc.createElement("Origin");
                    el.setAttribute("x", 0);
                    el.setAttribute("y", 0);
                    el.setAttribute("z", 0);
                    roomObject.appendChild(el);
                    el = doc.createElement("Rotation");
                    el.setAttribute("x", 0);
                    el.setAttribute("y", 0);
                    el.setAttribute("z", zoneValue.Orientation);

                    roomObject.appendChild(el);
                    el = doc.createElement("Scaling");
                    el.setAttribute("x", "1");
                    el.setAttribute("y", "1");
                    el.setAttribute("z", "1");
                    roomObject.appendChild(el);


                    // this needs work.
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
                    }

                    function genRightTrapezoid(roomObject, zoneValue, areaValue) {
                        let orthSideIsRight = zoneValue.RightAngleLeft;
                        let widthPerUnitDepth = (zoneValue.BackEdge - zoneValue.FrontEdge) / zoneValue.Depth;
                        el = doc.createElement("P4");
                        let d1 = parseFloat(areaValue.D1);
                        let d2 = parseFloat(areaValue.D2);
                        let frontEdge = parseFloat(zoneValue.FrontEdge);
                        let backEdge = parseFloat(zoneValue.BackEdge);

                        el.setAttribute("x", -(zoneValue.Depth / 2) + d1);
                        el.setAttribute("y", -(backEdge / 2)); // if orthisleft // TODO This is too confusing without pen and paper.
                        el.setAttribute("y", (backEdge / 2) - frontEdge);
                        el.setAttribute("y", -(-d1 * widthPerUnitDepth / 2) - frontEdge / 2);
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
                    }




                    switch (zoneValue.Type) {
                        case "Annulus":
                            genArcSec(roomObject, zoneValue, areaValue);
                            lastShape = "Arc";
                            break;
                        case "Arc":
                            genArcSec(roomObject, zoneValue, areaValue);
                            lastShape = "Arc";
                            break;
                        case "Right Trapezoid":
                            genRightTrapezoid(roomObject, zoneValue, areaValue);
                            lastShape = "Right Trapezoid";
                            break;
                        case "Trapezoid":
                            genTrapezoid(roomObject, zoneValue, areaValue);
                            lastShape = "Trapezoid";
                            break;
                        case "Rectangle":
                            genRectangle(roomObject, zoneValue, areaValue);
                            lastShape = "Rectangle";
                            break;
                        default: // who tf wrote ease?
                    }


                    roomObject.appendChild(el);
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
    saveAs(blob, "mesh.dbacv");

}

//  console.log(result.Project.AudienceZoneManager);

// audience zone is an offset to its audience areas
// audience area are entirely enclosed within the audience zone
// each area is a section of the zone - same shape - different heights
// zone type can be "annulus"
// trapezoid doesn't seem to have a zone type
// circular sector presumably does?



function genGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}



function writeArrayCalc(mesh) {



    ////////////////////////////////////////////////////////////////////// 

    var triCount = 0;
    for (var i = 0; i < mesh.triangles.length; i = i + 3) {
        var roomObject = doc.createElement("RoomObject");
        roomObject.setAttribute("Shape", "6"); // like 5, but one more.
        roomObject.setAttribute("PlaneType", "1");
        roomObject.setAttribute("Name", "Layer" + triCount);
        roomObject.setAttribute("Enabled", "1");
        roomObject.setAttribute("Transparent", "1");
        roomObject.setAttribute("Locked", "0");
        roomObject.setAttribute("ListenerHeight", "1.7");
        roomObject.setAttribute("Color", "4294923348"); // needs a u.
        roomObject.setAttribute("PrintColor", "4294945280"); // ^
        roomObject.setAttribute("ParentVenueObjectId", "1001"); // 
        roomObject.setAttribute("OrderIndex", triCount); // this ruins things?
        el = doc.createElement("Origin");
        el.setAttribute("x", 0);
        el.setAttribute("y", 0);
        el.setAttribute("z", 0);
        roomObject.appendChild(el);
        el = doc.createElement("Rotation");
        roomObject.appendChild(el);
        el = doc.createElement("Scaling");
        el.setAttribute("x", "1");
        el.setAttribute("y", "1");
        el.setAttribute("z", "1");
        roomObject.appendChild(el);
        el = doc.createElement("P1");
        el.setAttribute("x", mesh.vertices[mesh.triangles[i] * 3]);
        el.setAttribute("y", mesh.vertices[mesh.triangles[i] * 3 + 1]);
        el.setAttribute("z", mesh.vertices[mesh.triangles[i] * 3 + 2]);
        roomObject.appendChild(el);
        el = doc.createElement("P2");
        el.setAttribute("x", mesh.vertices[mesh.triangles[i + 1] * 3]);
        el.setAttribute("y", mesh.vertices[mesh.triangles[i + 1] * 3 + 1]);
        el.setAttribute("z", mesh.vertices[mesh.triangles[i + 1] * 3 + 2]);
        roomObject.appendChild(el);
        el = doc.createElement("P3");
        el.setAttribute("x", mesh.vertices[mesh.triangles[i + 2] * 3]);
        el.setAttribute("y", mesh.vertices[mesh.triangles[i + 2] * 3 + 1]);
        el.setAttribute("z", mesh.vertices[mesh.triangles[i + 2] * 3 + 2]);
        roomObject.appendChild(el);
        /////////////////////////////////
        roomObjectGroup.appendChild(roomObject);
        triCount++;
    }

    el = doc.createElement("Origin");
    el.setAttribute("x", 0);
    el.setAttribute("y", 0);
    el.setAttribute("z", 0);
    roomObjectGroup.appendChild(el);
    el = doc.createElement("Rotation");
    roomObjectGroup.appendChild(el);
    el = doc.createElement("Scaling");
    el.setAttribute("x", "1");
    el.setAttribute("y", "1");
    el.setAttribute("z", "1");
    roomObjectGroup.appendChild(el);

    roomObjectGroup.appendChild(roomObject);
    var xmlText = new XMLSerializer().serializeToString(main);
    xmlText = "<!DOCTYPE ArrayCalc>" + xmlText;
    var blob = new Blob([xmlText], {
        type: "application/xml;charset=utf-8;"
    });
    saveAs(blob, "mesh.dbacv"); // TODO file thing

}

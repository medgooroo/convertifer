const fileSelector = document.getElementById('file-dbacv');
fileSelector.addEventListener('change', (event) => {
    console.log("???");
    const fileList = event.target.files;
    if (fileList.length == 0) return;
    db = fileList[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        const dbacv = new DOMParser().parseFromString(e.target.result, "application/xml");
        processdbacv(dbacv, fileList[0].name);
    }
    reader.readAsText(fileList[0]);
});



function processdbacv(dbacv, fileName) {
    // TODO option to import visible only? 
    // preamble taken from su2sv output. Does it even matter?
    var objText = 
`"; Exported by dbacvToSv thing"
"; "
";   using Outside is front (white)" 
";   using Name By Layer"
";   using Visible Entities"
";"
";"
";"
"; LengthUnit", "m"
";"`
    // projectName = dbacv.getElementsByTagName('Project')[0].getAttribute('Name');
    var roomObjects = dbacv.getElementsByTagName('RoomObject');
    for (i = 0; i < roomObjects.length; i++) {
        switch (roomObjects[i].getAttribute('Shape')) {
            case "1":  // quadrangular
                // objText += genQuad(roomObjects[i]);
                objText += genPrimitive(roomObjects[i], 4);
                break
            case "2": //arcSegment  
                objText += genArcSeg(roomObjects[i], false);
                break
            case "3": // superelliptic
                objText += genArcSeg(roomObjects[i], true);
                break
            case "4": //cube 
                objText += genCube(roomObjects[i]);
                break
            case "5": // group "Object"
                //  We handle by looking up at objects parents.
                break
            case "6": //triangle
                objText += genPrimitive(roomObjects[i], 3);
                //objText += genTri(roomObjects[i]);
                break
            default:
                console.log("Unsupported shape type?")
        }
    }
    var blob = new Blob([objText], {
        type: "text/plain;charset=utf-8;"
    });
    saveAs(blob, fileName + ".txt");
}

function polarInEllipseToCartesian(major, minor, angle, exponent = 2) {
    let r = major * minor /
        Math.pow(
            Math.pow(major, exponent) * Math.pow(Math.abs(Math.sin(deg2rad(angle))), exponent) +
            Math.pow(minor, exponent) * Math.pow(Math.abs(Math.cos(deg2rad(angle))), exponent),
            1 / exponent);
    let x = r * Math.cos(deg2rad(angle));
    let y = r * Math.sin(deg2rad(angle));
    if (major == 0 || minor == 0) {
        x = 0;
        y = 0;
    }
    return { x, y };
}

function deg2rad(d) {
    return d * Math.PI / 180
}

function rad2deg(r) {
    return ((r * 180 / Math.PI) + 360.0) % 360
}

function getOriginFromObjectAndGroup(roomObj) {
    var point = roomObj.getElementsByTagName("Origin");
    const orig = {
        x: parseFloat(point[0].getAttribute("x")),
        y: parseFloat(point[0].getAttribute("y")),
        z: parseFloat(point[0].getAttribute("z"))
    }
    groupOrigin = {
        x: 0, y: 0, z: 0
    };
    var originTags = roomObj.parentNode.getElementsByTagName("Origin"); // all the roomobjects.
    for (var i = 0; i < originTags.length; i++) {
        if (originTags[i].parentNode.getAttribute("ObjectGroup") == "true") {
            groupOrigin = {
                x: parseFloat(originTags[i].getAttribute("x")),
                y: parseFloat(originTags[i].getAttribute("y")),
                z: parseFloat(originTags[i].getAttribute("z")),
            }
        }
    }
    if (roomObj.parentNode.getAttribute("ObjectGroup") == "true") {
        orig.x += groupOrigin.x;
        orig.y += groupOrigin.y;
        orig.z += groupOrigin.z;
    }
    return orig;
}

function genPrimitive(roomObj, numVertices) {
    // handlese tris + quads. and probably pentagons, hexagons etc. if arraycalc made em.
    const orig = getOriginFromObjectAndGroup(roomObj);
    let vertices = [];
    for (let i = 0; i < numVertices; i++) {
        let aVert = { x: 0, y: 0, z: 0 };
        let pointTag = roomObj.getElementsByTagName("P" + (i + 1));
        aVert.x = parseFloat(pointTag[0].getAttribute("x"));
        aVert.y = parseFloat(pointTag[0].getAttribute("y"));
        aVert.z = parseFloat(pointTag[0].getAttribute("z"));
        vertices.push(aVert);
    }
    const angle = roomObj.getElementsByTagName("Rotation")[0].getAttribute("z"); // arraycalc doesn't seem to offer rotation around any other axis
    rotate(vertices, angle);
    translate(vertices, orig.x, orig.y, orig.z);

    var text = '\n"Label","' + roomObj.getAttribute('Name') + '"\n';
    for (var i = numVertices - 1; i >= 0; i--) { // soundvision uses the winding to decide what is the "top" of the poly...
        text += vertices[i].x + "," + vertices[i].y + "," + vertices[i].z + "\n";
    }
    text += '";"';
    return text;
}

function translate(points, x, y, z) {
    for (var p = 0; p < points.length; p++) {
        points[p].x = points[p].x * 1 + x; // no idea why we need to force this out of a string?
        points[p].y = points[p].y * 1 + y;
        points[p].z = points[p].z * 1 + z;
    }
}

function rotate(points, angleInDeg) {
    const angle = deg2rad(angleInDeg);
    for (var p = 0; p < points.length; p++) {
        //  pz = points[p].z - origin.z; // we're always rotating around z?
        resX = points[p].x * Math.cos(angle) - points[p].y * Math.sin(angle);
        resY = points[p].x * Math.sin(angle) + points[p].y * Math.cos(angle);
        points[p].x = resX;// + origin.x;
        points[p].y = resY;// + origin.y;
        points[p].z; // unchanged
    }
}

function deg2rad(d) {
    return d * Math.PI / 180
}

function saveAs(content, fName) {
    const blobURL = window.URL.createObjectURL(content);
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', fName);
    // Safari thinks _blank anchor are pop ups. We only want to set _blank
    // target if the browser does not support the HTML5 download attribute.
    // This allows you to download files in desktop safari if pop up blocking
    // is enabled.
    if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    setTimeout(() => {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(blobURL);
    }, 100);
}

function genArcSeg(roomObj, isSuperEllipse) {
    // handles segments and ellipses of arbitrary ranges, hypo, standard + hyper
    const orig = getOriginFromObjectAndGroup(roomObj);
    var innerMajor, outerMajor, innerMinor, outerMinor, innerN, outerN;
    if (isSuperEllipse) {
        innerMajor = parseFloat(roomObj.getAttribute("InnerA")); // inner size in x
        outerMajor = parseFloat(roomObj.getAttribute("OuterA")); // outer size in x
        innerMinor = parseFloat(roomObj.getAttribute("InnerB")); // inner size in y
        outerMinor = parseFloat(roomObj.getAttribute("OuterB")); // outer size in y
        innerN = parseFloat(roomObj.getAttribute("InnerN")); // lets get hyper!
        outerN = parseFloat(roomObj.getAttribute("OuterN"));
    }
    else {
        innerMajor = parseFloat(roomObj.getAttribute("InnerRadiusA")); // inner size in x
        outerMajor = parseFloat(roomObj.getAttribute("OuterRadiusA")); // outer size in x
        innerMinor = parseFloat(roomObj.getAttribute("InnerRadiusB")); // inner size in y
        outerMinor = parseFloat(roomObj.getAttribute("OuterRadiusB")); // outer size in y
        innerN = 2; // no superEllipses here. just standard ones.
        outerN = 2; 
    }

    let startAngle = parseFloat(roomObj.getAttribute("StartAngle"));
    let spanAngle = parseFloat(roomObj.getAttribute("SpanAngle"));
    let innerZ = parseFloat(roomObj.getAttribute("InnerZ"));
    let outerZ = parseFloat(roomObj.getAttribute("OuterZ"));
    // counterclockwise winding for soundvision
    let innerVerts = [];
    let outerVerts = [];
    let startQuadrant = Math.floor(startAngle / 90);
    let endQuadrant = Math.floor((startAngle + spanAngle) / 90);
    for (let q = startQuadrant; q <= endQuadrant; q++) {
        let qstart = (q) * 90;
        let qend = (q + 1) * 90;
        if (q == startQuadrant) qstart = startAngle;
        if (q == endQuadrant) qend = startAngle + spanAngle;
        // thought. figure out eucilidean distance between 2 angle points and split if beyond threshold?
        let rangeInQuadrant = qend - qstart;
        let segmentsInQuadrant = Math.ceil(rangeInQuadrant / 10); 
        let segmentSpan = rangeInQuadrant / segmentsInQuadrant;
        for (let i = 0; i < segmentsInQuadrant; i++) {
            let segmentStart = (segmentSpan * i) + qstart;
            outerVerts.push(polarInEllipseToCartesian(outerMajor, outerMinor, segmentStart, outerN));
            innerVerts.push(polarInEllipseToCartesian(innerMajor, innerMinor, segmentStart, innerN));
        }
    }
    innerVerts.push(polarInEllipseToCartesian(innerMajor, innerMinor, startAngle + spanAngle, innerN));
    outerVerts.push(polarInEllipseToCartesian(outerMajor, outerMinor, startAngle + spanAngle, outerN));
    // set the z heights
    for (var p = 0; p < innerVerts.length; p++) {
        innerVerts[p].z = innerZ;
        outerVerts[p].z = outerZ;
    }

    const angle = roomObj.getElementsByTagName("Rotation")[0].getAttribute("z"); // arraycalc doesn't seem to offer rotation around any other axis
    rotate(innerVerts, angle);
    rotate(outerVerts, angle);
    translate(innerVerts, orig.x, orig.y, orig.z);
    translate(outerVerts, orig.x, orig.y, orig.z);
    let text = "";
    const arcName = roomObj.getAttribute('Name');
    for (var p = 0; p < innerVerts.length - 1; p++) {
        text += '\n"Label","' + arcName + ' ' + p + '"\n';
        text += `${outerVerts[p].x},${outerVerts[p].y},${outerVerts[p].z}\n`;
        text += `${outerVerts[p + 1].x},${outerVerts[p + 1].y},${outerVerts[p + 1].z}\n`;
        text += `${innerVerts[p + 1].x},${innerVerts[p + 1].y},${innerVerts[p + 1].z}\n`;
        text += `${innerVerts[p].x},${innerVerts[p].y},${innerVerts[p].z}\n`;
        text += ";";
    }
    return text;
}

function genCube(roomObj) {
    const orig = getOriginFromObjectAndGroup(roomObj);
    const quadName = roomObj.getAttribute('Name');
    let verts = [];
    aVert = { x: 0, y: 0, z: 0 };
    for (p = 1; p < 9; p++) {
        let x = roomObj.getElementsByTagName("P" + p)[0].getAttribute("x");
        let y = roomObj.getElementsByTagName("P" + p)[0].getAttribute("y");
        let z = roomObj.getElementsByTagName("P" + p)[0].getAttribute("z");
        verts.push({ x, y, z });
    }

    const angle = roomObj.getElementsByTagName("Rotation")[0].getAttribute("z");
    rotate(verts, angle);
    translate(verts, orig.x, orig.y, orig.z);
    // I'm not sure rewriting this with a LUT for winding would really /help/ anyone. 
    let text = '\n"Label","' + quadName + ' ' + 1 + '"\n';
    text += `${verts[0].x},${verts[0].y},${verts[0].z}\n`;
    text += `${verts[1].x},${verts[1].y},${verts[1].z}\n`;
    text += `${verts[2].x},${verts[2].y},${verts[2].z}\n`;
    text += `${verts[3].x},${verts[3].y},${verts[3].z}\n`;
    text += ";";
    text += '\n"Label","' + quadName + ' ' + 2 + '"\n';
    text += `${verts[5].x},${verts[5].y},${verts[5].z}\n`;
    text += `${verts[6].x},${verts[6].y},${verts[6].z}\n`;
    text += `${verts[2].x},${verts[2].y},${verts[2].z}\n`;
    text += `${verts[1].x},${verts[1].y},${verts[1].z}\n`;
    text += ";";
    text += '\n"Label","' + quadName + ' ' + 3 + '"\n';
    text += `${verts[7].x},${verts[7].y},${verts[7].z}\n`;
    text += `${verts[6].x},${verts[6].y},${verts[6].z}\n`;
    text += `${verts[5].x},${verts[5].y},${verts[5].z}\n`;
    text += `${verts[4].x},${verts[4].y},${verts[4].z}\n`;
    text += ";";
    text += '\n"Label","' + quadName + ' ' + 4 + '"\n';
    text += `${verts[0].x},${verts[0].y},${verts[0].z}\n`;
    text += `${verts[3].x},${verts[3].y},${verts[3].z}\n`;
    text += `${verts[7].x},${verts[7].y},${verts[7].z}\n`;
    text += `${verts[4].x},${verts[4].y},${verts[4].z}\n`;
    text += ";";
    text += '\n"Label","' + quadName + ' ' + 5 + '"\n';
    text += `${verts[6].x},${verts[6].y},${verts[6].z}\n`;
    text += `${verts[7].x},${verts[7].y},${verts[7].z}\n`;
    text += `${verts[3].x},${verts[3].y},${verts[3].z}\n`;
    text += `${verts[2].x},${verts[2].y},${verts[2].z}\n`;
    text += ";";
    text += '\n"Label","' + quadName + ' ' + 6 + '"\n';
    text += `${verts[4].x},${verts[4].y},${verts[4].z}\n`;
    text += `${verts[5].x},${verts[5].y},${verts[5].z}\n`;
    text += `${verts[1].x},${verts[1].y},${verts[1].z}\n`;
    text += `${verts[0].x},${verts[0].y},${verts[0].z}\n`;
    text += ";";
    return text;
}
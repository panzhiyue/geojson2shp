
var gj = '{"type":"FeatureCollection", "features": [{ "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [[[[119, 29], [120, 28], [120, 29], [119, 29]]], [[[118, 29], [117, 29], [118, 28], [118, 29]]]] }, "properties": { "NAME": "测试多面" } },{ "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [[[[120, 29], [121, 28], [121, 29], [120, 29]]], [[[118, 29], [119, 28], [119, 29], [118, 29]]]] }, "properties": { "NAME": "测试多面2" } },{ "type": "Feature", "geometry": { "type": "MultiPolygon", "coordinates": [[[[121, 29], [122, 28], [122, 29], [121, 29]]], [[[119, 29], [120, 28], [120, 29], [119, 29]]]] }, "properties": { "NAME": "测试多面3" } }]}';

var cpg = 'UTF-8';
var projection = 'GEOGCS[\"GCS_China_Geodetic_Coordinate_System_2000\",DATUM[\"D_China_2000\",SPHEROID[\"CGCS2000\",6378137.0,298.257222101]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]]';

$("#btnDownLoad").bind("click", function () {
    var zip = new JSZip(),
        layers = zip.folder('layers');
    console.log(GeoJson2Shp);
    var g2s = new GeoJson2Shp.GeoJson2Shp(gj);
    g2s.writePoint(function (err, files) {
        var fileName = "point";
        layers.file(fileName + '.shp', files.shp.buffer, { binary: true });
        layers.file(fileName + '.shx', files.shx.buffer, { binary: true });
        layers.file(fileName + '.dbf', files.dbf.buffer, { binary: true });
        layers.file(fileName + '.prj', projection);
        layers.file(fileName + '.cpg', cpg);

    }.bind(this));

    g2s.writeMultiPoint(function (err, files) {
        var fileName = "multipoint";
        layers.file(fileName + '.shp', files.shp.buffer, { binary: true });
        layers.file(fileName + '.shx', files.shx.buffer, { binary: true });
        layers.file(fileName + '.dbf', files.dbf.buffer, { binary: true });
        layers.file(fileName + '.prj', projection);
        layers.file(fileName + '.cpg', cpg);

    }.bind(this));

    g2s.writePolyline(function (err, files) {
        var fileName = "polyline";
        layers.file(fileName + '.shp', files.shp.buffer, { binary: true });
        layers.file(fileName + '.shx', files.shx.buffer, { binary: true });
        layers.file(fileName + '.dbf', files.dbf.buffer, { binary: true });
        layers.file(fileName + '.prj', projection);
        layers.file(fileName + '.cpg', cpg);
    }.bind(this));

    g2s.writePolygon(function (err, files) {
        var fileName = "polygon";
        layers.file(fileName + '.shp', files.shp.buffer, { binary: true });
        layers.file(fileName + '.shx', files.shx.buffer, { binary: true });
        layers.file(fileName + '.dbf', files.dbf.buffer, { binary: true });
        layers.file(fileName + '.prj', projection);
        layers.file(fileName + '.cpg', cpg);
    }.bind(this));

    var zipName = "example";
    zip.generateAsync({ type: "blob" })
        .then(function (content) {
            // see FileSaver.js
            saveAs(content, zipName + ".zip");
        });
});

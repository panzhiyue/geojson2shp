!function(e){var i={};function n(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=i,n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,i){if(1&i&&(e=n(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var r in e)n.d(t,r,function(i){return e[i]}.bind(null,r));return t},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=2)}({2:function(e,i){var n="UTF-8",t='GEOGCS["GCS_China_Geodetic_Coordinate_System_2000",DATUM["D_China_2000",SPHEROID["CGCS2000",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]';$("#btnDownLoad").bind("click",(function(){alert(1221);var e=new JSZip,i=e.folder("layers"),r=new GeoJson2Shp.GeoJson2Shp('{"type":"FeatureCollection", "features": [{ "type": "Feature", "geometry": { "type": "MultiPoint", "coordinates": [[120, 28], [120, 29]] }, "properties": { "NAME": "测试多点" } },{ "type": "Feature", "geometry": { "type": "MultiPoint", "coordinates": [[121, 28], [121, 29]] }, "properties": { "NAME": "测试多点2" } },{ "type": "Feature", "geometry": { "type": "MultiPoint", "coordinates": [[122, 28], [122, 29]] }, "properties": { "NAME": "测试多点3" } }]}');r.writePoint(function(e,r){i.file("point.shp",r.shp.buffer,{binary:!0}),i.file("point.shx",r.shx.buffer,{binary:!0}),i.file("point.dbf",r.dbf.buffer,{binary:!0}),i.file("point.prj",t),i.file("point.cpg",n)}.bind(this)),r.writeMultiPoint(function(e,r){i.file("multipoint.shp",r.shp.buffer,{binary:!0}),i.file("multipoint.shx",r.shx.buffer,{binary:!0}),i.file("multipoint.dbf",r.dbf.buffer,{binary:!0}),i.file("multipoint.prj",t),i.file("multipoint.cpg",n)}.bind(this)),r.writePolyline(function(e,r){i.file("polyline.shp",r.shp.buffer,{binary:!0}),i.file("polyline.shx",r.shx.buffer,{binary:!0}),i.file("polyline.dbf",r.dbf.buffer,{binary:!0}),i.file("polyline.prj",t),i.file("polyline.cpg",n)}.bind(this)),r.writePolygon(function(e,r){i.file("polygon.shp",r.shp.buffer,{binary:!0}),i.file("polygon.shx",r.shx.buffer,{binary:!0}),i.file("polygon.dbf",r.dbf.buffer,{binary:!0}),i.file("polygon.prj",t),i.file("polygon.cpg",n)}.bind(this));e.generateAsync({type:"blob"}).then((function(e){saveAs(e,"example.zip")}))}))}});
//# sourceMappingURL=官方示例_DownLoadZip_MultiPoint.js.map
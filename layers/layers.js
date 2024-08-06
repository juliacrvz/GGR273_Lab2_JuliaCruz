var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "Alberta Boundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> Alberta Boundary'
            });
var format_FishStockingPoints_1 = new ol.format.GeoJSON();
var features_FishStockingPoints_1 = format_FishStockingPoints_1.readFeatures(json_FishStockingPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_1.addFeatures(features_FishStockingPoints_1);
var lyr_FishStockingPoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_1, 
                style: style_FishStockingPoints_1,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_1_0.png" /> 0 - 350<br />\
    <img src="styles/legend/FishStockingPoints_1_1.png" /> 351 - 911<br />\
    <img src="styles/legend/FishStockingPoints_1_2.png" /> 912 - 2000<br />\
    <img src="styles/legend/FishStockingPoints_1_3.png" /> 2001 - 4240<br />\
    <img src="styles/legend/FishStockingPoints_1_4.png" /> 4241 - 1613075<br />'
        });
var format_WaterBodiesinAlberta_2 = new ol.format.GeoJSON();
var features_WaterBodiesinAlberta_2 = format_WaterBodiesinAlberta_2.readFeatures(json_WaterBodiesinAlberta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterBodiesinAlberta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterBodiesinAlberta_2.addFeatures(features_WaterBodiesinAlberta_2);
var lyr_WaterBodiesinAlberta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterBodiesinAlberta_2, 
                style: style_WaterBodiesinAlberta_2,
                popuplayertitle: "Water Bodies in Alberta",
                interactive: false,
                title: '<img src="styles/legend/WaterBodiesinAlberta_2.png" /> Water Bodies in Alberta'
            });

lyr_AlbertaBoundary_0.setVisible(true);lyr_FishStockingPoints_1.setVisible(true);lyr_WaterBodiesinAlberta_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_FishStockingPoints_1,lyr_WaterBodiesinAlberta_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints_1.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'Updated N': 'Updated N', });
lyr_WaterBodiesinAlberta_2.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': '', 'DGUID': '', 'PRNAME': '', 'PRENAME': '', 'PRFNAME': '', 'PREABBR': '', 'PRFABBR': '', 'LANDAREA': '', });
lyr_FishStockingPoints_1.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'Updated N': 'Range', });
lyr_WaterBodiesinAlberta_2.set('fieldImages', {'HYDROUID': '', 'NAME': '', 'RANK': '', 'PRUID': '', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints_1.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Map Author': 'header label - always visible', 'Updated N': 'inline label - always visible', });
lyr_WaterBodiesinAlberta_2.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_WaterBodiesinAlberta_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
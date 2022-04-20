ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([37.956585, 11.778968, 38.078346, 11.918794]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_puit_WSG84_1 = new ol.format.GeoJSON();
var features_puit_WSG84_1 = format_puit_WSG84_1.readFeatures(json_puit_WSG84_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_puit_WSG84_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puit_WSG84_1.addFeatures(features_puit_WSG84_1);
var lyr_puit_WSG84_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puit_WSG84_1, 
                style: style_puit_WSG84_1,
                interactive: true,
                title: '<img src="styles/legend/puit_WSG84_1.png" /> puit_WSG84'
            });
var format_test_2 = new ol.format.GeoJSON();
var features_test_2 = format_test_2.readFeatures(json_test_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_test_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_2.addFeatures(features_test_2);
var lyr_test_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_2, 
                style: style_test_2,
                interactive: true,
                title: '<img src="styles/legend/test_2.png" /> test'
            });

lyr_OSMStandard_0.setVisible(true);lyr_puit_WSG84_1.setVisible(true);lyr_test_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_puit_WSG84_1,lyr_test_2];
lyr_puit_WSG84_1.set('fieldAliases', {'Points eau': 'Points eau', 'x': 'x', 'y': 'y', 'depth': 'depth', 'yield': 'yield', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_test_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_puit_WSG84_1.set('fieldImages', {'Points eau': '', 'x': '', 'y': '', 'depth': '', 'yield': '', 'longitude': '', 'latitude': '', });
lyr_test_2.set('fieldImages', {'id': '', 'name': '', 'latitude': '', 'longitude': '', });
lyr_puit_WSG84_1.set('fieldLabels', {'Points eau': 'no label', 'x': 'no label', 'y': 'no label', 'depth': 'no label', 'yield': 'no label', 'longitude': 'no label', 'latitude': 'no label', });
lyr_test_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_test_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
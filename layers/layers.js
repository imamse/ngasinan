var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Dusun_Ngasinan_2 = new ol.format.GeoJSON();
var features_Batas_Dusun_Ngasinan_2 = format_Batas_Dusun_Ngasinan_2.readFeatures(json_Batas_Dusun_Ngasinan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Dusun_Ngasinan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Dusun_Ngasinan_2.addFeatures(features_Batas_Dusun_Ngasinan_2);
var lyr_Batas_Dusun_Ngasinan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Dusun_Ngasinan_2, 
                style: style_Batas_Dusun_Ngasinan_2,
                interactive: true,
                title: '<img src="styles/legend/Batas_Dusun_Ngasinan_2.png" /> Batas_Dusun_Ngasinan'
            });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                interactive: true,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Batas_Dusun_Ngasinan_2.setVisible(true);lyr_Clipped_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Batas_Dusun_Ngasinan_2,lyr_Clipped_3];
lyr_Batas_Dusun_Ngasinan_2.set('fieldAliases', {'LAYER': 'LAYER', 'FID_1': 'FID_1', 'Dusun': 'Dusun', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', });
lyr_Clipped_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'building': 'building', 'government': 'government', 'name': 'name', 'office': 'office', 'craft': 'craft', 'amenity': 'amenity', 'religion': 'religion', 'shop': 'shop', 'healthcare': 'healthcare', 'operator': 'operator', 'layer': 'layer', });
lyr_Batas_Dusun_Ngasinan_2.set('fieldImages', {'LAYER': 'TextEdit', 'FID_1': 'Range', 'Dusun': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', });
lyr_Clipped_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'addr:city': '', 'addr:postcode': '', 'addr:street': '', 'building': '', 'government': '', 'name': '', 'office': '', 'craft': '', 'amenity': '', 'religion': '', 'shop': '', 'healthcare': '', 'operator': '', 'layer': '', });
lyr_Batas_Dusun_Ngasinan_2.set('fieldLabels', {'LAYER': 'no label', 'FID_1': 'no label', 'Dusun': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'building': 'no label', 'government': 'no label', 'name': 'no label', 'office': 'no label', 'craft': 'no label', 'amenity': 'no label', 'religion': 'no label', 'shop': 'no label', 'healthcare': 'no label', 'operator': 'no label', 'layer': 'no label', });
lyr_Clipped_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
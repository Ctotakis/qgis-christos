var wms_layers = [];

var lyr_crete2100_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "crete2100",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/crete2100_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2594986.151914, 4121105.354180, 2959780.600053, 4301994.756866]
                            })
                        });
var format_Lithology_1 = new ol.format.GeoJSON();
var features_Lithology_1 = format_Lithology_1.readFeatures(json_Lithology_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lithology_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lithology_1.addFeatures(features_Lithology_1);
var lyr_Lithology_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lithology_1, 
                style: style_Lithology_1,
                popuplayertitle: "Lithology",
                interactive: false,
    title: 'Lithology<br />\
    <img src="styles/legend/Lithology_1_0.png" /> LAKE<br />\
    <img src="styles/legend/Lithology_1_1.png" /> ΑΛΒΑΝΙΑ<br />\
    <img src="styles/legend/Lithology_1_2.png" /> ΑΠ1<br />\
    <img src="styles/legend/Lithology_1_3.png" /> ΑΠ2<br />\
    <img src="styles/legend/Lithology_1_4.png" /> ΑΠ3<br />\
    <img src="styles/legend/Lithology_1_5.png" /> ΑΠ4<br />\
    <img src="styles/legend/Lithology_1_6.png" /> ΑΠ5<br />\
    <img src="styles/legend/Lithology_1_7.png" /> ΑΠ6<br />\
    <img src="styles/legend/Lithology_1_8.png" /> ΑΠ7<br />\
    <img src="styles/legend/Lithology_1_9.png" /> ΑΠ8<br />\
    <img src="styles/legend/Lithology_1_10.png" /> Β1<br />\
    <img src="styles/legend/Lithology_1_11.png" /> ΒΟΥΛΓΑΡΙΑ<br />\
    <img src="styles/legend/Lithology_1_12.png" /> ΓΤ1<br />\
    <img src="styles/legend/Lithology_1_13.png" /> ΓΤ2<br />\
    <img src="styles/legend/Lithology_1_14.png" /> ΓΤ3<br />\
    <img src="styles/legend/Lithology_1_15.png" /> ΓΤ4<br />\
    <img src="styles/legend/Lithology_1_16.png" /> ΓΤ5<br />\
    <img src="styles/legend/Lithology_1_17.png" /> Η1<br />\
    <img src="styles/legend/Lithology_1_18.png" /> Η2<br />\
    <img src="styles/legend/Lithology_1_19.png" /> Η3<br />\
    <img src="styles/legend/Lithology_1_20.png" /> Η4<br />\
    <img src="styles/legend/Lithology_1_21.png" /> Η6<br />\
    <img src="styles/legend/Lithology_1_22.png" /> ΗΜ1<br />\
    <img src="styles/legend/Lithology_1_23.png" /> ΗΜ3<br />\
    <img src="styles/legend/Lithology_1_24.png" /> ΗΜ4<br />\
    <img src="styles/legend/Lithology_1_25.png" /> Ι1<br />\
    <img src="styles/legend/Lithology_1_26.png" /> Ι2<br />\
    <img src="styles/legend/Lithology_1_27.png" /> Ι3<br />\
    <img src="styles/legend/Lithology_1_28.png" /> Ι4<br />\
    <img src="styles/legend/Lithology_1_29.png" /> Ι5<br />\
    <img src="styles/legend/Lithology_1_30.png" /> Μ1<br />\
    <img src="styles/legend/Lithology_1_31.png" /> Μ2<br />\
    <img src="styles/legend/Lithology_1_32.png" /> Μ3<br />\
    <img src="styles/legend/Lithology_1_33.png" /> Μ5<br />\
    <img src="styles/legend/Lithology_1_34.png" /> Μ6<br />\
    <img src="styles/legend/Lithology_1_35.png" /> ΜΒ1<br />\
    <img src="styles/legend/Lithology_1_36.png" /> ΜΒ10<br />\
    <img src="styles/legend/Lithology_1_37.png" /> ΜΒ11<br />\
    <img src="styles/legend/Lithology_1_38.png" /> ΜΒ12<br />\
    <img src="styles/legend/Lithology_1_39.png" /> ΜΒ13<br />\
    <img src="styles/legend/Lithology_1_40.png" /> ΜΒ14<br />\
    <img src="styles/legend/Lithology_1_41.png" /> ΜΒ2<br />\
    <img src="styles/legend/Lithology_1_42.png" /> ΜΒ3<br />\
    <img src="styles/legend/Lithology_1_43.png" /> ΜΒ4<br />\
    <img src="styles/legend/Lithology_1_44.png" /> ΜΒ5<br />\
    <img src="styles/legend/Lithology_1_45.png" /> ΜΒ7<br />\
    <img src="styles/legend/Lithology_1_46.png" /> ΜΒ8<br />\
    <img src="styles/legend/Lithology_1_47.png" /> ΜΒ9<br />\
    <img src="styles/legend/Lithology_1_48.png" /> Ο1<br />\
    <img src="styles/legend/Lithology_1_49.png" /> Ο2<br />\
    <img src="styles/legend/Lithology_1_50.png" /> Π.Γ.Δ.Μ.<br />\
    <img src="styles/legend/Lithology_1_51.png" /> ΠΑ1<br />\
    <img src="styles/legend/Lithology_1_52.png" /> ΠΑ2<br />\
    <img src="styles/legend/Lithology_1_53.png" /> ΠΑ3<br />\
    <img src="styles/legend/Lithology_1_54.png" /> ΠΑ4<br />\
    <img src="styles/legend/Lithology_1_55.png" /> ΠΑ5<br />\
    <img src="styles/legend/Lithology_1_56.png" /> ΠΕ1<br />\
    <img src="styles/legend/Lithology_1_57.png" /> ΠΕ2<br />\
    <img src="styles/legend/Lithology_1_58.png" /> ΠΕ3<br />\
    <img src="styles/legend/Lithology_1_59.png" /> ΠΕ4<br />\
    <img src="styles/legend/Lithology_1_60.png" /> ΠΕ5<br />\
    <img src="styles/legend/Lithology_1_61.png" /> ΠΙ1<br />\
    <img src="styles/legend/Lithology_1_62.png" /> ΠΙ2<br />\
    <img src="styles/legend/Lithology_1_63.png" /> ΠΙ3<br />\
    <img src="styles/legend/Lithology_1_64.png" /> ΠΙ4<br />\
    <img src="styles/legend/Lithology_1_65.png" /> ΠΞ1<br />\
    <img src="styles/legend/Lithology_1_66.png" /> ΠΞ2<br />\
    <img src="styles/legend/Lithology_1_67.png" /> ΠΞ3<br />\
    <img src="styles/legend/Lithology_1_68.png" /> ΠΡ1<br />\
    <img src="styles/legend/Lithology_1_69.png" /> ΠΡ2<br />\
    <img src="styles/legend/Lithology_1_70.png" /> ΠΡ3<br />\
    <img src="styles/legend/Lithology_1_71.png" /> ΠΡ4<br />\
    <img src="styles/legend/Lithology_1_72.png" /> ΠΡ5<br />\
    <img src="styles/legend/Lithology_1_73.png" /> ΠΡ6<br />\
    <img src="styles/legend/Lithology_1_74.png" /> ΠΥ1<br />\
    <img src="styles/legend/Lithology_1_75.png" /> ΠΥ2<br />\
    <img src="styles/legend/Lithology_1_76.png" /> ΠΥ3<br />\
    <img src="styles/legend/Lithology_1_77.png" /> ΠΥ4<br />\
    <img src="styles/legend/Lithology_1_78.png" /> ΤΟΥΡΚΙΑ<br />\
    <img src="styles/legend/Lithology_1_79.png" /> ΗΜ2<br />\
    <img src="styles/legend/Lithology_1_80.png" /> SEA<br />'
        });
var format_Springscrete_gis_2 = new ol.format.GeoJSON();
var features_Springscrete_gis_2 = format_Springscrete_gis_2.readFeatures(json_Springscrete_gis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Springscrete_gis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Springscrete_gis_2.addFeatures(features_Springscrete_gis_2);
var lyr_Springscrete_gis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Springscrete_gis_2, 
                style: style_Springscrete_gis_2,
                popuplayertitle: "Springscrete_gis",
                interactive: true,
                title: '<img src="styles/legend/Springscrete_gis_2.png" /> Springscrete_gis'
            });
var lyr_idw_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "idw",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/idw_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2609232.803572, 4178150.749211, 2708377.513151, 4256952.662008]
                            })
                        });

lyr_crete2100_0.setVisible(true);lyr_Lithology_1.setVisible(true);lyr_Springscrete_gis_2.setVisible(true);lyr_idw_3.setVisible(true);
var layersList = [lyr_crete2100_0,lyr_Lithology_1,lyr_Springscrete_gis_2,lyr_idw_3];
lyr_Lithology_1.set('fieldAliases', {'Shape__Length': 'Shape_Length', 'Shape__Area': 'Shape_Area', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GMGLFMNT_': 'GMGLFMNT_', 'GMGLFMNT_I': 'GMGLFMNT_I', 'TYPE': 'TYPE', 'FORM_NUM': 'FORM_NUM', 'ZONES': 'ZONES', 'CATEGORY_GR': 'CATEGORY_GR', 'AGE_GR': 'AGE_GR', 'DESCR_GR': 'DESCR_GR', 'CATEGORY': 'CATEGORY', 'AGES': 'AGES', 'DESCR': 'DESCR', });
lyr_Springscrete_gis_2.set('fieldAliases', {'Station ID': 'Station ID', 'X coordinate': 'X coordinate', 'Y coordinate': 'Y coordinate', 'Elevation': 'Elevation', 'Temperature': 'Temperature', 'pH (field)': 'pH (field)', 'El. Cond.': 'El. Cond.', 'TDS': 'TDS', 'Ca': 'Ca', 'Mg': 'Mg', 'Na': 'Na', 'K': 'K', 'Cl': 'Cl', 'HCO3': 'HCO3', 'SO4': 'SO4', 'F': 'F', });
lyr_Lithology_1.set('fieldImages', {'Shape__Length': '', 'Shape__Area': '', 'OBJECTID': '', 'AREA': '', 'PERIMETER': '', 'GMGLFMNT_': '', 'GMGLFMNT_I': '', 'TYPE': '', 'FORM_NUM': '', 'ZONES': '', 'CATEGORY_GR': '', 'AGE_GR': '', 'DESCR_GR': '', 'CATEGORY': '', 'AGES': '', 'DESCR': '', });
lyr_Springscrete_gis_2.set('fieldImages', {'Station ID': 'TextEdit', 'X coordinate': 'Range', 'Y coordinate': 'Range', 'Elevation': 'Range', 'Temperature': 'TextEdit', 'pH (field)': 'TextEdit', 'El. Cond.': 'TextEdit', 'TDS': 'TextEdit', 'Ca': 'TextEdit', 'Mg': 'TextEdit', 'Na': 'TextEdit', 'K': 'TextEdit', 'Cl': 'TextEdit', 'HCO3': 'TextEdit', 'SO4': 'TextEdit', 'F': 'TextEdit', });
lyr_Lithology_1.set('fieldLabels', {'Shape__Length': 'no label', 'Shape__Area': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'GMGLFMNT_': 'no label', 'GMGLFMNT_I': 'no label', 'TYPE': 'no label', 'FORM_NUM': 'no label', 'ZONES': 'no label', 'CATEGORY_GR': 'no label', 'AGE_GR': 'no label', 'DESCR_GR': 'no label', 'CATEGORY': 'no label', 'AGES': 'no label', 'DESCR': 'no label', });
lyr_Springscrete_gis_2.set('fieldLabels', {'Station ID': 'no label', 'X coordinate': 'no label', 'Y coordinate': 'no label', 'Elevation': 'no label', 'Temperature': 'no label', 'pH (field)': 'no label', 'El. Cond.': 'inline label - always visible', 'TDS': 'no label', 'Ca': 'inline label - always visible', 'Mg': 'inline label - visible with data', 'Na': 'inline label - always visible', 'K': 'no label', 'Cl': 'no label', 'HCO3': 'no label', 'SO4': 'no label', 'F': 'no label', });
lyr_Springscrete_gis_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
google.load('visualization', '1', {packages: ['geochart']});
google.setOnLoadCallback(drawVisualization);

google.load('visualization', '1', {packages: ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
 var data = google.visualization.arrayToDataTable([
                ['State', 'link', 'Articles'],
                ['Aguascalientes', '#' , 0],
                ['Baja California', '#' , 0],
                ['Baja California Sur', '#' , 0],
                ['Campeche', '#' , 0],
                ['Coahuila', 'coahuila' , 1],
                ['Colima', 'colima' , 1],
                ['Chiapas', 'chiapas' , 8],
                ['Chihuahua', 'chihuahua' , 1],
                ['Distrito Federal', 'df' , 68],
                ['Durango', '#' , 0],
                ['Guanajuato', '#' , 0],
                ['Guerrero', 'guerrero' , 45],
                ['Hidalgo', 'hidalgo' , 2],
                ['Jalisco', 'jalisco' , 19],
                ['Estado de México', 'edo-mexico' , 9],
                ['Michoacán', 'michoacan' , 11],
                ['Morelos', 'morelos' , 1],
                ['Nayarit', '#' , 0],
                ['Nuevo León', 'nuevo-leon' , 13],
                ['Oaxaca', 'oaxaca' , 42],
                ['Puebla', 'puebla' , 2],
                ['Querétaro', 'queretaro' , 2],
                ['Quintana Roo', '#' , 0],
                ['San Luis Potosí', '#' , 0],
                ['Sinaloa', '#' , 0],
                ['Sonora', 'sonora' , 1],
                ['Tabasco', 'tabasco' , 1],
                ['Tamaulipas', '#' , 1],
                ['Tlaxcala', '#' , 0],
                ['Veracruz', 'veracruz' , 3],
                ['Yucatán', '#' , 0],
                ['Zacatecas', '#' , 0]
          ]);
           var view = new google.visualization.DataView(data);
       view.setColumns([0, 2]);
       var options = {
                region: 'MX',
                displayMode: 'regions',
                //sizeAxis: { minValue: 0, maxValue: 3000 },
                resolution: 'provinces',
                width: '100%',
                height: '100%',
                colorAxis: { colors: ['#B9FEC1', '#003E08'] }
            };
            

    var geochart = new google.visualization.GeoChart(document.getElementById('visualization2'));
    geochart.draw(view, options);
    var selectHandler = function(e) {
          window.location = data.getValue(geochart.getSelection()[0]['row'], 1 );
       }

       google.visualization.events.addListener(geochart, 'select', selectHandler);
}
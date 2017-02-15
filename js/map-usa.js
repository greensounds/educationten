 google.load('visualization', '1', {packages: ['geochart']});
google.setOnLoadCallback(drawVisualization);

google.load('visualization', '1', {packages: ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
 var data = google.visualization.arrayToDataTable([
                ['State', 'link', 'Articles'],
                ['Alabama', 'alabama' , 4],
                ['Alaska', 'alaska' , 4],
                ['Arizona', 'arizona' , 5],
                ['Arkansas', 'arkansas' , 3],
                ['California', 'california' , 74],
                ['Colorado', 'colorado' , 30],
                ['Connecticut', 'connecticut' , 26],
                ['Delaware', 'delaware' , 1],
                ['DC', 'dc' , 3],
                ['Florida', 'florida' , 10],
                ['Georgia', 'georgia' , 2],
                ['Hawaii', 'hawaii' , 4],
                ['Idaho', 'idaho' , 1],
                ['Illinois', 'illinois' , 144],
                ['Indiana', 'indiana' , 25],
                ['Iowa', 'iowa' , 4],
                ['Kansas', 'kansas' , 8],
                ['Kentucky', 'kentucky' , 3],
                ['Lousiana', 'louisiana' , 9],
                ['Maine', 'maine' , 1],
                ['Maryland', 'maryland' , 10],
                ['Massachussets', 'ma' , 34],
                ['Michigan', 'michigan' , 19],
                ['Minnesota', 'minnesota' , 0],
                ['Mississippi', 'ms' , 4],
                ['Misouri', 'misouri' , 15],
                ['Montana', 'montana' , 0],
                ['Nebraska', 'nebraska' , 4],
                ['Nevada', 'nevada' , 4],
                ['New Hampshire', 'nh' , 0],
                ['New Jersey', 'nj' , 7],
                ['New Mexico', 'nm' , 4],
                ['New York', 'ny' , 133],
                ['North Carolina', 'nc' , 12],
                ['North Dakota', 'nd' , 1],
                ['Ohio', 'ohio', 13],
                ['Oklahoma', 'oklahoma', 5],
                ['Oregon', 'oregon' , 1],
                ['Pennsylvania', 'pennsylvania', 11],
                ['Rhode Island', 'rhodeisland', 14],
                ['South Carolina', 'sc', 0],
                ['South Dakota', 'sd' , 5],
                ['Tennessee', 'tennessee' , 8],
                ['Texas', 'texas' , 40],
                ['Utah', 'utah', 2],
                ['Vermont', 'vermont' , 2],
                ['Virginia', 'virginia' , 13],
                ['Washington', 'washington', 12],
                ['West Virginia', 'wa', 6],
                ['Wisconsin', 'wisconsin' , 4],
                ['Wyoming', 'wyoming', 3],
                ['US-DC',"dc" ,3 ]
          ]);
           var view = new google.visualization.DataView(data);
       view.setColumns([0, 2]);
       var options = {
                region: 'US',
                displayMode: 'regions',
                //sizeAxis: { minValue: 0, maxValue: 2000 },
                resolution: 'provinces',
                width: '100%',
                height: '100%',
                colorAxis: { colors: ['#E1F5FE', '#01579B'] }
            };

    var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
    geochart.draw(view, options);
    var selectHandler = function(e) {
          window.location = data.getValue(geochart.getSelection()[0]['row'], 1 );
       }

       google.visualization.events.addListener(geochart, 'select', selectHandler);
}
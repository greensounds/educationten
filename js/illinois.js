google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 5],
          ['Accountability/Audit', 9],
          ['Citizen Participation', 3],
          ['Contract/Teacher salary', 18],
          ['Corruption', 0],
          ['Curriculum', 6],
          ['Discrimination', 9],
          ['Elections', 1],
          ['Enrollment', 6],
          ['Faculty', 6],
          ['Finance/Student debt-loan', 8],
          ['Funding', 37],
          ['Graduation rate', 1],
          ['Inequality', 6],
          ['Infrastructure', 6],
          ['Innovation', 7],
          ['Other', 13],
          ['Protest', 12],
          ['Reform/Policy/Budget', 29],
          ['School Choice', 5],
          ['School Crisis', 35],
          ['Standardized ', 8]
        ]);

        var options = {
          title: 'Hot topics in Illinois',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
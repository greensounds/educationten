google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 3],
          ['Accountability/Audit', 2],
          ['Citizen Participation', 1],
          ['Contract/Teacher salary', 6],
          ['Corruption', 1],
          ['Curriculum', 0],
          ['Discrimination', 1],
          ['Elections', 6],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 1],
          ['Funding', 2],
          ['Graduation rate', 0],
          ['Inequality', 1],
          ['Infrastructure', 3],
          ['Innovation', 0],
          ['Other', 1],
          ['Protest', 12],
          ['Reform/Policy/Budget', 7],
          ['School Choice', 3],
          ['School Crisis', 0],
          ['Standardized ', 0]
        ]);

        var options = {
          title: 'Hot topics in Oaxaca',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
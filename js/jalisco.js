google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 1],
          ['Accountability/Audit', 3],
          ['Citizen Participation', 1],
          ['Contract/Teacher salary', 0],
          ['Corruption', 1],
          ['Curriculum', 1],
          ['Discrimination', 1],
          ['Elections', 0],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 1],
          ['Funding', 1],
          ['Graduation rate', 0],
          ['Inequality', 1],
          ['Infrastructure', 2],
          ['Innovation', 1],
          ['Other', 4],
          ['Protest', 1],
          ['Reform/Policy/Budget', 1],
          ['School Choice', 0],
          ['School Crisis', 3],
          ['Standardized ', 1]
        ]);

        var options = {
          title: 'Hot topics in Jalisco',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
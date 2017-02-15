google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 1],
          ['Accountability/Audit', 4],
          ['Citizen Participation', 3],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 0],
          ['Discrimination', 5],
          ['Elections', 0],
          ['Enrollment', 4],
          ['Faculty', 1],
          ['Finance/Student debt-loan', 1],
          ['Funding', 4],
          ['Graduation rate', 0],
          ['Inequality', 2],
          ['Infrastructure', 2],
          ['Innovation', 4],
          ['Other', 6],
          ['Protest', 1],
          ['Reform/Policy/Budget', 12],
          ['School Choice', 8],
          ['School Crisis', 1],
          ['Standardized ', 4]
        ]);

        var options = {
          title: 'Hot topics in Massachusetts',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
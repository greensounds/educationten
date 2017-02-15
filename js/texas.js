google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 3],
          ['Accountability/Audit', 5],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 7],
          ['Discrimination', 0],
          ['Elections', 2],
          ['Enrollment', 1],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 2],
          ['Funding', 2],
          ['Graduation rate', 0],
          ['Inequality', 1],
          ['Infrastructure', 0],
          ['Innovation', 6],
          ['Other', 3],
          ['Protest', 0],
          ['Reform/Policy/Budget', 6],
          ['School Choice', 2],
          ['School Crisis', 2],
          ['Standardized ', 8]
        ]);

        var options = {
          title: 'Hot topics in Texas',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 0],
          ['Accountability/Audit', 0],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 2],
          ['Corruption', 0],
          ['Curriculum', 1],
          ['Discrimination', 6],
          ['Elections', 0],
          ['Enrollment', 2],
          ['Faculty', 1],
          ['Finance/Student debt-loan', 0],
          ['Funding', 0],
          ['Graduation rate', 0],
          ['Inequality', 1],
          ['Infrastructure', 0],
          ['Innovation', 4],
          ['Other', 2],
          ['Protest', 0],
          ['Reform/Policy/Budget', 4],
          ['School Choice', 0],
          ['School Crisis', 1],
          ['Standardized ', 2]
        ]);

        var options = {
          title: 'Hot topics in Rhode Island',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 1],
          ['Accountability/Audit', 0],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 2],
          ['Discrimination', 0],
          ['Elections', 0],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 2],
          ['Funding', 0],
          ['Graduation rate', 1],
          ['Inequality', 0],
          ['Infrastructure', 0],
          ['Innovation', 2],
          ['Other', 2],
          ['Protest', 0],
          ['Reform/Policy/Budget', 6],
          ['School Choice', 3],
          ['School Crisis', 1],
          ['Standardized ', 1]
        ]);

        var options = {
          title: 'Hot topics in Virginia',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
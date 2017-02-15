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
          ['Curriculum', 1],
          ['Discrimination', 3],
          ['Elections', 0],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 1],
          ['Funding', 2],
          ['Graduation rate', 0],
          ['Inequality', 1],
          ['Infrastructure', 0],
          ['Innovation', 1],
          ['Other', 3],
          ['Protest', 0],
          ['Reform/Policy/Budget', 2],
          ['School Choice', 1],
          ['School Crisis', 2],
          ['Standardized ', 0]
        ]);

        var options = {
          title: 'Hot topics in Washington',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
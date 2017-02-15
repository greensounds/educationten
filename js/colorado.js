google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 4],
          ['Accountability/Audit', 5],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 1],
          ['Corruption', 0],
          ['Curriculum', 9],
          ['Discrimination', 1],
          ['Elections', 2],
          ['Enrollment', 1],
          ['Faculty', 2],
          ['Finance/Student debt-loan', 4],
          ['Funding', 3],
          ['Graduation rate', 1],
          ['Inequality', 0],
          ['Infrastructure', 0],
          ['Innovation', 3],
          ['Other', 3],
          ['Protest', 0],
          ['Reform/Policy/Budget', 4],
          ['School Choice', 1],
          ['School Crisis', 1],
          ['Standardized ', 4]
        ]);

        var options = {
          title: 'Hot topics in Colorado',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
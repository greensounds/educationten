google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 1],
          ['Accountability/Audit', 4],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 1],
          ['Corruption', 0],
          ['Curriculum', 5],
          ['Discrimination', 0],
          ['Elections', 0],
          ['Enrollment', 1],
          ['Faculty', 2],
          ['Finance/Student debt-loan', 0],
          ['Funding', 3],
          ['Graduation rate', 1],
          ['Inequality', 0],
          ['Infrastructure', 0],
          ['Innovation', 4],
          ['Other', 4],
          ['Protest', 0],
          ['Reform/Policy/Budget', 5],
          ['School Choice', 3],
          ['School Crisis', 1],
          ['Standardized ', 7]
        ]);

        var options = {
          title: 'Hot topics in Indiana',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
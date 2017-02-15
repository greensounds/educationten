google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 10],
          ['Accountability/Audit', 9],
          ['Citizen Participation', 7],
          ['Contract/Teacher salary', 9],
          ['Corruption', 0],
          ['Curriculum', 5],
          ['Discrimination', 6],
          ['Elections', 4],
          ['Enrollment', 7],
          ['Faculty', 3],
          ['Finance/Student debt-loan', 1],
          ['Funding', 13],
          ['Graduation rate', 3],
          ['Inequality', 7],
          ['Infrastructure', 0],
          ['Innovation', 11],
          ['Other', 13],
          ['Protest', 4],
          ['Reform/Policy/Budget', 13],
          ['School Choice', 11],
          ['School Crisis', 11],
          ['Standardized ', 6]
        ]);

        var options = {
          title: 'Hot topics in California',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
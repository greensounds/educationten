google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 1],
          ['Accountability/Audit', 2],
          ['Citizen Participation', 1],
          ['Contract/Teacher salary', 2],
          ['Corruption', 0],
          ['Curriculum', 3],
          ['Discrimination', 1],
          ['Elections', 0],
          ['Enrollment', 1],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 2],
          ['Funding', 6],
          ['Graduation rate', 1],
          ['Inequality', 0],
          ['Infrastructure', 1],
          ['Innovation', 2],
          ['Other', 7],
          ['Protest', 0],
          ['Reform/Policy/Budget', 5],
          ['School Choice', 0],
          ['School Crisis', 0],
          ['Standardized ', 3]
        ]);

        var options = {
          title: 'Hot topics in Connecticut',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
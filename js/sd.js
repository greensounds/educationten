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
          ['Curriculum', 0],
          ['Discrimination', 2],
          ['Elections', 0],
          ['Enrollment', 1],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 1],
          ['Funding', 1],
          ['Graduation rate', 0],
          ['Inequality', 0],
          ['Infrastructure', 0],
          ['Innovation', 0],
          ['Other', 2],
          ['Protest', 0],
          ['Reform/Policy/Budget', 1],
          ['School Choice', 0],
          ['School Crisis', 0],
          ['Standardized ', 0]
        ]);

        var options = {
          title: 'Hot topics in South Dakota',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
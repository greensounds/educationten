google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 8],
          ['Accountability/Audit', 11],
          ['Citizen Participation', 6],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 0],
          ['Discrimination', 0],
          ['Elections', 0],
          ['Enrollment', 1],
          ['Faculty', 1],
          ['Finance/Student debt-loan', 6],
          ['Funding', 0],
          ['Graduation rate', 0],
          ['Inequality', 0],
          ['Infrastructure', 5],
          ['Innovation', 3],
          ['Other', 2],
          ['Protest', 6],
          ['Reform/Policy/Budget', 5],
          ['School Choice', 0],
          ['School Crisis', 20],
          ['Standardized ', 0]
        ]);

        var options = {
          title: 'Hot topics in Ciudad de México',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 0],
          ['Accountability/Audit', 3],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 2],
          ['Discrimination', 2],
          ['Elections', 1],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 0],
          ['Funding', 4],
          ['Graduation rate', 0],
          ['Inequality', 0],
          ['Infrastructure', 2],
          ['Innovation', 3],
          ['Other', 1],
          ['Protest', 6],
          ['Reform/Policy/Budget', 5],
          ['School Choice', 0],
          ['School Crisis', 8],
          ['Standardized ', 0]
        ]);

        var options = {
          title: 'Hot topics in Michigan',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
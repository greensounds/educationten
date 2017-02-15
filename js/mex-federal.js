google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 25],
          ['Accountability/Audit', 29],
          ['Citizen Participation', 58],
          ['Contract/Teacher salary', 26],
          ['Corruption', 3],
          ['Curriculum', 8],
          ['Discrimination', 5],
          ['Elections', 6],
          ['Enrollment', 4],
          ['Faculty', 4],
          ['Finance/Student debt-loan', 5],
          ['Funding', 6],
          ['Graduation rate', 5],
          ['Inequality', 0],
          ['Infrastructure', 14],
          ['Innovation', 18],
          ['Other', 20],
          ['Protest', 93],
          ['Reform/Policy/Budget', 114],
          ['School Crisis', 41],
          ['Standardized ', 33],
          ['Union', 14]
        ]);

        var options = {
          title: 'Federal Hot topics',
          pieHole: 0.6,
          height: 900
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
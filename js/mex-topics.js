google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 39],
          ['Accountability/Audit', 56],
          ['Citizen Participation', 70],
          ['Contract/Teacher salary', 35],
          ['Corruption', 6],
          ['Curriculum', 11],
          ['Discrimination', 8],
          ['Elections', 14],
          ['Enrollment', 5],
          ['Faculty', 5],
          ['Finance/Student debt-loan', 17],
          ['Funding', 14],
          ['Graduation rate', 5],
          ['Inequality', 2],
          ['Infrastructure', 32],
          ['Innovation', 25],
          ['Other', 32],
          ['Protest', 148],
          ['Reform/Policy/Budget', 135],
          ['School Crisis', 86],
          ['Standardized ', 42],
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
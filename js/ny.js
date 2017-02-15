google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 14],
          ['Accountability/Audit', 32],
          ['Citizen Participation', 6],
          ['Contract/Teacher salary', 4],
          ['Corruption', 3],
          ['Curriculum', 9],
          ['Discrimination', 14],
          ['Elections', 5],
          ['Enrollment', 2],
          ['Faculty', 2],
          ['Finance/Student debt-loan', 1],
          ['Funding', 13],
          ['Graduation rate', 2],
          ['Inequality', 17],
          ['Infrastructure', 2],
          ['Innovation', 12],
          ['Other', 8],
          ['Protest', 3],
          ['Reform/Policy/Budget', 31],
          ['School Choice', 20],
          ['School Crisis', 13],
          ['Standardized ', 21]
        ]);

        var options = {
          title: 'Hot topics in New York',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
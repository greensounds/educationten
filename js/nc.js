google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 2],
          ['Accountability/Audit', 1],
          ['Citizen Participation', 1],
          ['Contract/Teacher salary', 1],
          ['Corruption', 0],
          ['Curriculum', 0],
          ['Discrimination', 3],
          ['Elections', 1],
          ['Enrollment', 1],
          ['Faculty', 1],
          ['Finance/Student debt-loan', 0],
          ['Funding', 1],
          ['Graduation rate', 0],
          ['Inequality', 3],
          ['Infrastructure', 0],
          ['Innovation', 1],
          ['Other', 2],
          ['Protest', 1],
          ['Reform/Policy/Budget', 4],
          ['School Choice', 1],
          ['School Crisis', 0],
          ['Standardized ', 0]
        ]);

        var options = {
          title: 'Hot topics in North Carolina',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
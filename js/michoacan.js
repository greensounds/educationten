google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 0],
          ['Accountability/Audit', 2],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 0],
          ['Discrimination', 0],
          ['Elections', 0],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 1],
          ['Funding', 0],
          ['Graduation rate', 0],
          ['Inequality', 0],
          ['Infrastructure', 0],
          ['Innovation', 0],
          ['Other', 1],
          ['Protest', 3],
          ['Reform/Policy/Budget', 2],
          ['School Choice', 0],
          ['School Crisis', 3],
          ['Standardized ', 0]
        ]);

        var options = {
          title: 'Hot topics in Michoacán',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
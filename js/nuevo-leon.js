google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 0],
          ['Accountability/Audit', 5],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 1],
          ['Corruption', 1],
          ['Curriculum', 1],
          ['Discrimination', 0],
          ['Elections', 0],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 0],
          ['Funding', 1],
          ['Graduation rate', 0],
          ['Inequality', 0],
          ['Infrastructure', 3],
          ['Innovation', 0],
          ['Other', 1],
          ['Protest', 0],
          ['Reform/Policy/Budget', 1],
          ['School Choice', 0],
          ['School Crisis', 0],
          ['Standardized ', 1]
        ]);

        var options = {
          title: 'Hot topics in Nuevo León',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
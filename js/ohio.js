google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 1],
          ['Accountability/Audit', 1],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 0],
          ['Discrimination', 2],
          ['Elections', 1],
          ['Enrollment', 1],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 3],
          ['Funding', 2],
          ['Graduation rate', 0],
          ['Inequality', 3],
          ['Infrastructure', 0],
          ['Innovation', 0],
          ['Other', 0],
          ['Protest', 1],
          ['Reform/Policy/Budget', 1],
          ['School Choice', 2],
          ['School Crisis', 1],
          ['Standardized ', 3]
        ]);

        var options = {
          title: 'Hot topics in Ohio',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 0],
          ['Accountability/Audit', 0],
          ['Citizen Participation', 0],
          ['Contract/Teacher salary', 1],
          ['Corruption', 0],
          ['Curriculum', 0],
          ['Discrimination', 0],
          ['Elections', 0],
          ['Enrollment', 0],
          ['Faculty', 1],
          ['Finance/Student debt-loan', 0],
          ['Funding', 0],
          ['Graduation rate', 0],
          ['Inequality', 0],
          ['Infrastructure', 0],
          ['Innovation', 0],
          ['Other', 1],
          ['Protest', 0],
          ['Reform/Policy/Budget', 0],
          ['School Choice', 1],
          ['School Crisis', 0],
          ['Standardized ', 2]
        ]);

        var options = {
          title: 'Hot topics in Alaska',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
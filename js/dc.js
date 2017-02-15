google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 0],
          ['Accountability/Audit', 0],
          ['Citizen Participation', 1],
          ['Contract/Teacher salary', 0],
          ['Corruption', 0],
          ['Curriculum', 1],
          ['Discrimination', 0],
          ['Elections', 0],
          ['Enrollment', 0],
          ['Faculty', 0],
          ['Finance/Student debt-loan', 0],
          ['Funding', 0],
          ['Graduation rate', 0],
          ['Inequality', 1],
          ['Infrastructure', 0],
          ['Innovation', 1],
          ['Other', 0],
          ['Protest', 0],
          ['Reform/Policy/Budget', 0],
          ['School Choice', 0],
          ['School Crisis', 0],
          ['Standardized ', 2]
        ]);

        var options = {
          title: 'Hot topics in the District of Columbia',
          pieHole: 0.4,
          height: 400
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
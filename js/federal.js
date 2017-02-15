google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 18],
          ['Accountability/Audit', 24],
          ['Citizen Participation', 4],
          ['Contract/Teacher salary', 0],
          ['Corruption', 12],
          ['Curriculum', 21],
          ['Discrimination', 24],
          ['Elections', 11],
          ['Enrollment', 11],
          ['Faculty', 4],
          ['Finance/Student debt-loan', 40],
          ['Funding', 10],
          ['Graduation rate', 4],
          ['Inequality', 11],
          ['Infrastructure', 1],
          ['Innovation', 17],
          ['Other', 31],
          ['Protest', 5],
          ['Reform/Policy/Budget', 44],
          ['School Choice', 4],
          ['School Crisis', 14],
          ['Standardized ', 47]
        ]);

        var options = {
          title: 'Hot Federal Topics',
          pieHole: 0.6,
          height: 900
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
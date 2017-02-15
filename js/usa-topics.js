google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Topic', 'Hits'],
          ['Access to education/schooling', 66],
          ['Accountability/Audit', 110],
          ['Citizen Participation', 28],
          ['Contract/Teacher salary', 42],
          ['Corruption', 18],
          ['Curriculum', 85],
          ['Discrimination', 97],
          ['Elections', 31],
          ['Enrollment', 43],
          ['Faculty', 31],
          ['Finance/Student debt-loan', 74],
          ['Funding', 132],
          ['Graduation rate',14],
          ['Inequality', 57],
          ['Infrastructure', 15],
          ['Innovation', 93],
          ['Other', 131],
          ['Protest', 49],
          ['Reform/Policy/Budget', 224],
          ['School Choice', 69],
          ['School Crisis', 101],
          ['Standardized ', 131]
        ]);

        var options = {
          title: 'Hot Topics',
          pieHole: 0.6,
          height: 900
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
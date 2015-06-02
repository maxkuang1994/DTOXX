$(function() {
  $('#container3').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Motor Vehicle Injuries in San Diego by Year'
    },
    xAxis: {
      categories: ['2010', '2011']
    },
    yAxis: {
      min: 0,
      title: {
        text: ' Other '
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -70,
      verticalAlign: 'top',
      y: 20,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black, 0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: 'Injuries from a Sober driver',
      data: [16534, 16218]
    }, {
      name: 'Injuries from a Drinking Driver',
      data: [1427, 1500]
    }]
  });
});S
const buildChartOption = (data) => ({
  tooltip: {
    shared: true,
    crosshairs: true,
    bodyColor: "#595f69",
  },
  title: {
    text: "Solar Employment Growth by Sector, 2010-2016",
  },

  subtitle: {
    text: "Source: thesolarfoundation.com",
  },

  yAxis: {
    title: {
      text: "Number of Employees",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2017",
    },
    crosshair: {
      width: 20,
    },
  },

  legend: {
    enabled: true,
    align: 'left',
    verticalAlign: 'top',
    backgroundColor: '#2450982d'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      lineWidth: 4,
      pointStart: 2010,
      marker: {
        enabled: false,
      },
    },
  },
  series: data,

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

export default buildChartOption;

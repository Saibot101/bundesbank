<template>
  <div>
    <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: "EChart",
  components: {
    "apexchart": VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          background: '#D4D5D7',
        },
        grid:{
          show:false
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis:{
          min:0,
          max:30,
          tickAmount:6,
          axisBorder:{
            show:true,
            color:"#fff"
          },
          axisTicks:{
            color:"#fff"
          }
        },
        yaxis:{
          axisBorder:{
            color:"#fff",
            show:true
          }
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [{
        name: 'Wertschöpfungsverluste im Gesamtzeitraum 2021',
        color:"#00A94E",
        data: [{
          x: 'Energieversorgung/ Förderung fossiler Stoffe',
          y: 6.6314,
          goals: [
            {
              value: 2.2778,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Land- und Forstwirtschaft',
          y: 2.9636,
          goals: [
            {
              value: 0.7268,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Bergbau',
          y: 1.4281,
          goals: [
            {
              value: 0.1877,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Verarbeitendes Gewerbe',
          y: 23.8403,
          goals: [
            {
              value: 22.7583,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Verkehr und Lagerei',
          y: 5.6340,
          goals: [
            {
              value: 5.6024,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Handel',
          y: 9.2936,
          goals: [
            {
              value: 9.0983,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Bau, Wasserversorgung, Abfallentsorgung',
          y: 5.3362,
          goals: [
            {
              value: 6.3263,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Sonstige Dienstleistungen',
          y: 23.8457,
          goals: [
            {
              value: 25.4782,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Öffentlicher Sektor',
          y: 4.2385,
          goals: [
            {
              value: 7,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Finanz- und Wohnungswesen',
          y: 12.6227,
          goals: [
            {
              value: 15.1467,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },
        {
          x: 'Gesundheitswesen',
          y: 4.1661,
          goals: [
            {
              value: 7.6170,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#000'
            }
          ]
        },

        ]
      }]
    }
  },
};

/*

        [new Date("01.01.2021").getTime(), 1.330],
        [new Date("01.02.2021").getTime(), 1.330],
        [new Date("01.03.2021").getTime(), 1.330],
        [new Date("01.04.2021").getTime(), 1.340],
        [new Date("01.05.2021").getTime(), 1.340],
        [new Date("01.06.2021").getTime(), 1.340],
        [new Date("01.07.2021").getTime(), 1.340],
        [new Date("01.08.2021").getTime(), 1.340],
        [new Date("01.09.2021").getTime(), 1.350],
        [new Date("01.10.2021").getTime(), 1.350],
        [new Date("01.11.2021").getTime(), 1.350],
        [new Date("01.12.2021").getTime(), 1.350],
        [new Date("01.13.2021").getTime(), 1.350],
        [new Date("01.14.2021").getTime(), 1.350],
        [new Date("01.15.2021").getTime(), 1.360],
        [new Date("01.16.2021").getTime(), 1.360],
        [new Date("01.17.2021").getTime(), 1.360],
        [new Date("01.18.2021").getTime(), 1.360],
        [new Date("01.19.2021").getTime(), 1.360],
        [new Date("01.20.2021").getTime(), 1.360],
        [new Date("01.21.2021").getTime(), 1.360],
        [new Date("01.22.2021").getTime(), 1.360],
        [new Date("01.23.2021").getTime(), 1.350],
        [new Date("01.24.2021").getTime(), 1.360],
        [new Date("01.25.2021").getTime(), 1.360],
        [new Date("01.26.2021").getTime(), 1.360],
        [new Date("01.27.2021").getTime(), 1.360],
        [new Date("01.28.2021").getTime(), 1.360],
        [new Date("01.29.2021").getTime(), 1.360],
        [new Date("01.30.2021").getTime(), 1.370],
        [new Date("01.31.2021").getTime(), 1.370],
        [new Date("02.01.2021").getTime(), 1.370],
        [new Date("02.02.2021").getTime(), 1.370],
        [new Date("02.03.2021").getTime(), 1.370],
        [new Date("02.04.2021").getTime(), 1.380],
        [new Date("02.05.2021").getTime(), 1.380],
        [new Date("02.06.2021").getTime(), 1.370],
        [new Date("02.07.2021").getTime(), 1.380],
        [new Date("02.08.2021").getTime(), 1.380],
        [new Date("02.09.2021").getTime(), 1.380],
        [new Date("02.10.2021").getTime(), 1.380],
        [new Date("02.11.2021").getTime(), 1.380],
        [new Date("02.12.2021").getTime(), 1.380],
        [new Date("02.13.2021").getTime(), 1.380],
        [new Date("02.14.2021").getTime(), 1.380],
        [new Date("02.15.2021").getTime(), 1.390],
        [new Date("02.16.2021").getTime(), 1.390],
        [new Date("02.17.2021").getTime(), 1.390],
        [new Date("02.18.2021").getTime(), 1.400],
        [new Date("02.19.2021").getTime(), 1.400],
        [new Date("02.20.2021").getTime(), 1.410],
        [new Date("02.21.2021").getTime(), 1.410],
        [new Date("02.22.2021").getTime(), 1.410],
        [new Date("02.23.2021").getTime(), 1.410],
        [new Date("02.24.2021").getTime(), 1.420],
        [new Date("02.25.2021").getTime(), 1.420],
        [new Date("02.26.2021").getTime(), 1.430],
        [new Date("02.27.2021").getTime(), 1.440],
        [new Date("02.28.2021").getTime(), 1.440],

*/
</script>

<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <v-img src="../../assets/line_neu.png">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <apexchart width="500" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
          stacked: false
        },
        grid: {
          show: true,
          borderColor: '#fff',
        },
        legend: {
          show: false
        },
        annotaions: {
          /*
          yaxis:[
            {y: new Date("01.02.2021").getTime(),}
          ],
          xaxis:[{
            x: 1.5
          }]*/
          points: {
            x: new Date("01.01.2021").getTime(),
            y: 1.330,
            yAxisIndex: 2,
            seriesIndex: 3,
            marker:{
              size:8
            },
            label: {
              text: "Test",
              style: {
                color: '#fff',
                background: '#FF4560',
              },
            }
          }
        },
        yaxis: [
          {
            seriesName: 'Income',
            axisTicks: {
              show: true,
            },
            min: 1.2,
            max: 1.6
          },
          {
            seriesName: 'Revenue',
            show: false,
            opposite: true,
            axisTicks: {
              show: false,
            },
            min: 1.2,
            max: 1.6
          },
          {
            seriesName: 'Revenue 2',

            opposite: true,
            axisTicks: {
              show: false,
            },
            min: 40,
            max: 55
          },
        ],
        xaxis: {
          type: "datetime",
          //overwriteCategories:[new Date("01.01.2021").getTime().toString(),new Date("02.01.2021").getTime().toString(),new Date("03.01.2021").getTime().toString(),],
          tickPlacement: 'between',
          min: new Date("01/01/2021").getTime(),
        },

        dataLabels: {
          enabled: false
        }
      },
      series: [{
        name: 'Income',
        color: "#EE3A41",
        data: [[new Date("01.01.2021").getTime(), 1.330],
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
        ]
      }, {
        name: 'Revenue',
        color: "#00A0B0",
        data: [
          [new Date("01.01.2021").getTime(), 1.21],
          [new Date("01.02.2021").getTime(), 1.22],
          [new Date("01.03.2021").getTime(), 1.23],
          [new Date("01.04.2021").getTime(), 1.22],
          [new Date("01.05.2021").getTime(), 1.22],
          [new Date("01.06.2021").getTime(), 1.23],
          [new Date("01.07.2021").getTime(), 1.23],
          [new Date("01.08.2021").getTime(), 1.23],
          [new Date("01.09.2021").getTime(), 1.23],
          [new Date("01.10.2021").getTime(), 1.23],
          [new Date("01.11.2021").getTime(), 1.23],
          [new Date("01.12.2021").getTime(), 1.23],
          [new Date("01.13.2021").getTime(), 1.23],
          [new Date("01.14.2021").getTime(), 1.24],
          [new Date("01.15.2021").getTime(), 1.24],
          [new Date("01.16.2021").getTime(), 1.24],
          [new Date("01.17.2021").getTime(), 1.24],
          [new Date("01.18.2021").getTime(), 1.24],
          [new Date("01.19.2021").getTime(), 1.24],
          [new Date("01.20.2021").getTime(), 1.24],
          [new Date("01.21.2021").getTime(), 1.24],
          [new Date("01.22.2021").getTime(), 1.24],
          [new Date("01.23.2021").getTime(), 1.23],
          [new Date("01.24.2021").getTime(), 1.24],
          [new Date("01.25.2021").getTime(), 1.24],
          [new Date("01.26.2021").getTime(), 1.23],
          [new Date("01.27.2021").getTime(), 1.23],
          [new Date("01.28.2021").getTime(), 1.23],
          [new Date("01.29.2021").getTime(), 1.24],
          [new Date("01.30.2021").getTime(), 1.24],
          [new Date("01.31.2021").getTime(), 1.24],
          [new Date("02.01.2021").getTime(), 1.24],
          [new Date("02.02.2021").getTime(), 1.24],
          [new Date("02.03.2021").getTime(), 1.24],
          [new Date("02.04.2021").getTime(), 1.25],
          [new Date("02.05.2021").getTime(), 1.25],
          [new Date("02.06.2021").getTime(), 1.25],
          [new Date("02.07.2021").getTime(), 1.26],
          [new Date("02.08.2021").getTime(), 1.26],
          [new Date("02.09.2021").getTime(), 1.26],
          [new Date("02.10.2021").getTime(), 1.27],
          [new Date("02.11.2021").getTime(), 1.27],
          [new Date("02.12.2021").getTime(), 1.27],
          [new Date("02.13.2021").getTime(), 1.28],
          [new Date("02.14.2021").getTime(), 1.28],
          [new Date("02.15.2021").getTime(), 1.28],
          [new Date("02.16.2021").getTime(), 1.28],
          [new Date("02.17.2021").getTime(), 1.28],
          [new Date("02.18.2021").getTime(), 1.28],
          [new Date("02.19.2021").getTime(), 1.29],
          [new Date("02.20.2021").getTime(), 1.30],
          [new Date("02.21.2021").getTime(), 1.30],
          [new Date("02.22.2021").getTime(), 1.30],
          [new Date("02.23.2021").getTime(), 1.30],
          [new Date("02.24.2021").getTime(), 1.30],
          [new Date("02.25.2021").getTime(), 1.30],
          [new Date("02.26.2021").getTime(), 1.30],
          [new Date("02.27.2021").getTime(), 1.31],
          [new Date("02.28.2021").getTime(), 1.31],
        ],
        axisName: "Income"
      }, {
        name: 'Revenue 2',
        color: "#000",
        data: [
          [new Date("01.01.2021").getTime(), 41.7],
          [new Date("01.02.2021").getTime(), 40.2],
          [new Date("01.03.2021").getTime(), 40.4],
          [new Date("01.04.2021").getTime(), 40.68],
          [new Date("01.05.2021").getTime(), 43.02],
          [new Date("01.06.2021").getTime(), 43.42],
          [new Date("01.07.2021").getTime(), 43.85],
          [new Date("01.08.2021").getTime(), 43.62],
          [new Date("01.09.2021").getTime(), 45],
          [new Date("01.10.2021").getTime(), 45],
          [new Date("01.11.2021").getTime(), 45.2],
          [new Date("01.12.2021").getTime(), 46.28],
          [new Date("01.13.2021").getTime(), 45.65],
          [new Date("01.14.2021").getTime(), 46.21],
          [new Date("01.15.2021").getTime(), 44.96],
          [new Date("01.16.2021").getTime(), 44.9],
          [new Date("01.17.2021").getTime(), 44.9],
          [new Date("01.18.2021").getTime(), 44.91],
          [new Date("01.19.2021").getTime(), 45.66],
          [new Date("01.20.2021").getTime(), 45.67],
          [new Date("01.21.2021").getTime(), 45.89],
          [new Date("01.22.2021").getTime(), 45.04],
          [new Date("01.23.2021").getTime(), 45.5],
          [new Date("01.24.2021").getTime(), 45.64],
          [new Date("01.25.2021").getTime(), 45.74],
          [new Date("01.26.2021").getTime(), 45.46],
          [new Date("01.27.2021").getTime(), 45.3],
          [new Date("01.28.2021").getTime(), 45.2],
          [new Date("01.29.2021").getTime(), 45],
          [new Date("01.30.2021").getTime(), 45],
          [new Date("01.31.2021").getTime(), 45],
          [new Date("02.01.2021").getTime(), 46.42],
          [new Date("02.02.2021").getTime(), 47.73],
          [new Date("02.03.2021").getTime(), 48.65],
          [new Date("02.04.2021").getTime(), 48.98],
          [new Date("02.05.2021").getTime(), 49.5],
          [new Date("02.06.2021").getTime(), 50],
          [new Date("02.07.2021").getTime(), 50.3],
          [new Date("02.08.2021").getTime(), 50.5],
          [new Date("02.09.2021").getTime(), 50.4],
          [new Date("02.10.2021").getTime(), 50.2],
          [new Date("02.11.2021").getTime(), 52],
          [new Date("02.12.2021").getTime(), 52],
          [new Date("02.13.2021").getTime(), 52],
          [new Date("02.14.2021").getTime(), 52.3],
          [new Date("02.15.2021").getTime(), 52.2],
          [new Date("02.16.2021").getTime(), 53.6],
          [new Date("02.17.2021").getTime(), 52.4],
          [new Date("02.18.2021").getTime(), 51.1],
          [new Date("02.19.2021").getTime(), 52],
          [new Date("02.20.2021").getTime(), 52],
          [new Date("02.21.2021").getTime(), 53.3],
          [new Date("02.22.2021").getTime(), 52.8],
          [new Date("02.23.2021").getTime(), 52.8],
          [new Date("02.24.2021").getTime(), 54.6],
          [new Date("02.25.2021").getTime(), 54],
          [new Date("02.26.2021").getTime(), 54],
          [new Date("02.27.2021").getTime(), 53],
          [new Date("02.28.2021").getTime(), 53],
        ],
        axisName: "Revenue"
      }],
    }
  },
};
</script>
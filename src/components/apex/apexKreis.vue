<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <v-img src="../../assets/kreis_neu.png">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <apexchart width="500" height="350" type="pie" :options="chartOptions" :series="series"></apexchart>
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
      series: [5.4, 17.8, 21.1, 22.2, 25.3, 7.9],
      chartOptions: {
        chart: {
          width: 380,
          background: '#D4D5D7',
          type: 'pie',
        },
        legend: {
          show: false,
        },
        colors: ["#1D191A", "#00A0B0", "#EE3A41", "#7F00FF", "#00A94E", "#FEE9BA"],
        labels: ['Restliche nicht-europäische Länder', 'EWU', 'Mittel- und osteuropäische Länder', 'Restliche europäische Läner', 'USA', "Asien"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {

              position: 'bottom'
            }
          }
        }]
      },
    }
  },
};
</script>
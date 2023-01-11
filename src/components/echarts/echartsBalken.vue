<template>
  <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
    <v-chart :option="option" />
  </v-card>
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from 'echarts/components';
import { BarChart, ScatterChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  GridComponent,
  BarChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "EChart",
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        backgroundColor:"#D4D5D7",
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          show:false
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Energieversorgung/ Förderung fossiler Stoffe', 'Land- und Forstwirtschaft', 'Bergbau', 'Verarbeitendes Gewerbe', 'Verkehr und Lagerei', 'Handel','Bau, Wasserversorgung, Abfallentsorgung','Sonstige Dienstleistungen','Öffentlicher Sektor','Finanz- und Wohnungswesen','Gesundheitswesen']
        },
        series: [
          {
            name: 'Wertschöpfungsverluste im Gesamtzeitraum 2021',
            type: 'bar',
            color:"#00A94E",
            data: [6.6314, 2.9636, 1.4281, 23.8403, 5.6340, 9.2936,5.3362,23.8457,4.2385,12.6227,4.1661]
          },
          {
            name: 'Wertschöpfungsverluste im Gesamtzeitraum 2021',
            type: 'scatter',
            color:"#000",
            data: [2.2778, 0.7268, 0.1877, 22.7583, 5.6024, 9.0983,6.3263,25.4782,7,15.1467,7.6170]
          },
        ]
      }
    }
  }
}
</script>
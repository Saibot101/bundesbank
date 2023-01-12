<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <v-img src="../../assets/line_alt.png">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <v-chart :option="option2" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from 'echarts/components';
import { PieChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  GridComponent,
  PieChart,
  LineChart,
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
      option2: {
        xAxis: {
          type: 'category',
          data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008'],
          boundaryGap: true,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'value',
          min: 90,
          max: 190,
          splitNumber: 9,
        },
        series: [
          {
            data: [121.9, 112.76, 129.73, 130.63, 127.07, 104.8, 113.54, 122.03],
            type: 'line',
            symbol: "none",
            stack: "y",
            color: "#F79665",
            label: {
              show: false,
              formatter: function (params) {
                console.log(params) // this is my y column
                return ">tes"
              },
              position: "top",
              //distance: -30,
              //textBorderWidth: 2,
              //textBorderColor: 'white',
            },
          },
          {
            data: [166.56, 160.03, 164.39, 175.26, 157.43, 140.6, 131.4, 147.7],
            type: 'line',
            symbol: "none",
            color: "#FCC9AA",
            stack: "x",
            label: {
              show: true,
              formatter: this.labelFilter2,
              position: "top",
              //distance: -30,
              //textBorderWidth: 2,
              //textBorderColor: 'white',
            },
          }
        ]
      }
    }
  }
}
</script>
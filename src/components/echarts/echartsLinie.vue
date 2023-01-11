<template>
  <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
    <v-chart :option="option" />
  </v-card>
</template>
<script>
import { use } from "echarts/core";
import {
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from "vue-echarts";

use([
ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

export default {
  name: "EChart",
  components: {
    VChart,
  },
  data() {
    return {
      option:{
        backgroundColor:"#D4D5D7",
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
              
            },
            axisLine:{
              color:"#000"
            },
            axisLabel:{
              color:"#000"
            },
            // prettier-ignore
            data: ["1/1/2021","1/2/2021","1/3/2021","1/4/2021","1/5/2021","1/6/2021","1/7/2021","1/8/2021","1/9/2021","1/10/2021","1/11/2021","1/12/2021","1/13/2021","1/14/2021","1/15/2021","1/16/2021","1/17/2021","1/18/2021","1/19/2021","1/20/2021","1/21/2021","1/22/2021","1/23/2021","1/24/2021","1/25/2021","1/26/2021","1/27/2021","1/28/2021","1/29/2021","1/30/2021","1/31/2021","2/1/2021","2/2/2021","2/3/2021","2/4/2021","2/5/2021","2/6/2021","2/7/2021","2/8/2021","2/9/2021","2/10/2021","2/11/2021","2/12/2021","2/13/2021","2/14/2021","2/15/2021","2/16/2021","2/17/2021","2/18/2021","2/19/2021","2/20/2021","2/21/2021","2/22/2021","2/23/2021","2/24/2021","2/25/2021","2/26/2021","2/27/2021","2/28/2021"]
          }
        ],
        yAxis: [
          {
            type: 'value',
            position: 'left',
            alignTicks: true,
            min:1.2,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#000'
              }
            },
          },
          {
            type: 'value',
            position: 'right',
            alignTicks: true,
            min:35,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#000'
              }
            },
          },
        ],
        series: [
          {
            type: 'line',
            symbol:"none",
            color: "#EE3A41",
            data: [1.33,1.33,1.33,1.34,1.34,1.34,1.34,1.34,1.35,1.35,1.35,1.35,1.35,1.35,1.36,1.36,1.36,1.36,1.36,1.36,1.36,1.36,1.35,1.36,1.36,1.36,1.36,1.36,1.36,1.37,1.37,1.37,1.37,1.37,1.38,1.38,1.37,1.38,1.38,1.38,1.38,1.38,1.38,1.38,1.38,1.39,1.39,1.39,1.4,1.4,1.41,1.41,1.41,1.41,1.42,1.42,1.43,1.44,1.44],

          },
          {
            type: 'line',
            symbol:"none",
            color: "#00A0B0",
            data: [
            1.21,1.22,1.23,1.22,1.22,1.23,1.23,1.23,1.23,1.23,1.23,1.23,1.23,1.24,1.24,1.24,1.24,1.24,1.24,1.24,1.24,1.24,1.23,1.24,1.24,1.23,1.23,1.23,1.24,1.24,1.24,1.24,1.24,1.24,1.25,1.25,1.25,1.26,1.26,1.26,1.27,1.27,1.27,1.28,1.28,1.28,1.28,1.28,1.28,1.29,1.3,1.3,1.3,1.3,1.3,1.3,1.3,1.31,1.31
            ]
          },
          {
            type: 'line',
            symbol:"none",
            color: "#000",
            yAxisIndex: 1,
            //yAxisIndex: 2,
            data: [41.7,40.2,40.4,40.68,43.02,43.42,43.85,43.62,45,45,45.2,46.28,45.65,46.21,44.96,44.9,44.9,44.91,45.66,45.67,45.89,45.04,45.5,45.64,45.74,45.46,45.3,45.2,45,45,45,46.42,47.73,48.65,48.98,49.5,50,50.3,50.5,50.4,50.2,52,52,52,52.3,52.2,53.6,52.4,51.1,52,52,53.3,52.8,52.8,54.6,54,54,53,53]
          }
        ]
      }
    }
  }
}
</script>
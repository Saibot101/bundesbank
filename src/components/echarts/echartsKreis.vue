<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="d-flex flex-column justify-center align-center" >
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <v-img src="../../assets/kreis_alt.png">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="d-flex flex-column justify-center align-center">
        <v-card outlined elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <v-chart :option="option" />
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
  methods: {
    labelFilter(obj) {
      console.log(obj)
      if (obj.dataIndex === 0) {
        return "Durchschnitt"
      } else {
        return ""
      }
    },
    labelFilter2(obj) {
      console.log(obj)
      if (obj.dataIndex === 0) {
        return "75%-Quantil"
      } else {
        return ""
      }
    },
  },
  data() {
    return {
      array: [
        { dataIndex: 0 }, { dataIndex: 0 }, { dataIndex: 0 }, { dataIndex: 0 }, { dataIndex: 0 }, { dataIndex: 0 }, { dataIndex: 0 }, { dataIndex: 0 }
      ],
      labelFilter3: (obj) => obj.dataIndex % 3 === 0 ? console.log(obj) : '',
      option: {

        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            color: ["#FCCAAC", "#BAC8AD", "#FEE9BA", "#FEE9BA", "#FEE9BA", "#82A7C8"],
            itemStyle: {
              borderWidth: 2,
              borderColor: '#fff'
            },
            label: {
              formatter: "{b} {d}%"
            },
            data: [
              { value: 39.7, name: "Unternehmen" },
              { value: 16.4, name: "Selbstständige" },
              { value: 3.9, name: "Rest" },
              { value: 5.6, name: "Ratenkredite" },
              { value: 33.8, name: "Wohnungsbau" },
              { value: 0.6, name: "Organsiationen ohne Erwerbszweck" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                borderWidth: 1,

              },
            },
          },
        ],
      },
      
    };
  },
};
</script>


<style>
body {
  margin: 0;
}
</style>
<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col class="d-flex flex-column justify-center align-center">
        Stand 2018
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
        title:{
          text:"Durchschnitt 2011 bis 2015: 15,7 Mrd Eur",
          left:'center'
        },
        backgroundColor:"#D4D5D7",
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
            color: ["#1D191A", "#00A0B0", "#EE3A41", "#7F00FF", "#00A94E", "#FEE9BA"],
            itemStyle: {
              borderWidth: 0,
            },
            label: {
              formatter: "{b} {d}"
            },
            data: [
              { value: 5.4, name: "Restliche nicht\n-europäische Länder" },
              { value: 17.8, name: "EWU" },
              { value: 21.1, name: "Mittel- und \nosteuropäische \nLänder" },
              { value: 22.2, name: "Restliche europäische \nLänder" },
              { value: 25.3, name: "USA" },
              { value: 7.9, name: "Asien" },
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
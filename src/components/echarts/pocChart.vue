<template>

  <v-container>
    <v-row>

      <v-col class="d-flex flex-column justify-center align-center">
        <v-card variant="outlined" elevation="1" height="350" width="500" class="mt-5 pb-n5">
          <v-chart :option="option" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title>
            Series
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container>
              <v-row v-for="(item, index) in series" :key="item">
                <h2>{{ index }}</h2>
                <v-container>
                  <v-row>
                    <v-text-field label="Name Series" density="compact" variant="outlined"
                      v-model="series[index]['name']"></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field label="Typ Plot" density="compact" variant="outlined"
                      v-model="series[index]['type']"></v-text-field>
                  </v-row>
                  <v-row>
                    <v-text-field label="Farbe" density="compact" variant="outlined"
                      v-model="series[index]['color']"></v-text-field>
                  </v-row>
                  <v-row>
                    <v-container>
                      <v-row>
                        <v-col v-for="(selection, i) in series[index]['data']" :key="i" cols="auto" class="py-1 pr-0">
                          <v-chip closable @click:close="series[index]['data'].splice(i, 1)">

                            {{ selection }}
                          </v-chip>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                          <v-text-field label="Neuer Eintrag" density="compact" variant="outlined" placeholder="Wert"
                            v-model="seriesData[index]"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-btn @click="series[index]['data'].push(seriesData[index])">
                            Hinzufügen
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-row>
                </v-container>
              </v-row>
            </v-container>
            <v-btn @click="seriesEvent()">
              Sichern
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
            x-Achse
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container>
              <v-row>
                <v-select label="Show Grid" density="compact" variant="outlined" v-model="xAxis['show']"
                  :items="[{title: 'true', value: true}, {title: 'false',value: false}]">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Achsentyp" density="compact" variant="outlined" v-model="xAxis['type']"
                  :items="['value', 'time', 'category', 'log']">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Position" density="compact" variant="outlined" v-model="xAxis['position']"
                  :items="['top', 'bottom']">
                </v-select>
              </v-row>
              <v-row>
                <v-text-field label="Name" density="compact" variant="outlined" v-model="xAxis['name']"></v-text-field>
              </v-row>
              <v-row>
                <v-select label="Position Name" density="compact" variant="outlined" v-model="xAxis['nameLocation']"
                  :items="['start', 'middle', 'end']">
                </v-select>
              </v-row>
            </v-container>
            <v-btn @click="xAxisEvent()">
              Sichern
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            y-Achse
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container>
              <v-row>
                <v-select label="Show Grid" density="compact" variant="outlined" v-model="yAxis['show']"
                  :items="[{title: 'true', value: true}, {title: 'false',value: false}]">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Achsentyp" density="compact" variant="outlined" v-model="yAxis['type']"
                  :items="['value', 'time', 'category', 'log']">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Position" density="compact" variant="outlined" v-model="xAxis['position']"
                  :items="['left', 'right']">
                </v-select>
              </v-row>
              <v-row>
                <v-text-field label="Name" density="compact" variant="outlined" v-model="xAxis['name']"></v-text-field>
              </v-row>
              <v-row>
                <v-select label="Position Name" density="compact" variant="outlined" v-model="xAxis['nameLocation']"
                  :items="['start', 'middle', 'end']">
                </v-select>
              </v-row>
              <v-container>
                <v-row>
                  <v-col v-for="(selection, i) in yAxis['data']" :key="i" cols="auto" class="py-1 pr-0">
                    <v-chip closable @click:close="yAxis['data'].splice(i, 1)">

                      {{ selection }}
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field label="Neuer Eintrag" density="compact" variant="outlined" placeholder="Wert"
                      v-model="yAxisData"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-btn @click="yAxis['data'].push(yAxisData)">
                      Hinzufügen
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
            <v-btn @click="yAxisEvent()">
              Sichern
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            Grid
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container>
              <v-row>
                <v-select label="Show Grid" density="compact" variant="outlined" v-model="grid['show']"
                  :items="[{title: 'true', value: true}, {title: 'false',value: false}]">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Striche Achsen" density="compact" variant="outlined" v-model="grid['containLabel']"
                  :items="[{title: 'true', value: true}, {title: 'false',value: false}]">
                </v-select>
              </v-row>
              <v-row>
                <v-combobox label="Abstand links" density="compact" variant="outlined" v-model="grid['left']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-combobox label="Abstand rechts" density="compact" variant="outlined" v-model="grid['right']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-combobox label="Abstand oben" density="compact" variant="outlined" v-model="grid['top']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-combobox label="Abstand unten" density="compact" variant="outlined" v-model="grid['bottom']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-text-field label="Hintergrundfarbe: transparent oder hecode" density="compact" variant="outlined" v-model="grid['backgroundColor']"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field label="Strichfarbe" density="compact" variant="outlined" v-model="grid['borderColor']"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field label="Strichweite" density="compact" variant="outlined" v-model="grid['borderWidth']"></v-text-field>
              </v-row>
            </v-container>
            <v-btn @click="gridEvent()">
              Sichern
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            Legende
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container>
              <v-row>
                <v-select label="Typ" density="compact" variant="outlined" v-model="legend['type']"
                  :items="['plain','scroll']">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Show Legende" density="compact" variant="outlined" v-model="legend['show']"
                  :items="[{title: 'true', value: true}, {title: 'false',value: false}]">
                </v-select>
              </v-row>
              <v-row>
                <v-combobox label="Abstand links" density="compact" variant="outlined" v-model="legend['left']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-combobox label="Abstand rechts" density="compact" variant="outlined" v-model="legend['right']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-combobox label="Abstand oben" density="compact" variant="outlined" v-model="legend['top']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-combobox label="Abstand unten" density="compact" variant="outlined" v-model="legend['bottom']"
                  :items="[1,5,10,20,'5%','10%','20%','left','center','right']">
                </v-combobox>
              </v-row>
              <v-row>
                <v-select label="Orientation" density="compact" variant="outlined" v-model="legend['orient']"
                  :items="['orient','vertical']">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Alignment" density="compact" variant="outlined" v-model="legend['align']"
                  :items="['auto','left','right']">
                </v-select>
              </v-row>
              <v-row>
                <v-text-field label="Abstand Einträge Legende" density="compact" variant="outlined" v-model="grid['itemGap']"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field label="Bild Weite" density="compact" variant="outlined" v-model="grid['itemWidth']"></v-text-field>
              </v-row>
              <v-row>
                <v-text-field label="Bild Höhe" density="compact" variant="outlined" v-model="grid['itemHeigth']"></v-text-field>
              </v-row>
            </v-container>
            <v-btn @click="legendEvent()">
              Sichern
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            Hintergrundfarbe
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container>
              <v-row>
                <v-text-field label="Hintergrundfarbe" density="compact" variant="outlined" v-model="backgroundColor"></v-text-field>
              </v-row>
            </v-container>
            <v-btn @click="backgroundColorEvent()">
              Sichern
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>
            Tooltip
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container>
              <v-row>
                <v-select label="Show Tooltip" density="compact" variant="outlined" v-model="tooltip['show']"
                  :items="[{title: 'true', value: true}, {title: 'false',value: false}]">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Trigger" density="compact" variant="outlined" v-model="tooltip['trigger']"
                  :items="['item','axis','none']">
                </v-select>
              </v-row>
              <v-row>
                <v-select label="Triggger Event" density="compact" variant="outlined" v-model="tooltip['triggerOn']"
                  :items="['mousemove','click','mousemove|click','none']">
                </v-select>
              </v-row>
            </v-container>
            <v-btn @click="tooltipEvent()">
              Sichern
            </v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-row>
  </v-container>
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
      series: [
        {
          name: 'Wertschöpfungsverluste im Gesamtzeitraum 2021',
          type: 'bar',
          color: "#00A94E",
          data: [6.6314, 2.9636, 1.4281, 23.8403, 5.6340, 9.2936, 5.3362, 23.8457, 4.2385, 12.6227, 4.1661]
        },
        {
          name: 'Wertschöpfungsverluste im Gesamtzeitraum 2021',
          type: 'scatter',
          color: "#000",
          data: [2.2778, 0.7268, 0.1877, 22.7583, 5.6024, 9.0983, 6.3263, 25.4782, 7, 15.1467, 7.6170]
        },
      ],
      seriesData: [],
      yAxisData: "",
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['Energieversorgung/ Förderung fossiler Stoffe', 'Land- und Forstwirtschaft', 'Bergbau', 'Verarbeitendes Gewerbe', 'Verkehr und Lagerei', 'Handel', 'Bau, Wasserversorgung, Abfallentsorgung', 'Sonstige Dienstleistungen', 'Öffentlicher Sektor', 'Finanz- und Wohnungswesen', 'Gesundheitswesen']
      },

      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: false
      },
      legend:{},
      backgroundColor:"#D4D5D7",
      tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },

      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        backgroundColor: "#D4D5D7",
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          show: false
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Energieversorgung/ Förderung fossiler Stoffe', 'Land- und Forstwirtschaft', 'Bergbau', 'Verarbeitendes Gewerbe', 'Verkehr und Lagerei', 'Handel', 'Bau, Wasserversorgung, Abfallentsorgung', 'Sonstige Dienstleistungen', 'Öffentlicher Sektor', 'Finanz- und Wohnungswesen', 'Gesundheitswesen']
        },
        series: [
          {
            name: 'Wertschöpfungsverluste im Gesamtzeitraum 2021',
            type: 'bar',
            color: "#00A94E",
            data: [6.6314, 2.9636, 1.4281, 23.8403, 5.6340, 9.2936, 5.3362, 23.8457, 4.2385, 12.6227, 4.1661]
          },
          {
            name: 'Wertschöpfungsverluste im Gesamtzeitraum 2021',
            type: 'scatter',
            color: "#000",
            data: [2.2778, 0.7268, 0.1877, 22.7583, 5.6024, 9.0983, 6.3263, 25.4782, 7, 15.1467, 7.6170]
          },
        ],
      }
    }
  },
  methods: {
    seriesEvent() {
      this.option.series = this.series
      console.log(this.option)
    },
    xAxisEvent() {
      this.option.xAxis = this.xAxis
    },
    yAxisEvent() {
      this.option.yAxis = this.yAxis
    },
    gridEvent() {
      this.option.grid = this.grid
    },
    legendEvent() {
      this.option.legend = this.legend
    },
    backgroundColorEvent() {
      this.option.backgroundColor = this.backgroundColor
    },
    tooltipEvent() {
      this.option.tooltip = this.tooltip
    },
  }
}
</script>
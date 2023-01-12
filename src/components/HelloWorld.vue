<template>
  <v-container>
    <h1>
      ECharts
    </h1>

    <v-row>
      <v-col cols="4">
        <v-card color="black" height="100" to="/echarts/linie">
          Linien Neu Vo3PR0725B
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/echarts/linie2">
          Linien Alt B2ST0003_alt
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/echarts/balken">
          Balken F4ST0079A
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/echarts/Kreis">
          Kreis Alt B2ST0003_alt
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/echarts/Kreis2">
          Kreis Neu Vo3PR0369
        </v-card>
      </v-col>
    </v-row>

    <h1>
      Apex
    </h1>

    <v-row>
      <v-col cols="4">
        <v-card color="black" height="100" to="/apex/linie">
          Linien Vo3PR0725B
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/apex/balken">
          Balken F4ST0079A
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/apex/Kreis">
          Kreis Vo3PR0369
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
  }),
}
</script>

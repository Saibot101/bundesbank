<template>
  <v-container>
    <h1>
      ECharts
    </h1>

    <v-row>
      <v-col cols="3">
        <v-card color="black" height="100" to="/echarts/linie">
          Linien
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card color="black" height="100" to="/echarts/balken">
          Balken
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card color="black" height="100" to="/echarts/Kreis">
          Kreis
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card color="black" height="100" to="/echarts/Kreis2">
          Kreis 2
        </v-card>
      </v-col>
    </v-row>

    <h1>
      Apex
    </h1>

    <v-row>
      <v-col cols="4">
        <v-card color="black" height="100" to="/apex/linie">
          Linien
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/apex/balken">
          Balken
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="black" height="100" to="/apex/Kreis">
          Kreis
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

<template>
  <v-card class="mb-5" outlined>
    <v-card-title class="text-body-1 green white--text">
      Club grades
    </v-card-title>
    <v-card-text>
      <PolarArea
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { PolarArea } from "vue-chartjs/legacy";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  name: "BarChart",
  components: { PolarArea },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},
  data() {
    return {
      chartData: {
        labels: [
          "6-5 Kyu",
          "4-3 Kyu",
          "3-2 Kyu",
          "1 Kyu",
          "1 Dan",
          "2 Dan",
          "3-4 Dan",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [1, 2, 3, 3, 2, 2, 1],
            backgroundColor: [
              "#C8E6C9",
              "#81C784",
              "#43A047",
              "#2E7D32",
              "#BDBDBD",
              "#616161",
              "#212121",
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "left",
          },
        },
      },
    };
  },
};
</script>

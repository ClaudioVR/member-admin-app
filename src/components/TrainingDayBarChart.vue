<template>
  <v-card class="mb-5" outlined>
    <v-card-title class="text-body-1 orange white--text">
      Sessions by popularity
    </v-card-title>
    <v-card-text>
      <Bar
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
import { Bar } from "vue-chartjs/legacy";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  name: "BarChart",
  components: { Bar },
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
      default: 250,
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
  data() {
    return {
      chartData: {
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: [4, 2, 7, 8, 5, 4, 3],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgb(255, 152, 0, 0.2)",
          },
        ],
        labels: ["Mon", "Weds", "Thurs", "Fri"],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>

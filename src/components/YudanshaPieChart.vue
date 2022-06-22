<template>
  <v-card class="mb-5" outlined>
    <v-card-title class="text-body-1 blue white--text">
      Yudansha vs Mudansha
    </v-card-title>
    <v-card-text>
      <Pie
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
import { Pie } from "vue-chartjs/legacy";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  name: "BarChart",
  components: { Pie },
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
  mounted() {
    this.chartData.datasets[0].data = [4, 3];
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Test",
            data: "",
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            hoverOffset: 4,
          },
        ],
        labels: ["Yudansha", "Mudansha"],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    };
  },
};
</script>

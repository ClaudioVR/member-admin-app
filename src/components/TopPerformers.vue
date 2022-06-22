<template>
  <v-card class="mb-5" outlined>
    <v-card-title class="text-body-1 pink white--text">
      Most training hours
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
  mounted() {
    this.chartData.labels = [
      this.topPerformers[0].name,
      this.topPerformers[1].name,
      this.topPerformers[2].name,
    ];
    this.chartData.datasets[0].data = [
      this.topPerformers[0].trainingSessions,
      this.topPerformers[1].trainingSessions,
      this.topPerformers[2].trainingSessions,
    ];
  },
  computed: {
    topPerformers() {
      const array = this.$store.state.members
        .slice(0)
        .sort((a, b) => b.trainingSessions - a.trainingSessions);
      return array.slice(0, 3);
    },
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: "",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(233, 30, 99, 0.2)",
          },
        ],
        labels: "",
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        indexAxis: "y",
      },
    };
  },
};
</script>

<template>
  <div>
    <v-btn class="mb-5" small @click="$router.go(-1)" color="primary" outlined>
      <v-icon left>mdi-arrow-left</v-icon>
      Back
    </v-btn>
    <p class="text-h3 mb-5">Club stats</p>
    <v-row>
      <v-col cols="12" md="4">
        <latest-session-mixed-chart />
      </v-col>
      <v-col cols="12" md="4">
        <top-performers />
      </v-col>
      <v-col cols="12" md="4">
        <training-day-bar-chart />
      </v-col>
      <v-col cols="12" md="6">
        <grade-spread-chart />
      </v-col>
      <v-col cols="12" md="6">
        <yudansha-pie-chart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LatestSessionMixedChart from "@/components/LatestSessionMixedChart.vue";
import YudanshaPieChart from "@/components/YudanshaPieChart.vue";
import GradeSpreadChart from "@/components/GradeSpreadChart.vue";
import TopPerformers from "@/components/TopPerformers.vue";
import TrainingDayBarChart from "@/components/TrainingDayBarChart.vue";
export default {
  components: {
    LatestSessionMixedChart,
    YudanshaPieChart,
    GradeSpreadChart,
    TopPerformers,
    TrainingDayBarChart,
  },
  name: "ClubStats",
};
</script>

<style></style>

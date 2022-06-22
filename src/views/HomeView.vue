<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="8"></v-col>
          <v-col cols="12" sm="6" md="4">
            <calc-trainings-left class="mb-3" />
            <v-card outlined>
              <v-card-title class="blue white--text">
                Attendance
                <v-spacer></v-spacer>
                Avg. 4,7
              </v-card-title>
              <v-card-text>
                <latest-sessions-chart />
              </v-card-text>
            </v-card>
            <latest-sessions-mixed-chart />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CalcTrainingsLeft from "@/components/CalcTrainingsLeft.vue";
import LatestSessionsChart from "@/components/LatestSessionsChart.vue";
import LatestSessionsMixedChart from "@/components/LatestSessionsMixedChart.vue";
export default {
  components: {
    CalcTrainingsLeft,
    LatestSessionsChart,
    LatestSessionsMixedChart,
  },
  name: "HomeView",
};
</script>

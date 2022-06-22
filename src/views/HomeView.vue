<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="8">
            <div class="d-flex justify-space-between">
              <p>{{ localTime }}</p>
              <p>Oslo, Norway</p>
            </div>

            <homepage-large-buttons class="d-none d-sm-block" />
            <homepage-small-buttons class="d-sm-none" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <calc-trainings-left class="mb-5" />
            <v-card outlined>
              <v-card-title class="text-body-1 blue white--text">
                Attendance
                <v-spacer></v-spacer>
                Avg. 4,7
              </v-card-title>
              <v-card-text>
                <latest-session-mixed-chart />
              </v-card-text>
            </v-card>
            <v-btn
              outlined
              large
              class="mt-5"
              color="blue "
              depressed
              dark
              block
              >View full stats
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import CalcTrainingsLeft from "@/components/CalcTrainingsLeft.vue";
import LatestSessionMixedChart from "@/components/LatestSessionMixedChart.vue";
import HomepageLargeButtons from "@/components/HomepageLargeButtons.vue";
import HomepageSmallButtons from "@/components/HomepageSmallButtons.vue";
export default {
  components: {
    CalcTrainingsLeft,
    LatestSessionMixedChart,
    HomepageLargeButtons,
    HomepageSmallButtons,
  },
  name: "HomeView",
  mounted() {
    this.updateLocalTime();
  },
  data() {
    return {
      localTime: new Date().toLocaleString("no-No"),
      updatingTime: null,
    };
  },
  methods: {
    updateLocalTime() {
      this.updatingTime = setInterval(() => {
        this.localTime = new Date().toLocaleString("no-No");
        console.log(this.localTime);
        console.log(this.updatingTime);
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.updatingTime);
  },
};
</script>

<template>
  <div>
    <v-card outlined>
      <v-card-text>
        <div class="d-flex justify-space-between">
          <p>{{ localTime }}</p>
          <p class="d-none d-md-block">Skoyen Aikido</p>
          <p>Oslo, Norway</p>
        </div>
        <v-row>
          <v-col cols="12" sm="8" md="8">
            <homepage-large-buttons class="d-none d-sm-block" />
            <homepage-small-buttons class="d-sm-none" />
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-card class="mb-5" outlined>
              <v-card-text
                class="d-flex align-center justify-space-between text-center black--text"
              >
                <v-avatar size="50" color="blue">
                  <v-icon color="white">mdi-account-group</v-icon>
                </v-avatar>
                <p class="text-h4 my-0 blue--text font-weight-bold">
                  {{ $store.state.members.length }} members
                </p>
              </v-card-text>
            </v-card>
            <v-card class="mb-5" outlined>
              <v-card-title class="text-body-1 blue white--text">
                Attendance
                <v-spacer></v-spacer>
                Avg. 4,7
              </v-card-title>
              <v-card-text>
                <latest-session-mixed-chart />
              </v-card-text>
            </v-card>
            <calc-trainings-left />
            <v-btn large class="mt-5" color="blue " depressed dark block
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

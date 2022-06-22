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

            <v-btn block large color="orange" depressed dark
              >record session</v-btn
            >
            <v-btn
              to="/create-member"
              large
              class="mt-3"
              color="pink "
              depressed
              dark
              block
              >New member
            </v-btn>
            <v-btn large class="mt-3" color="green " depressed dark block
              >View members
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <calc-trainings-left class="mb-3" />
            <v-card outlined>
              <v-card-title class="blue white--text">
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
              class="mt-3"
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
export default {
  components: {
    CalcTrainingsLeft,
    LatestSessionMixedChart,
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

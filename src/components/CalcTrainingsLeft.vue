<template>
  <div>
    <v-card outlined>
      <v-card-text class="text-center">
        <p class="font-weight-bold mb-1 text-h2 blue--text">
          {{ numberFutureTrainingDays }}
        </p>
        <span class="text-h6 blue--text"
          >sessions left in {{ new Date().getFullYear() }}</span
        >
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CalcTrainingsLeft",
  created() {
    this.getMondays();
    this.getWednesdays();
    this.getThursdays();
    this.getFridays();
  },
  data() {
    return {
      mondays: [],
      wednesdays: [],
      thursdays: [],
      fridays: [],
    };
  },
  computed: {
    allTrainingDays() {
      return [
        ...this.mondays,
        ...this.wednesdays,
        ...this.thursdays,
        ...this.fridays,
      ];
    },
    futureTrainingDays() {
      let todaysDate = new Date();
      const filterdArray = this.allTrainingDays.filter(
        (item) => item >= todaysDate
      );
      filterdArray.push(todaysDate);
      filterdArray.sort((a, b) => a - b);
      return filterdArray;
    },
    numberFutureTrainingDays() {
      return this.futureTrainingDays.length;
    },
  },
  methods: {
    getMondays() {
      let d = new Date();
      const year = d.getYear();

      d.setDate(1);

      // Get the first Monday in the month
      while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
      }

      // Get all the other Mondays in the month
      while (d.getYear() === year) {
        let pushDate = new Date(d.getTime());
        this.mondays.push(pushDate);
        d.setDate(d.getDate() + 7);
      }
    },
    getWednesdays() {
      let d = new Date();
      const year = d.getYear();

      d.setDate(1);

      // Get the first Monday in the month
      while (d.getDay() !== 3) {
        d.setDate(d.getDate() + 1);
      }

      // Get all the other Mondays in the month
      while (d.getYear() === year) {
        let pushDate = new Date(d.getTime());
        this.wednesdays.push(pushDate);
        d.setDate(d.getDate() + 7);
      }
    },
    getThursdays() {
      let d = new Date();
      const year = d.getYear();

      d.setDate(1);

      // Get the first Monday in the month
      while (d.getDay() !== 4) {
        d.setDate(d.getDate() + 1);
      }

      // Get all the other Mondays in the month
      while (d.getYear() === year) {
        let pushDate = new Date(d.getTime());
        this.wednesdays.push(pushDate);
        d.setDate(d.getDate() + 7);
      }
    },
    getFridays() {
      let d = new Date();
      const year = d.getYear();

      d.setDate(1);

      // Get the first Monday in the month
      while (d.getDay() !== 5) {
        d.setDate(d.getDate() + 1);
      }

      // Get all the other Mondays in the month
      while (d.getYear() === year) {
        let pushDate = new Date(d.getTime());
        this.wednesdays.push(pushDate);
        d.setDate(d.getDate() + 7);
      }
    },
  },
};
</script>

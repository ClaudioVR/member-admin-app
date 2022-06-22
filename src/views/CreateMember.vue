<template>
  <div>
    <v-btn class="mb-5" small @click="$router.go(-1)" color="primary" outlined>
      <v-icon left>mdi-arrow-left</v-icon>
      Back
    </v-btn>
    <div>
      <p class="text-h3 my-0">Create new member</p>
    </div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-form class="mt-8" lazy-validation>
          <v-text-field
            v-model="name"
            label="Full name"
            outlined
            :rules="nameRules"
            required
            background-color="white"
          ></v-text-field>

          <v-select
            v-model="selectedGrade"
            :items="grades"
            label="Grade"
            outlined
          ></v-select>

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Latest grading"
                append-icon="mdi-calendar"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
          </v-menu>

          <v-text-field
            type="number"
            v-model.number="sessionsTrained"
            label="Sessions trained"
            outlined
            required
            background-color="white"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>

    <v-btn @click="createMember" color="primary" depressed width="300px" large
      >Save</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Please enter full name"],
      grades: [
        "None",
        "6th Kyu",
        "5th Kyu",
        "4th Kyu",
        "3rd Kyu",
        "2nd Kyu",
        "1st Kyu",
        "1st Dan",
        "2nd Dan",
        "3rd Dan",
        "4th Dan",
      ],
      selectedGrade: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      sessionsTrained: null,
    };
  },
  methods: {
    createMember() {
      const newMember = {
        name: this.name,
        grade: this.selectedGrade,
        latestGrading: new Date(this.date),
        trainingSessions: this.sessionsTrained,
      };
      console.log(newMember);
      this.$store.commit("CREATE_MEMBER", newMember);
    },
  },
};
</script>

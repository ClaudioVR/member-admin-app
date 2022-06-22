<template>
  <div>
    <v-btn class="mb-5" small @click="$router.go(-1)" color="primary" outlined>
      <v-icon left>mdi-arrow-left</v-icon>
      Back
    </v-btn>
    <div class="d-flex mb-5">
      <div>
        <p class="text-h3 my-0">Club members</p>
        <p class="my-0">{{ $store.state.members.length }} active members</p>
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        outlined
      ></v-text-field>
    </div>
    <v-data-table
      :search="search"
      :headers="headers"
      :items="$store.state.members"
      item-key="name"
      class="elevation-1"
      :items-per-page="itemsPerPage"
    >
      <template v-slot:[`item.grade`]="{ item }">
        <div class="d-flex align-center">
          <p class="mr-3 my-0">{{ item.grade }}</p>
          <v-img
            v-if="isYudansha(item.grade)"
            max-height="30"
            max-width="40"
            src="../assets/blackBelt.png"
          ></v-img>
          <v-img
            v-else
            max-height="30"
            max-width="40"
            src="../assets/whiteBelt.png"
          ></v-img>
        </div>
      </template>
      <template v-slot:[`item.latestGrading`]="{ item }">
        <span>{{ item.latestGrading.toLocaleDateString("no-No") }}</span>
      </template>
      <template v-slot:[`item.trainingSessions`]="{ item }">
        <div class="d-flex align-center">
          <p class="my-0">{{ item.trainingSessions }}</p>
          <v-sparkline
            color="grey lighten-1"
            :value="value"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :type="type"
            auto-draw
          ></v-sparkline>
        </div>
      </template>
      <template v-slot:[`item.actions`]="{}">
        <div>
          <v-btn text color="success"><v-icon>mdi-pencil</v-icon></v-btn>
          <v-btn text color="red"><v-icon>mdi-delete</v-icon></v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "ClubMembers",
  data() {
    return {
      itemsPerPage: -1,
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Grade", value: "grade" },
        { text: "Latest grading", value: "latestGrading" },
        { text: "Trained sessions", value: "trainingSessions" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      width: 2,
      radius: 10,
      padding: 15,
      lineCap: "round",
      value: [0, 2, 5, 9, 5, 10, 3, 0, 8, 2, 9, 0],
      gradientDirection: "top",
      type: "trend",
    };
  },
  methods: {
    isYudansha(grade) {
      switch (grade) {
        case "1st Dan":
        case "2nd Dan":
        case "3rd Dan":
        case "4th Dan":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style></style>

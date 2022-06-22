<template>
  <div>
    <v-btn class="mb-5" small @click="$router.go(-1)" color="primary" outlined>
      <v-icon left>mdi-arrow-left</v-icon>
      Back
    </v-btn>
    <div>
      <p class="text-h3 my-0">Record session</p>
    </div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-form class="mt-8" lazy-validation>
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
                v-model="formattedDate"
                label="Date of training session"
                append-icon="mdi-calendar"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu = false"
              locale="no-NO"
            ></v-date-picker>
          </v-menu>

          <v-autocomplete
            v-model="instructor"
            :items="$store.state.members"
            outlined
            chips
            small-chips
            label="Instructor"
            item-text="name"
            return-object
          ></v-autocomplete>

          <v-autocomplete
            v-model="participants"
            :items="$store.state.members"
            outlined
            chips
            small-chips
            label="Participants"
            multiple
            item-text="name"
            return-object
          ></v-autocomplete>

          <div v-if="participants">
            <p>
              {{ participants.length + 1 }} participants
              <span class="font-weight-light"
                >(1 instructor + {{ participants.length }} participants)</span
              >
            </p>
          </div>
          <v-btn
            @click="createSession"
            color="primary"
            depressed
            width="300px"
            large
            >Save</v-btn
          >
        </v-form>
      </v-col>
      <v-col class="" cols="12" sm="5" offset-sm="1">
        <v-card outlined>
          <v-card-title primary-title>
            <p class="text-body-1">Past Sessions</p>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="$store.state.sessions"
              item-key="id"
              class="elevation-1"
              :items-per-page="itemsPerPage"
              sort-by="dateTime"
              sort-desc
            >
              <template v-slot:[`item.dateTime`]="{ item }">
                <span>{{ item.dateTime.toLocaleDateString("no-No") }}</span>
              </template>
              <template v-slot:[`item.participants`]="{ item }">
                <span>{{ item.participants.length }}</span>
              </template>
              <template v-slot:[`item.actions`]="{ item }">
                <v-btn outlined small @click="viewDetails(item)" color="blue">
                  View
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NewSessions",
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString("no-NO");
    },
  },
  data() {
    return {
      itemsPerPage: 10,
      valid: true,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      instructor: "",
      participants: "",
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: true,
          value: "dateTime",
        },
        { text: "Participants", value: "participants" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  methods: {
    createSession() {
      const session = {
        dateTime: new Date(this.date),
        participants: this.participants,
        id: new Date(this.date),
      };
      this.$store.commit("ADD_NEW_SESSION", session);
      this.participants = "";
      this.instructor = "";
      this.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10);
    },
  },
};
</script>

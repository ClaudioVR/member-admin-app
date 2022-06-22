<template>
  <div>
    <v-card class="mb-8" outlined>
      <v-card-text>
        <v-row align="center">
          <v-col cols="3">
            <v-img contain src="../assets/recordSession.png"></v-img>
          </v-col>
          <v-col>
            <p class="text-body-1">
              Record a training session. Select the members who were present at
              training. Select and instructor and save.
            </p>
            <v-btn block large color="pink" depressed dark
              >record session</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="mb-8" outlined>
      <v-card-text>
        <v-row align="center">
          <v-col cols="3">
            <v-img contain src="../assets/addMember.png"></v-img>
          </v-col>
          <v-col>
            <p class="text-body-1">
              Create a new club member. Add their grade, latest grading date and
              number of training sessions.
            </p>

            <v-btn to="/create-member" block large color="orange" depressed dark
              >New member</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card outlined>
      <v-card-text>
        <v-row align="center">
          <v-col cols="3">
            <v-img contain src="../assets/viewMembers.png"></v-img>
          </v-col>
          <v-col>
            <p class="text-body-1">
              View all of your club's members. Edit member details, add and
              delete.
            </p>
            <v-btn to="/members" block large color="green" depressed dark
              >View members</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HomepageLargeButtons",
};
</script>

<style></style>

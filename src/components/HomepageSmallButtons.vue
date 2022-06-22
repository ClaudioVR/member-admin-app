<template>
  <div>
    <div class="wrapper d-flex flex-column">
      <!-- <v-avatar size="300" color="white"> -->
      <v-img contain src="../assets/SkoyenAikidoLogo.jpg"></v-img>
      <!-- </v-avatar> -->
      <div class="buttons mt-8">
        <v-btn block large color="pink" depressed dark>record session</v-btn>
        <v-btn
          to="/create-member"
          large
          class="mt-3"
          color="orange"
          depressed
          dark
          block
          >New member
        </v-btn>
        <v-btn large class="mt-3" color="green " depressed dark block
          >View members
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomepageSmallButtons",
};
</script>

<style scoped></style>

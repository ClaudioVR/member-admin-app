<template>
  <div>
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
</template>

<script>
export default {
  name: "HomepageSmallButtons",
};
</script>

<style></style>

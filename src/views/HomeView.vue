<template>
  <div>
    <h1>Dashboard</h1>
    <calc-trainings-left />
  </div>
</template>

<script>
import CalcTrainingsLeft from "@/components/CalcTrainingsLeft.vue";
export default {
  components: { CalcTrainingsLeft },
  name: "HomeView",
};
</script>

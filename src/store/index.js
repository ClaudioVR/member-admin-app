import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: "",
    grades: [
      "1st Kyu",
      "2nd Kyu",
      "3rd Kyu",
      "4th Kyu",
      "5th Kyu",
      "6th Kyu",
      "1st Dan",
      "2nd Dan",
      "3rd Dan",
      "4th Dan",
    ],
  },
  getters: {},
  mutations: {
    SET_MEMBERS(state, data) {
      state.members = data;
    },
  },
  actions: {
    async getUsers({ commit }) {
      const usersJSON = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = usersJSON.data;
      const newUsers = users.map((obj) => {
        //Generate random index to assign grade to user
        const randomIndex = Math.floor(Math.random() * 10);
        //Generate random date to assign grading date
        const startDate = new Date(2010, 0, 1);
        const endDate = new Date();
        const gradingDate = new Date(
          startDate.getTime() +
            Math.random() * (endDate.getTime() - startDate.getTime())
        );
        const trainingSessions = Math.floor(Math.random() * (300 - 25));
        return {
          ...obj,
          grade: this.state.grades[randomIndex],
          latestGrading: gradingDate,
          trainingSessions: trainingSessions,
        };
      });
      commit("SET_MEMBERS", newUsers);
    },
  },
  modules: {},
});

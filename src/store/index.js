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
        //Assign random grade to user
        const randomIndex = Math.floor(Math.random() * 10);
        return {
          ...obj,
          grade: this.state.grades[randomIndex],
        };
      });
      commit("SET_MEMBERS", newUsers);
    },
  },
  modules: {},
});

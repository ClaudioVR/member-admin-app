import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: "",
    sessions: "",
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
    CREATE_MEMBER(state, data) {
      state.members.push(data);
    },
    SET_SESSIONS(state) {
      const sessions = [
        {
          id: 1,
          dateTime: new Date("2022-06-20"),
          participants: [state.members[0], state.members[1], state.members[2]],
        },
        {
          id: 2,
          dateTime: new Date("2022-06-17"),
          participants: [
            state.members[0],
            state.members[1],
            state.members[2],
            state.members[6],
          ],
        },
        {
          id: 4,
          dateTime: new Date("2022-06-16"),
          participants: [
            state.members[0],
            state.members[1],
            state.members[2],
            state.members[3],
            state.members[4],
          ],
        },
      ];
      state.sessions = sessions;
    },
    ADD_NEW_SESSION(state, data) {
      state.sessions.push(data);
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
        // Generate random number of training sessions
        const trainingSessions = Math.floor(Math.random() * (300 - 25));
        return {
          ...obj,
          grade: this.state.grades[randomIndex],
          latestGrading: gradingDate,
          trainingSessions: trainingSessions,
        };
      });
      commit("SET_MEMBERS", newUsers);
      commit("SET_SESSIONS");
    },
  },
  modules: {},
});

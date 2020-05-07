import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "DonGato" },
    categories: [
      "sustainability",
      "nature",
      "aniaml welfare",
      "housing",
      "education",
      "food",
      "community"
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});

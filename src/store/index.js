import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "DonGato" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    events: []
  },
  mutations: {
    // MUTATION_NAME(state, payload)
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    }
  },
  actions: {
    // methodName( { contextObject }, ?payload )
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }) { 
      EventService.getEvents()
        .then(response => {
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  getters: {
    categoriesLength: state => {
      return state.categories.length;
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
  modules: {}
});

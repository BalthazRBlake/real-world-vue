import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon.vue";

Vue.component("BaseIcon", BaseIcon); //Register the global component ('Name for the App', Imported Component Name)
//It should be declared before new Vue()
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");

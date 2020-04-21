import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import EventCreate from "../views/EventCreate.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/user/:username", //:username Dynamic Segment in the path
    name: "user",
    component: User,
    props: true //The $route.params is set as the component props
  }
];

const router = new VueRouter({
  mode: "history", //Enables Histoty mode. Uses the browser's history (.pushstate API) to change the URL without reloading the page.
  routes
});

export default router;

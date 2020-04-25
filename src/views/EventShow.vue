<template>
  <div>
    <h1>Showing event {{ event.title }}</h1>
    <h2>Showing event {{ event.id }}</h2>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      event: {}
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
};
</script>

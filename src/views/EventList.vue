<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" v-bind:key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        &lArr; Prev page
      </router-link>
    </template>
    &nbsp;|&nbsp;
    <template v-if="eventsTotal > page * 3">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
      >
        Next page &rArr;
      </router-link>
    </template>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["events", "eventsTotal"])
  }
};
</script>

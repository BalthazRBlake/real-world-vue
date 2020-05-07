<template>
  <div>
    <h1>Create an event, {{ userName }}</h1>
    <p>Event created by with id {{ userID }}</p>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    userName: state => state.user.name,
    userID: state => state.user.id,
    categories: state => state.categories
  })
};
</script>

<style></style>

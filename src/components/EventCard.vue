<template>
  <div>
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Beach Cleanup"
    };
  }
};
</script>
<!--scoped makes style to be applied just to this component-->
<style scoped>
h4 {
  color: green;
}
</style>

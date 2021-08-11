<template>
  <h1>{{ myText }}</h1>
  <p>{{ myPtext }}</p>
</template>

<script>
export default {
  name: "HelloVue",
  props: {
    myText: {
      type: String,
      default: "",
    },
    myPtext: {
      type: String,
      default: "",
    }
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
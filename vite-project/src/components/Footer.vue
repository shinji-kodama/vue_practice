<template>
  <h1>{{ myText }}</h1>
</template>

<script>
export default {
  name: "HelloVue",
  props: {
    myText: {
      type: String,
      default: "FOOTER",
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
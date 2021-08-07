<template>
  <div>
    <h2>{{ ListTitle }}</h2>
    <ul v-for="text in ListText">
      <li :key="text.id">{{ text.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ListTitle: {
      type: String,
      default: "",
    },
    ListText: {
      type: Array,
      default: "",
    },
  },
};
</script>

<style scoped></style>

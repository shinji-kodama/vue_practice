<template>
    <p>{{ pText }}</p>
    <p>{{ ppText }}</p>
</template>

<script>
export default {
  name: "P",
  props: {
    pText: {
      type: String,
      default: "",
    },
    ppText: {
      type: String,
      default: "",
    }
  },
};
</script>
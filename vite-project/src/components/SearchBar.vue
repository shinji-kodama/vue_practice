<template>
    <input type="text" :value="value" @change="$emit('change', $event.target.value)">
    <p>{{ value }}</p>
</template>
<script>

export default {
    name: "SearchBar",
    props:["value"],
    mounted() {
        console.log(this.$router);
    },
};


</script>
<style scoped>

label {
  background: #42b983;
  color: #fff;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
    border-radius: 17px
}

input[type="radio"] {
  /* Hide radio buttonns */
  opacity:0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

</style>

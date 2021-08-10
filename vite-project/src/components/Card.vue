<template>
  <div class="box" v-for="question in Questions" :key="question.id">
      <h4 class="title">{{ question.title }}</h4>
      <p class="mark">{{ question.guest }}</p>
      <p class="text">{{ question.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    Questions: {
      type: Array,
      default: "",
    },
  },
};
</script>

<style scoped>

.box{
    width: 30%;
    height: 30vh;
    margin: 10px;
    border-radius: 20px;
    background-color: antiquewhite;
}

.title{
    text-align: center;
    padding: 0 20px;
}

.mark{
  text-align: center;
  border-radius: 20px;
  margin: 0 20px;
  background-color: #41b983;
  color: white;
}

.text{
    padding: 0 20px;
}

</style>

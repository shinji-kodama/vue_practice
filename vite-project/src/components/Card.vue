<template>
  <div class="box" v-for="question in Questions">
      <h4 class="title">{{ question.id }}</h4>
      <p class="text">ここにテキストが入る</p>
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
    border-radius: 20px;
    background-color: antiquewhite;
}

.title{
    padding: 20px;
}

.text{
    padding: 0 20px;
}

</style>

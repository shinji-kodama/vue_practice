<template>
  <div class="box">
    <div class="contents">
      <h1>{{ headerTitle }}</h1>
    </div>
  </div>
</template>

<script>
export default{
    props: {
        headerTitle: {
            type: String,
            default: "",
        },
    },
};
</script>



<style scoped>

.box{
  background-color: #42b983;
}

h1 {
  color: #ffffff;
}
</style>
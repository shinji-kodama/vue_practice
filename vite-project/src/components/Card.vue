<template>
  <div>
    <div>
      <h1>{{ cardTitle }}</h1>
      <img :src="cardImgUrl" alt="image">
    </div>
  </div>
</template>
<script>
export default{
  props: {
    cardTitle:String,
    cardImgUrl:String,
  },
}
</script>


<style scoped>
  div{
    max-width: 300px;
    max-height: 400px;
  }
</style>

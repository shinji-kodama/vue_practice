<template>
    <!-- <div class="card profile">
      <div class="card-content">
      <h4 class="card-title">{{ cardTitle }}</h4>
      <p>{{ cardComment }}</p>
    </div>
   </div> -->

  <div class="profile">
      <h4>{{ cardTitle }}</h4>
      <p>{{ cardComment }}</p>
   </div>
</template>

<script>
export default{
  props: {
    cardTitle:{
      type : String,
      default:""
    },
    cardComment:{
      type : String,
      default:""
    },
  },
}
</script>

<style scoped>
  .profile{
    width: 300px;
    height: 400px;
  }
</style>

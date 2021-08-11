<template>
  <div class="card_size">
      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img src="../assets/index.jpg">
          </div>
          <div class="card-content">
            <p class="card-title">{{ profile.name }}</p>
            <p>{{profile.comment}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    profile:{
      type:Object,
      required: true,
      defalut:{
        id:Number,
        name: String,
        comment:String,
      }
    }
  },
  computed: {
  },
}
</script>

<style scoped>
.card_size{
  max-width: 300px;
  height: auto;
  margin: 0 1%;
}
</style>

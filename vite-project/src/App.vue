<template>
  <div>
    <Navigation/>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components:{
    Navigation,
  },
}
</script>

<style>
body{
  margin:0 auto;
  margin-top: 0px;
  max-width: 960px;
}


</style>

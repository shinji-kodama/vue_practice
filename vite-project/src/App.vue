<template>
  <div>
    <Navigation/>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import { mapMutations } from 'vuex'


export default {
  components:{
    Navigation,
  },
  data(){
    return{
      aaa:[]
    }
  },
  // computed:{
  //   ...mapMutations([" createProfileData "]),
  //   create(){
  //     this.createProfileData
  //   }
  // },
  // mounted: function(){
  //   this.create
  // }
}
</script>

<style>
body{
  margin:0 auto;
  margin-top: 0px;
  max-width: 960px;
}


</style>

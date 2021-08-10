<template>
  <div>
      <CardParts cardTitle="profile.name" cardComment="profile.comment" />
      <div class="profile_card">
        <h4>aaaasss</h4>
        <p>aaaaaaaaaaa</p>
     </div>
  </div>
</template>

<script>
import Card from './CardParts.vue';
import  { mapState } from "vuex";


export default {
  components:{
    Card
  },
  computed: {
    ...mapState(["profiles"]),
    profileArray(){
      return this.profiles
    }
  }
}
</script>

<style scoped>
/* .profile_card{
  widows: 90%;
  margin: 20px auto 0;
  display:flex;
  flex-wrap: wrap;
} */

.profile_card{
  widows: 960px;
  height: 600px;
  margin: 20px auto 0;
  background: pink;
}
</style>

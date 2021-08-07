<template>
  <div class="box">
  <ul>
    <li class="item"><router-link to="/">ホーム</router-link></li>
    <li class="item"><router-link to="/story">Shinji Kodamaの逸話</router-link></li>
    <li class="item"><router-link to="/detail">得意なこと苦手なこと</router-link></li>
    <li class="item"><router-link to="/contact">質問Box</router-link></li>
    <li class="item"><button @click="showInput()">イベントを検索する</button></li>
    <li class="item" v-if="isShow"></li>
    <li class="item" v-else>
      <ul v-for="guestName in guestNames">
        <li @click="sendStore(guestName)" class="filter">{{ guestName }}</li>
      </ul>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    console.log(this.$router);
  },
  computed: {
      ...mapState(["questions"]),
      guestNames(){
        return this.$store.getters.guestNames;
      }
  },
  methods: {
    showInput () {
      this.isShow = !this.isShow;
    },
    sendStore(name){
      this.$store.commit('selectGuest', name);
    }
  },
};
</script>
<style scoped>

li{
    list-style: none;
}

.item{
    margin-top: 16px;
}

.filter{
  display: block;
  text-decoration: none;
  color: #000000;
  padding: 5px;
}

.filter:hover{
  color: #41b983;
}

</style>
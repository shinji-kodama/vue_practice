<template>
  <div class="box">
    <ul>
      <li @click="unShowSearchMenu()" class="item"><router-link to="/">ホーム</router-link></li>
      <li @click="showSearchMenu()" class="item"><router-link to="/contact">イベントを探す</router-link></li>
      <li @click="unShowSearchMenu()" class="item"><router-link to="/story">Shinji Kodamaの逸話</router-link></li>
      <li @click="unShowSearchMenu()" class="item"><router-link to="/detail">おすすめ映画一覧</router-link></li>
    </ul>
    <div v-if="isShow">
      <Search :SelectName="selectName" @input="setSearchName" class="search" />
      <ul v-for="guestName in guestNames" :key="guestName.id">
          <li @click="sendStore(guestName)" class="filter">{{ guestName }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";

import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Search,
  },
  data() {
    return {
      selectName: "",
      isShow: false,
    };
  },
  computed: {
      ...mapState(["questions"]),
      
      guestNames(){
        return this.$store.getters.guestNames;
      },
  },
  methods: {
    ...mapMutations(["selectGuest"]),

    sendStore(name){
      this.selectName = name;
      this.selectGuest(name);
      console.log(this.guestName)
    },
    setSearchName(e){
      this.selectGuest(e.target.value);
    },
    showSearchMenu(){
      this.isShow = true;
    },
    unShowSearchMenu(){
      this.isShow = false;
    },

  },
};
</script>
<style scoped>

li{
    list-style: none;
}

.item{
    margin-top: 16px;
    text-align: left;
}

.search{
  margin-left: 40px;
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
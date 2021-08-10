<template>
  <div>
    <Header headerTitle="Shinji Kodamaとは何者か？その真相に迫る" />
    <div class="main">
      <Nav class="nav" />
      <div class="pages">
        <router-view />
      </div>
  </div>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
    Header,
  },
  data(){
    return {
      text: "v-bindで渡す",
      ListText: [
        {
          text: "リストデータ"
        },
        {
          text: "リスト内容"
        },
      ],
    }
  },
  methods: {
    changeText(){
      this.text = Math.random() * 10;
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main{
  display: flex;
}

.nav{
    width: 30%;
    height: 70vh;
    padding-top: 10px;
    text-align: left;
}

.pages{
    width: 70%;
    height: 70vh;
    padding: 10px;
    text-align: left;
}
</style>

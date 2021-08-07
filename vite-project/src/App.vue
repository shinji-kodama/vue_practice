<template>
  <Header />
  <router-view />
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <Footer />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    HelloWorld,
    Header,
    Footer
  },
  data() {
    return {
      text: "hogehoge",
    };
  },
  methods: {
    changeText() {
      this.text = Math.random() * 10;
    },
    minus() {
      this.text = Number(this.text) - 1;
    },
  },
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
</style>

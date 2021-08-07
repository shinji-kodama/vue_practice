<template>
  {{ picsInfo }}
  <h1>{{ hoge }}</h1>
  <input type="text" v-model="inputText" />
  <button @click="change">change</button>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
import { mapState, mapMutations } from "vuex";
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
      inputText:'',
    };
  },
  computed: {
    ...mapState(["picsInfo","hoge"]),
  },
  methods: {
    ...mapMutations(["changeHoge"]),
    change() {
      this.changeHoge(this.inputText);
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
  margin-top: 60px;
}
</style>

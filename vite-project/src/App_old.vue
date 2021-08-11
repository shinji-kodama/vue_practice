<template>
  <H2 />
  <P
    pText="ababababa"
    v-bind:ppText=textP
  />
  <HelloVue
    myText="Hogeeeee"
    myPtext="AAA"
  />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <button @click="changeText">change</button>
</template>

<script>
import HelloWorld from "./components/old/HelloWorld.vue";
import HelloVue from "./components/old/HelloVue.vue";
import H2 from "./components/old/H2.vue";
import P from "./components/old/P.vue";

export default {
  components: {
    HelloWorld,
    HelloVue,
    H2,
    P,
  },
  data() {
    return {
      text: "hogehoge",
      textP: "barbar",
    };
  },
  methods: {
    changeText() {
      this.textP = Math.random() * 10;
    },
  },
}
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

<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import HelloVue from "./components/HelloVue.vue";
// import H2 from "./components/H2.vue";
// import P from "./components/P.vue";

export default {
  components: {
    Nav,
    // HelloWorld,
    // HelloVue,
    // H2,
    // P,
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
    minus() {
      this.text = Number(this.text - 1);
    }
  },
  mounted(){
    var firebaseConfig = {
        apiKey: "AIzaSyApIYJ-VOv5OIIgCorF5OrJngewgn85LQU",
        authDomain: "gslab11-aa564.firebaseapp.com",
        databaseURL: "https://gslab11-aa564-default-rtdb.firebaseio.com",
        projectId: "gslab11-aa564",
        storageBucket: "gslab11-aa564.appspot.com",
        messagingSenderId: "209017578737",
        appId: "1:209017578737:web:52d13f0f23763807a57550"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
  }
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
button + button {
  margin-left: 16px;
}
</style>

<template>
<div class="wrapper">
  <div class="container">
    <div class="message">
      <h1>INTO THE WILD</h1>
    </div>
  </div>

  <div class="message-wrapper">

    <div class="message-container">
      <div class="title">
        <h2>hogehoge</h2>
      </div>
      <div class="text">
        <p>hogehoge</p>
      </div>
    </div>

    <div class="message-container">
      <div class="title">
        <h2>hogehoge</h2>
      </div>
      <div class="text">
        <p>hogehoge</p>
      </div>
    </div>

    <div class="message-container">
      <div class="title">
        <h2>hogehoge</h2>
      </div>
      <div class="text">
        <p>hogehoge</p>
      </div>
    </div>

  </div>
  
</div>

</template>

<script>
import { mapState, mapMutations } from "vuex";


export default {
  components: {
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

<style scoped>

.container {
    background-image: url(./assets/topmain.jpeg);
    height: 102.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.message-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message-container {
    height: 33%;
}

.message {
  font-size: 3rem;
  color:#ff1c8e
}

.title {
    font-size: 2rem;
    color: #42b983;
}


</style>

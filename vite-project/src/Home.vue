<template>
<div>
  <h2>はじめに</h2>
  <p>
  このサイトでは主にShinji Kodamaとは何者かという点について触れる。<br>
  その真相について探求するのはあまり効率の良いことではないと皆さんは思うでしょう。<br>
  しかし、結論から申し上げるとG'sで学ぶ上でこの事柄について知ることが非常に大切であり、<br>
  短期的生産性と長期的生産性のトレードオフであると言えます。<br>
  </p>
  <List :ListTitle="title" :ListText="lists"/>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import List from "./components/List.vue";

export default {
    components: {
        List,
    },
  data() {
      return{
          title: "想定読者",
          lists: [
              {
                  text: "G's LAB11期に所属しておりプログラミング力を爆上げしたいと思う方"
              },
                            {
                  text: "paizaのAランク以上を解きたい方"
              },
                            {
                  text: "なんかよく分からない時に、Shinjiさんヘルプ！と叫びたい方"
              }
          ]
      }
  },
  computed: {
    ...mapState(["hoge"]),
  },
  methods: {
    ...mapMutations(["changeHoge"]),
    change() {
      this.changeHoge(this.inputText);
    },
  },
};
</script>



<style scoped>
h1 {
  color: #42b983;
}
</style>
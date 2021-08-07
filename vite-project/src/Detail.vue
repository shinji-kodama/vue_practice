<template>
<div>
  <List :ListTitle="title1" :ListText="lists1"/>
  <List :ListTitle="title2" :ListText="lists2"/>
</div>
</template>

<script>
import List from "./components/List.vue";

export default {
    components: {
        List,
    },
  data() {
      return{
          title1: "得意なこと",
          title2: "苦手なこと",
          lists1: [
              {
                  text: "map/reduceでpaizaを叩きのめすこと"
              },
                            {
                  text: "非常に複雑かつわかりにくいことをわかり易く教えること"
              },
                            {
                  text: "夜更かしからの早起き"
              }
          ],
          lists2: [
              {
                  text: "味の濃い食べ物（当社調べ）"
              },
                            {
                  text: "若者言葉（当社調べ）"
              },
                            {
                  text: "早寝早起き（当社調べ）"
              }
          ]
      }
  },
};
</script>



<style scoped>
h1 {
  color: #42b983;
}
</style>
<template>
  <div>
    <List :ListTitle="title1" :ListText="lists1" />
    <List :ListTitle="title2" :ListText="lists2" />
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  components: {
    List,
  },
  data() {
    return {
      title1: "在学中の逸話",
      title2: "その他の素性",
      lists1: [
        {
          text: "課題の一切を無視してゲームを制作してくるという噂が・・・",
        },
        {
          text: "その知識の深さからすでに卒業しているという疑惑が・・・",
        },
        {
          text: "Googleの許しも得ず、勝手に拡張機能を製作したというハッカー気質が・・・",
        },
      ],
      lists2: [
        {
          text: "地元の国公立より偏差値の高いところという理由で東工大を受験。合格。",
        },
        {
          text: "インドア派を謳いながら20年以上サッカーをプレー。通学は自転車という矛盾。",
        },
        {
          text: "鉄を合成して作れる",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>

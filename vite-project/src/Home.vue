<template>
    <h1>{{ hoge }}</h1>
    <p>{{ inputText }}</p>
    <div>
      indicate:true
      <p v-for="msg in msgs">
        {{ msg.id }}. あだ名: {{ msg.name }} ，生き甲斐：{{ msg.hobby }}
        <span v-on:click="changeIdc(msg.id)">非公開にする</span>
      </p>
    </div>
    <div>
      indicate:false
      <p v-for="msg in hiddenMsgs">
        {{ msg.id }}. あだ名: {{ msg.name }} ，生き甲斐：非公開
        <span v-on:click="changeIdc(msg.id)">公開する</span>
      </p>
    </div>
    <input type="text" v-model="inputText" />
    <button v-on:click="change(hoge, inputText)">change</button>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      inputText: "初期値",
    };
  },
  computed: {
    ...mapState({
      b: state => state.b
    }),
    msgs(){
      return this.$store.getters.selectMsgs
    },
    hiddenMsgs(){
      return this.$store.getters.hiddenMsgs
    }
  },
  methods: {
    ...mapMutations(["changeHoge"]),
    ...mapMutations(["changeIndicate"]),
    
    change(str1, str2){
      this.changeHoge(this.inputText);
      console.log('changed ' + str1 + ' to ' + str2 )
    },
    changeIdc(msgId){
      this.changeIndicate(msgId)
      console.log('id=' + msgId + 'の公開設定を変更しました')
    }
  },
};
</script>

<style scoped>
 div {
   border: 1px solid
 }

 span {
   border: 1px solid;
   margin-left:9px;
   cursor: pointer;
 }
</style>
<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link v-for="msg in msgs" :key="msg.id" to="/foo" v-on:click="passId(msg.id)">{{ msg.name }}</router-link>
    <router-link to="/foo">foo</router-link>
    <router-link to="/aha">aha</router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    msgs(){
      return this.$store.getters.selectMsgs
    }
  },
  methods: {
    ...mapMutations(['showIntro']),

    passId(msgId){
      this.showIntro(msgId)
      console.log(msgId)
    }
  },
  mounted() {
    console.log(this.$router);
  },
};
</script>

<style scoped>
a + a {
  margin-left: 24px;
}
</style>
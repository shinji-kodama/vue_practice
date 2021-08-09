<template>
  <div>
    <h1>Fooです</h1>
    <div v-for="intro in intros" :key="intro.id">
      <p>
        名前：{{ intro.name }} <br>
        生き甲斐：{{ intro.hobby }} <br>
        鳴き声：{{ intro.txt }}
      </p>
      <img v-bind:src="getImg(intro.id)" alt="" />
    </div>
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['selectIntro']),

    intros(){
      return this.selectIntro
    },
    // intros(){
    //   return this.$store.getters.selectIntro
    // },
  },
  methods: {
    getImg(introId){
      return ('./public/' + this.intros.find(intro => intro.id == introId).img)
    }
  },
};
</script>
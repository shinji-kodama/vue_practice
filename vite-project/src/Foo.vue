<template>
  <div>
    <h1>Fooです</h1>
    <p v-for="intro in intros">
      名前：{{ intro.name }} <br>
      生き甲斐：{{ intro.hobby }} <br>
      鳴き声：{{ intro.txt }}
    </p>
    <img :src="intro.img" alt="" />
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  computed: {
    intros(){
      return this.$store.getters.selectIntro
    },
    // imgs(){
    //   return this.$store.getters.showImg
    // }
  },
  methods: {
  },
};
</script>
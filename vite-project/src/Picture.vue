<template>
  {{ picsInfo }}
<div class="wrapper">
  <div class="container">
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
    ...mapState(["picsInfo"]),
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
    height: 100vh;
}

</style>

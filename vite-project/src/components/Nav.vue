<template>
  <div class="box">
  <ul>
    <li class="item"><router-link to="/">ホーム</router-link></li>
    <li class="item"><router-link to="/story">Shinji Kodamaの逸話</router-link></li>
    <li class="item"><router-link to="/detail">得意なこと苦手なこと</router-link></li>
    <li class="item"><router-link to="/contact">質問Box</router-link></li>
    <li class="item"><button @click="showInput()">イベントを検索する</button></li>
    <li class="item" v-if="isShow"></li>
    <li class="item" v-else>
      <ul v-for="question in questions">
        <a href="/">{{ question.guest }}</a>
      </ul>
    </li>
  </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    console.log(this.$router);
  },
  computed: {
      ...mapState(["questions"]),
  },
  methods: {
    showInput () {
      this.isShow = !this.isShow;
    }
  },
};
</script>
<style scoped>

li{
    list-style: none;
}

.item{
    margin-top: 16px;
}

</style>
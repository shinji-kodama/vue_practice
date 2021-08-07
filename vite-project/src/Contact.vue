<template>
  <div>
    <List :ListTitle="title" :ListText="lists" />
    <Card Questions="questions" />
  </div>
</template>

<script>
import List from "./components/List.vue";
import Card from "./components/Card.vue";

import { mapState } from "vuex";

export default {
  components: {
    List,
    Card,
  },
  data() {
    return {
      title: "ファンレター送付の方法",
      lists: [
        {
          text: "基本discordに住んでいるのでそこで直接メッセ",
        },
        {
          text: "slackのDM",
        },
      ],
    };
  },
  computed: {
      ...mapState(["questions"]),
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>

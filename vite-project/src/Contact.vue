<template>
  <div>
    <div class="box">
    <Card :Questions="filterdGuests(getName)" />
    </div>
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
    };
  },
  computed: {
      ...mapState(["questions"]),
      ...mapState(["guestName"]),

      filterdGuests(){
          return this.$store.getters.filterdGuests;
      },

      getName(){
        return this.$store.state.guestName;
      }
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}

.box{
  display: flex;
  flex-wrap: wrap;
}
</style>

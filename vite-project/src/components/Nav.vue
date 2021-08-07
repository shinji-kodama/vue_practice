<template>
  <div class="box">
  <ul>
    <li class="item"><router-link to="/">ホーム</router-link></li>
    <li class="item"><router-link to="/story">Shinji Kodamaの逸話</router-link></li>
    <li class="item"><router-link to="/detail">得意なこと苦手なこと</router-link></li>
    <li class="item"><router-link to="/contact">ファンレター送付先</router-link></li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$router);
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
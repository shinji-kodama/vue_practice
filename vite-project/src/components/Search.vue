<template>
    <li class="item">
      <label>絞り込み</label><br>
      <input v-model="searchName" type="text"><br>
      {{ searchName }}
    </li>
</template>

<script>
export default {
  data() {
    return {
      searchName: "",
    };
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
<template>
    <li class="item">
      <label>絞り込み</label><br>
      <input type="text" :value="SelectName"><br>
    </li>
</template>

<script>

export default {
  props: {
    SelectName: {
      type: String,
      default: "",
    },
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
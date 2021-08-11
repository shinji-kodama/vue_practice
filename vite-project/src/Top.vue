<template>
  <div class="card_flex">
    <Card v-for="profileObj in profileArrays" :profile="profileObj" :key="profileObj.id" />
  </div>
  <PageNationBar :page="page" :total-page="totalPage" @change="onPageChange" />
</template>

<script>
import Card from './components/Card.vue';
import PageNationBar from "./components/PageNationBar.vue";
import { mapState } from "vuex";
import { toRefs, reactive, computed } from 'vue'

export default {
  components: {
    Card,
    PageNationBar,
  },
  data() {
    const perPage = 10
    const datas = reactive({
      page: 1, // 現在のページ
      perPage, // 1ページごとのデータ表示数
      totalPage: Math.ceil(100 / perPage) // perPageに基づいたページ総数
    })
    const onPageChange = (page) => {
      datas.page = page
    }
    return {
      datas,
      onPageChange,
      ...toRefs(datas)
    }
  },

  computed: {
    ...mapState(["profiles"]),
    profileArrays(){
      return  this.profiles.slice((this.datas.page - 1) * this.datas.perPage, this.datas.page * this.datas.perPage)
    }
  }
}
</script>

<style scoped>
  .card_flex {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }
</style>

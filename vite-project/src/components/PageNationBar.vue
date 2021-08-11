<template>
  <div class="pagination">
    <a
      class="prev"
      :href="`?page=${prevPage}`"
      @click.prevent="onPrev"
      v-show="currentPage > 1"
    >
      &lt; 前へ
    </a>
    <div class="total">ページ {{ currentPage }}/{{ totalPage }}</div>
    <a
      class="next"
      :href="`?page=${nextPage}`"
      @click.prevent="onNext"
      v-show="currentPage < totalPage"
    >
      &gt; 次へ
    </a>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
export default defineComponent ({
  props: {
    page: {
      default: 0,
      type: Number
    },
    totalPage: {
      default: 0,
      type: Number
    }
  },
  setup(props, ctx) {
    const currentPage = ref(props.page)
    const prevPage = computed(() => Math.max(currentPage.value - 1, 1))
    const nextPage = computed(() => Math.min(currentPage.value + 1, props.totalPage))

    const onPrev = () => {
      currentPage.value = Math.max(currentPage.value - 1, 1)
      ctx.emit('change', currentPage)
    }
    const onNext = () => {
      currentPage.value = Math.min(currentPage.value + 1, props.totalPage)
      ctx.emit('change', currentPage)
    }

    return {
      currentPage,
      prevPage,
      nextPage,
      onNext,
      onPrev
    }
  }
})
</script>

<style scoped>
.pagination {
  text-align: center;
}

.pagination * {
  display: inline;
}

a {
  border: 0;
  background: none;
  font-size: initial;
  margin: 0 1rem;
}
</style>

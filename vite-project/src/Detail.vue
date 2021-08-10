<template>
  <div>
      <div class="box">
    <div v-for="movie in movies" :key="movie.id" class="card">
      <img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path">
      <div class="title">{{ movie.title }}</div>
    </div>
  </div>
      </div>
</template>

<script>
export default {
  computed: {
    movies: function () {
      return this.$store.state.movies;
    },
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
};
</script>

<style scoped>

.box{
    display: flex;
    flex-wrap: wrap;
}

.card{
    width: 20%;
    margin: 5px;
}

.card img{
    width: 100%;
}
</style>

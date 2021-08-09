<template>
<div class="wrapper">
    <div class="category-nav">
      <!-- <Button buttonTitle="All" buttonValue="" v-model="category" />
      <Button buttonTitle="Jimmy" buttonValue="Jimmy" v-model="category" />
      <Button buttonTitle="Renan" buttonValue="Renan" />
      <Button buttonTitle="Takemi" buttonValue="Takemi" /> -->
        <label>
            <input type="radio" v-model="category" value="">All
        </label>
        <label>
            <input type="radio" v-model="category" value="Jimmy">Jimmy
        </label>
        <label>
            <input type="radio" v-model="category" value="Renan">Renan
        </label>
        <label>
            <input type="radio" v-model="category" value="Takemi">Takemi
        </label>
    </div>
    <div class="search-bar">
      <input type="text" v-model="category">
    </div>
  <div class="container">
      <ul class="category-list">
          <li v-for="(image, index) in filterByCategory">
              <img :src="image.src" alt="">
          </li>
      </ul>
  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Button from "./components/Button.vue";

export default {
  components: {
    Button,

  },
  data() {
    return {
    category:'',
    buttonTitle:'hoge',
    buttonValue:'hogehoge'

    };
  },
  computed: {
    ...mapState(['images']),
    //storeからimagesを取得してcomputedで操作
    filterByCategory(){
        return this.images.filter( (image) => !image.category.indexOf(this.category))
    }
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

.category-nav {
    position: absolute;
    top: 15%;
    left: 40%;
}

.category-nav label {
  background: #42b983;
  color: #fff;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
    border-radius: 17px
}
.category-nav input[type="radio"] {
  /* Hide radio buttonns */
  opacity:0;
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
}

.search-bar {
    position: absolute;
    top: 20%;
    left: 45%;
    width: 150px;
}

input[type="text"] {
    height: 20px;
    border-radius: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border: 2px solid #42b983;
    color: #42b983;
    font-weight: 600;
}


.category-list[data-v-6958b615] {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    position: absolute;
    top: 30%;
    /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
}

/* .category-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
} */

.category-list img[data-v-6958b615] {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

/* .category-list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

li {
    list-style: none;
}

/* img {
    max-width: 100%;
    width: 200px;
    height: 200px;
    object-fit: cover;
} */
.container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>

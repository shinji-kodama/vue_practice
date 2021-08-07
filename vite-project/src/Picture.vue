<template>
<div class="wrapper">
    <div class="category-nav">
        <label>
            <input type="radio" v-model="category" value="">All
        </label>
        <label>
            <input type="radio" v-model="category" value="Jimmy">Jimmy
        </label>
        <label>
            <input type="radio" v-model="category" value="Renan">Renan
        </label>
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

export default {
  components: {

  },
  data() {
    return {
    category:'',
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
    left: 45%;
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

.category-list {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.category-list img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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

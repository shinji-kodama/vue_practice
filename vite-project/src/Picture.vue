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
        <!-- <div v-for="pic in picsInfo"> -->
          <!-- <div class="image-container">
              <img src="./assets/topmain.jpeg" alt=""> -->
              <!-- <img :src="pic.img" alt=""> -->
          <!-- </div>
          <p>{{ pic.title }}</p>
          <p>{{ pic.text }}</p> -->
        <!-- </div> -->
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
    images:[
        {
            index:1,
            src:'../public/jimmy_01.jpeg',
            category:'Jimmy'

        },
        {
            index:2,
            src:'../public/jimmy_02.jpeg',
            category:'Jimmy'

        },
        {
            index:3,
            src:'../public/jimmy_03.jpeg',
            category:'Jimmy'

        },
        {
            index:4,
            src:'../public/jimmy_04.jpeg',
            category:'Jimmy'

        },
        {
            index:5,
            src:'../public/jimmy_05.jpeg',
            category:'Jimmy'

        },
        {
            index:6,
            src:'../public/renan_01.jpeg',
            category:'Renan'

        },
        {
            index:7,
            src:'../public/renan_02.jpeg',
            category:'Renan'

        },
        {
            index:8,
            src:'../public/renan_03.jpeg',
            category:'Renan'

        },
        {
            index:9,
            src:'../public/renan_04.jpeg',
            category:'Renan'

        },
        {
            index:10,
            src:'../public/renan_05.jpeg',
            category:'Renan'

        },
    ], 
    text: "hogehoge",
    inputText:'',
    };
  },
  computed: {
    // ...mapState(["picsInfo"]),
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

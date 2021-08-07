<template>
  <div class="header">
      <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/picture">Picture</router-link></li>
      </ul>
  </div>
</template>
<script>

export default {
    name: "Header",
    props: {
        myText: {
            type: String,
            default: "HEADER",
            },
    },
    mounted() {
        console.log(this.$router);
    },
};


</script>
<style scoped>

.header {
    margin: 4rem 3rem 4rem 3rem;
    position: absolute;
}

a {
    text-decoration: none;
    font-size: 1.4rem;
    color: #2c3e50;
    font-weight: 600;
}


a + a {
  margin-left: 16px;
}

h1 {
  color: #42b983;
}

ul {
    display: flex;
    justify-content: flex-start;
}

li {
    margin-left: 20px;
    list-style: none;
}
</style>

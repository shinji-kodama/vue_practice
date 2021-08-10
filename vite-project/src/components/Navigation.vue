<template>
<nav>
  <div class="nav-wrapper">
    <ul class="hide-on-med-and-down">
    <li><router-link to="/">Top</router-link></li>
    <li><router-link to="/create">Create</router-link></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  mounted(){
    console.log(this.$router)
  }

}
</script>


<style scoped>
  nav{
    background-color: yellowgreen;
  }
  ul{
    text-align: center;
  }
  a{
    margin:0 30px;
    text-decoration: none;
  }
</style>

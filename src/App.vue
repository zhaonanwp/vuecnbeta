<template>
  <div id="app">
    <div class="logo">
      <img class="logo" alt="Vue logo" src="./assets/logo.png">
      <span>cnbeta</span>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
}
.logo{
  height:30px;
}

a{
   color: #036;
}
</style>

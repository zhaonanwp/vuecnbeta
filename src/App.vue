<template>
  <div id="app">
    <div class="header">
      <a v-on:click="goBack">back</a>
    </div>
    <div class="container">
    <keep-alive include="HelloWorld">
        <router-view ></router-view>
    </keep-alive>
    
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
}
a{
  color: #036;
}
.header{
  display: fixed;
}
</style>

<template>
  <div id="app">
    <div class="container">
        <keep-alive include="HelloWorld">
          <router-view></router-view>
        </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
}
a {
  color: #036;
}
.header {
  position: fixed;
  height: 30px;
  z-index: 9999;
  width: 100%;
  margin-top: -20px;
  text-align: left;
  color: white;
  font-size: 25px;
  padding-top: 5px;
  max-width: 600px;
}
</style>

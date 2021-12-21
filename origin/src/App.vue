
<template>
  <div id="app">
    <div id="nav"><!-- 主应用 -->
      <router-link to="/home">origin</router-link> |
      <router-link to="/about">origin-about</router-link> |
      <router-link to="son#x/home">son</router-link> |
      <router-link to="son#/about">son-about</router-link>
      <button @click="test">测试</button>
    </div>
    <router-view/>
    <!-- 子应用容器 -->
    <div id = "microApp">
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    test(){
      this.$router.push({path: "/son/home"});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
#nav {
  padding: 30px;
}
 
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
 
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>


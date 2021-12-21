
/* eslint-disable */
<template>
  <!-- <div>
    <div id="nav">
      <router-link to="/home">origin</router-link> |
      <router-link to="/about">origin-about</router-link> |
      <router-link to="son#/home">son</router-link> |
      <router-link to="son#/about">son-about</router-link>
      <button @click="test">测试</button>
    </div>
    <router-view/>
    <div id="microApp">
    </div>
  </div> -->
<el-container style="height: 100%; border: 1px solid #eee">
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </el-header>
  <el-container>

    <el-aside width="200px" style="background-color: #FFF;">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <el-menu-item @click="test('/son#/home')" index="1-1">打开App2-Home</el-menu-item>
            <el-menu-item @click="test('/son#/about')" index="1-2">打开App2-About</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item @click="test('/operation/home')" index="1-3">打开App1-Home</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>  
    </el-aside>

    <el-main>
      <router-view id="base" />
      <div id="microApp"></div>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
// import { single } from "@/single-spa-config";
export default {
  name: "Operation",
  methods: {
    test(uri){
      this.$router.push({path: uri});
    }
  },
  mounted(){
    // single();
  }
}
</script>

<style scoped>
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

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
#microApp {
  background-color: #fff;
}
#base {
  background-color: #fff;
}
/deep/ .el-main {
  background-color: #fff;
  padding: 20px !important;
  margin: 15px !important;
}
</style>


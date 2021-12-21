<template>
  <div id="app" class="app">
    <!-- <router-view /> -->
    <keep-alive name="main" :include="'Operation'"><router-view /></keep-alive>
  </div>
</template>
<style>
#app {
  min-width: 1280px;
  height: 100%;
  background-color: #f0f2f5;
}
</style>

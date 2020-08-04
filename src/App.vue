<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from 'components/navbar/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>

<template>
  <div id="app">
    <nav-bar ref="navbar"/>
    <scroll-line />
    <router-view />
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar";
import ScrollLine from "@/components/scroll/ScrollLine";

export default {
  name: "App",
  components: {
    ScrollLine,
    NavBar,
  },
  updated() {
    this.$refs['navbar'].alwaysShow = !this.$route.path.includes('/index')
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>

<template>
  <div id="app">
    <nav-bar ref="navbar"/>
    <scroll-line />
    <router-view />
  </div>
</template>

<script>
import NavBar from "components/navbar/NavBar"
import ScrollLine from "@/components/scroll/ScrollLine"
import hljs from 'highlight.js'
window.hljs = hljs

export default {
  name: "App",
  components: {
    ScrollLine,
    NavBar,
  },
  computed: {
    path() {
      return this.$route.path
    }
  },
  watch: {
    path(val) {
      if (val.indexOf('/index') !== -1) {
        this.$refs.navbar.disappearPage()
      } else {
        this.$refs.navbar.undisappearPage()
      }
    }
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>

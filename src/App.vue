<template>
  <div id="app">
    <nav-bar :always-show="navAlwaysShow"/>
    <scroll-line/>
    <router-view/>
  </div>
</template>

<script>

  import NavBar from 'components/navbar/NavBar'
  import ScrollLine from '@/components/scroll/ScrollLine'

  export default {
    name: 'App',
    components: {
      ScrollLine,
      NavBar
    },
    computed: {
      navAlwaysShow() {
        return !this.$route.path.includes('/index')
      }
    },
    mounted() {
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>

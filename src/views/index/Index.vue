<template>
  <div class="index">
    <index-cover/>
    <avatar/>
    <wave/>
    <div class="container">
      <welcome/>
      <dash/>
      <discovery/>
      <blog-footer/>
    </div>
  </div>
</template>

<script>
  import IndexCover from '@/views/index/IndexCover'
  import Avatar from '@/views/index/Avatar'
  import Wave from '@/views/index/Wave'
  import Welcome from '@/views/index/Welcome'
  import Dash from '@/views/index/Dash'
  import Discovery from '@/views/index/Discovery'
  import BlogFooter from '@/components/footer/BlogFooter'

  export default {
    name: "Index",
    components: {
      BlogFooter,
      Discovery,
      IndexCover,
      Avatar,
      Wave,
      Welcome,
      Dash
    }
  }
</script>

<style scoped>

  div.container {
    width: 800px;
    margin: 0 auto;
  }
</style>
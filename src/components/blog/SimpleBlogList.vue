<template>
  <div class="simple-blog-list">
    <simple-blog-item v-for="(blog, index) in blogs" :key="index" :blog="blog"/>
  </div>
</template>

<script>
  import SimpleBlogItem from '@/components/blog/SimpleBlogItem'
  export default {
    name: "SimpleBlogList",
    components: {SimpleBlogItem},
    props: {
      blogs: Array
    }
  }
</script>

<style lang="less" scoped>


</style>
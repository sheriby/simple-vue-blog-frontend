<template>
  <div id="blog-comment">
    <comment-list :comments="comments"/>
    <comment-form/>
  </div>
</template>

<script>
  import CommentList from '@/components/comment/CommentList'
  import CommentForm from '@/components/comment/CommentForm'
  export default {
    name: "BlogComment",
    components: {CommentForm, CommentList},
    props: {
      comments: Array
    }
  }
</script>

<style lang="less" scoped>

  div#blog-comment {
    margin: 60px 0;
  }
</style>
<template>
  <div class="message-board">
    <cover cover="https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg">
      <h2 class="header" slot="cover-content">留言板</h2>
    </cover>
    <div class="container">
      <div class="poem-container">
        <poem/>
      </div>
      <comment-list/>
      <comment-form/>
      <detail-footer/>
    </div>
  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'
  import DetailFooter from '@/components/footer/DetailFooter'
  import Poem from '@/views/messageboard/Poem'
  import CommentForm from '@/components/comment/CommentForm'
  import CommentList from '@/components/comment/CommentList'
  export default {
    name: "MessageBoard",
    components: {CommentList, CommentForm, Poem, DetailFooter, Cover}
  }
</script>

<style lang="less" scoped>

  h2.header {
    font-size: 50px;
    color: #ffffff;
    text-shadow: rgba(0, 0, 0) 2px 2px 10px;
    letter-spacing: 7px;
    text-align: center;
    padding-top: 200px;
  }

  div.container {
    max-width: 65%;
    margin: 80px auto 0;
  }

  div.poem-container {
    max-width: 85%;
    margin: 0 auto;
  }

</style>
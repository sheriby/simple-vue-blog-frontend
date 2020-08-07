<template>
  <div id="comment-list">
    <div class="top">
      <span class="comment">Comments |</span>
      <span class="size"> {{commentSize}} 条评论</span>
    </div>
    <div class="comment-container">
      <comment-reply-item v-for="(comment, index) in comments" :key="index" :comment="comment"/>
    </div>
  </div>
</template>

<script>
  import CommentReplyItem from '@/components/comment/CommentReplyItem'
  export default {
    name: "CommentList",
    components: {CommentReplyItem},
    props: {
      comments: Array
    },
    computed: {
      commentSize() {
        return this.comments.length
      }
    },
  }
</script>

<style lang="less" scoped>

  div#comment-list {
    .top {
      color: #999999;
      padding: 10px;
      border-bottom: #cfcfcf 1px dashed;
      .comment {
        font-size: 18px;
        font-family: serif;
      }
      .size {
        font-size: 13px;
      }
    }

    div.comment-container {
      margin: 40px 0;
    }
  }
</style>
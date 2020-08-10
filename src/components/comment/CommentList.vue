<template>
  <div id="comment-list" v-if="commentNotEmpty">
    <div class="top">
      <span class="comment">Comments |</span>
      <span class="size"> {{commentCount}} 条评论</span>
    </div>
    <div class="comment-container">
      <comment-reply-item v-for="(comment, index) in comments" :key="index" :comment="comment" @reply="reply"/>
    </div>
  </div>
</template>

<script>
  import CommentReplyItem from '@/components/comment/CommentReplyItem'
  export default {
    name: "CommentList",
    components: {CommentReplyItem},
    props: {
      comments: Array,
      commentCount: Number
    },
    computed: {
      commentNotEmpty() {
        return this.comments !== null && this.comments !== undefined && this.comments.length != 0
      }
    },
    methods: {
      reply(data) {
        this.$emit('reply', data)
      }
    }
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
<template>
  <div class="comment-reply-item">
    <div class="main-comment">
      <comment-item :comment="comment" @reply="reply"/>
    </div>
    <div v-if="replyNotEmpty" class="reply-comment">
      <comment-item v-for="(item, index) in comment.childs" :key="index" :comment="item" @reply="reply"/>
    </div>
  </div>
</template>

<script>
  import CommentItem from '@/components/comment/CommentItem'
  export default {
    name: "CommentReplyItem",
    components: {CommentItem},
    props: {
      comment: Object
    },
    computed:{
      replyNotEmpty() {
        const reply = this.comment.childs
        return reply !== undefined && reply !== null && reply.length !== 0
      }
    },
    methods: {
      reply(data) {
        data.id = this.comment.id
        this.$emit('reply', data)
      }
    }
  }
</script>

<style lang="less" scoped>
  div.reply-comment {
    padding-left: 50px;
  }
</style>
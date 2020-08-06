<template>
  <div class="comment-reply-item">
    <div class="main-comment">
      <comment-item :name="comment.name" :qq="comment.qq"
                    :date="comment.date" :content="comment.content"/>
    </div>
    <div v-if="replyNotEmpty" class="reply-comment">
      <comment-item v-for="(item, index) in comment.reply" :key="index" :name="item.name"
      :qq="item.qq" :date="item.date" :content="item.content" :at="item.at"/>
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
        const reply = this.comment.reply
        return reply !== undefined && reply !== null && reply.length !== 0
      }
    }
  }
</script>

<style lang="less" scoped>
  div.reply-comment {
    padding-left: 50px;
  }
</style>
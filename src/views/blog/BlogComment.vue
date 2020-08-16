<template>
  <div id="blog-comment">
    <comment-list :comments="comments" :commentCount="commentCount" @reply="reply"/>
    <div class="form">
      <comment-form ref="form" :blogId="blogId" @submit="submit"/>
    </div>
  </div>
</template>

<script>
  import CommentList from '@/components/comment/CommentList'
  import CommentForm from '@/components/comment/CommentForm'
  import {postComment} from '../../network/comment'

  export default {
    name: "BlogComment",
    components: {CommentForm, CommentList},
    props: {
      blogId: Number,
      comments: Array,
      commentCount: Number
    },
    data() {
      return {
        replyInfo: {}
      }
    },
    methods: {
      reply(data) {
        const form = document.querySelector('div.form')
        form.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })

        // this.$refs.form.comment.at = data.name
        this.$set(this.$refs.form.comment, 'at', data.name)
        this.$refs.form.comment.parentId = data.id
      },
      submit(comment) {
        postComment(comment).then(res => {
          this.$parent.$parent.$parent.refreshComment()
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  div#blog-comment {
    margin: 60px 0;
  }
</style>
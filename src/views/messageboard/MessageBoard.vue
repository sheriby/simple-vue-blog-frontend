<template>
  <div class="message-board">
    <cover cover="https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg">
      <h2 class="header" slot="cover-content">留言板</h2>
    </cover>
    <div class="container">
      <div class="poem-container">
        <poem/>
      </div>
      <comment-list :comments="messages" :commentCount="count" @reply="reply" />
      <div class="form">
        <comment-form ref="form" @submit="submit"/>
      </div>
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
  import {getMessage, postMessage} from '../../network/message'
  export default {
    name: "MessageBoard",
    components: {CommentList, CommentForm, Poem, DetailFooter, Cover},
    data() {
      return {
        messages: [],
        count: 0
      }
    },
    created() {
      this.refreshMessage()
    },
    methods: {
      reply(data) {
        console.log(data)
        const form = document.querySelector('div.form')
        form.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })

        this.$refs.form.comment.at = data.name
        this.$refs.form.comment.parentId = data.id
      },
      refreshMessage() {
        getMessage().then(res => {
          this.messages = res.data.messages
          this.count = res.data.count
        }).catch(err => {
          console.log(err)
        })
      },
      submit(comment) {
        postMessage(comment).then(res => {
          this.refreshMessage()
        })
      }
    }
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
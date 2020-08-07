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
    },
    mounted() {
      const form = document.querySelector('div.comment-form')
      const toForm = () => {
        console.log('scroll')
        form.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        })
      }

      const replys = document.querySelectorAll('div.reply button')
      replys.forEach(x => {
        x.addEventListener('click', toForm)
      })
    }
  }
</script>

<style lang="less" scoped>

  div#blog-comment {
    margin: 60px 0;
  }
</style>
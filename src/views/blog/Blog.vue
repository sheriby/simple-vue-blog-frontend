<template>
  <div id="blog">
    <blog-cover :title="blogdetail.title" :date="blogdetail.date" :view="blogdetail.view" :cover="blogdetail.cover"/>
    <div class="container">
        <blog-content ref="content" :content="blogdetail.content"/>

        <el-row><el-col :span="20">
          <div class="b-container">
            <blog-donate/>
            <license/>
            <blog-post :previous="blogdetail.previous" :next="blogdetail.next"/>
            <blog-comment :comments="blogdetail.comments" 
            :commentCount="blogdetail.commentCount" :blogId="blogdetail.id"/>
            <detail-footer/>
          </div>
        </el-col></el-row>
    </div>
  </div>
</template>

<script>
  import BlogCover from '@/views/blog/BlogCover'
  import BlogContent from '@/views/blog/BlogContent'
  import BlogDonate from '@/components/donate/BlogDonate'
  import License from '@/components/License/License'
  import BlogPost from '@/views/blog/BlogPost'
  import BlogComment from '@/views/blog/BlogComment'
  import DetailFooter from '@/components/footer/DetailFooter'
  import {getBlogDetail, getComment} from '../../network/blog' 
  import hljs from 'highlight.js'

  export default {
    name: "Blog",
    components: {DetailFooter, BlogComment, BlogPost, License, BlogDonate, BlogContent, BlogCover},
    data() {
      return {
        blogdetail: {}
      }
    },
    methods: {
      refreshComment() {
        getComment(this.blogdetail.id).then(res => {
          this.blogdetail.comments = res.data.comments
          this.blogdetail.commentCount = res.data.commentCount
        }) 
      }
    },
    created() {
      const id = this.$route.params.id
      getBlogDetail(id).then(res => {
        this.blogdetail = res.data
      }).catch(err => {
        console.log(err);
      })
    },
    beforeRouteUpdate(to, from, next) {
      const id = to.params.id
      getBlogDetail(id).then(res => {
        this.blogdetail = res.data
        next()
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" scoped>

  div.br {
    height: 400px;
  }

  div#blog {
    margin-top: 61px;
    height: 1000px;
  }

  div.container {
    padding-left: 200px;
    padding-right: 100px;
  }

</style>


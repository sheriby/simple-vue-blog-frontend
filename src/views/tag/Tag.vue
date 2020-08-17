<template>
  <div class="tag">
    <cover :cover="cover">
      <div class="tag-info" slot="cover-content">
        <h2 class="tag-name">{{tag.name}}</h2>
        <p class="desc">{{tag.desc}}</p>
      </div>
    </cover>
    <div class="container">
      <simple-blog-list :blogs="blogs"/>
      <div class="pre" @click="loadblog">
        <previous ref="pre"/>
      </div>
    </div>

    <button @click="select = true">
      <i class="el-icon-arrow-right"></i>
    </button>
    <el-drawer
      class="selectTag"
      title="选择一个喜欢的标签吧~"
      :visible.sync="select"
      direction="ltr"
      size="30%">
      <tag-item v-for="(tag, index) in tags" :key="index" :tag="tag" @itemclick="loadTag"  />
    </el-drawer>
    <blog-footer/>
  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'
  import SimpleBlogList from '@/components/blog/SimpleBlogList'
  import Previous from '@/components/previous/Previous'
  import TagItem from '@/views/tag/TagItem'
  import BlogFooter from '@/components/footer/BlogFooter'
  import {getTagInfo, getBlogs} from '../../network/tag'

  export default {
    name: "Tag",
    components: {
      BlogFooter,
      Cover, SimpleBlogList, Previous, TagItem
    },
    data() {
      return {
        cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
        page: 1,
        select: false,
        tag: {},
        tags: [],
        blogs: []
      }
    },
    created() {
      const id = this.$route.params.id
      getTagInfo(id).then(res => {
        this.tag = res.data.tag
        this.tags = res.data.tags
        this.blogs = res.data.blogs
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      loadblog() {
        this.$refs['pre'].startloading()

        this.requestBlog().then((res) => {
          const blogs = res.data
          if (blogs === undefined || blogs === null || blogs.length === 0) {
            this.$refs.pre.nodata()
            return
          }
          blogs.forEach(x => {
            this.blogs.push(x)
          })
          this.$refs['pre'].endloading()
        })
      },
      requestBlog() {
        return getBlogs(this.tag.id, ++this.page) 
      },
      loadTag(tag) {
        this.tag = tag
        this.page = 1
        this.select = false
        getBlogs(tag.id, this.page).then(res => {
          this.blogs = res.data
          this.$refs.pre.restart()
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  div.tag-info {
    color: white;
    text-align: center;
    height: 100%;
    padding: 200px 0;
    font-family: serif;
    text-shadow: rgba(0, 0, 0) 2px 2px 10px;

    h2 {
      font-size: 45px;
      letter-spacing: 8px;
      font-weight: 300;
    }

    .desc {
      font-size: 20px;
      margin-top: 20px;
    }
  }

  div.container {
    width: 65%;
    margin: 0 auto;
  }

  /deep/ header#el-drawer__title span {
    color: #b177ff;
    font-size: 16px;
  }

  button {
    position: fixed;
    overflow: hidden;
    outline: none;
    border: none;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 1px 5px;

    top: 300px;
    left: 0;
    height: 60px;
    width: 28px;
    text-align: left;
    background: #fe9600;
    i {
      font-size: 30px;
      position: relative;
      left: -5px;
      color: #ffffff;
    }
  }

</style>
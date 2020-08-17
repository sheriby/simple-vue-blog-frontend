<template>
  <div class="category">
    <cover :cover="cover">
      <div class="category-info" slot="cover-content">
        <h2 class="category-name">{{typeInfo.name}}</h2>
        <p class="desc">{{typeInfo.desc}}</p>
      </div>
    </cover>
    <div class="container">
      <simple-blog-list :blogs="typeInfo.blogs"/>
      <div class="pre" @click="loadblog">
        <previous ref="pre"/>
      </div>
    </div>
    <blog-footer/>
  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'
  import SimpleBlogList from '@/components/blog/SimpleBlogList'
  import Previous from '@/components/previous/Previous'
  import BlogFooter from '@/components/footer/BlogFooter'
  import {getTypeInfo} from '../../network/type'
  export default {
    name: "Category",
    components: {
      BlogFooter,
      Previous,
      SimpleBlogList,
      Cover
    },
    data() {
      return {
        cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
        typeInfo: {},
        page: 1
      }
    },
    created() {
      const id = this.$route.params.id
      getTypeInfo(id, this.page).then(res => {
        this.typeInfo = res.data
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      loadblog() {
        this.$refs['pre'].startloading()

        this.requestBlog().then((res) => {
          const blogs = res.data.blogs
          if (blogs === undefined || blogs === null || blogs.length === 0) {
            this.$refs.pre.nodata()
            return
          }
          blogs.forEach(x => {
            this.typeInfo.blogs.push(x)
          })
          this.$refs['pre'].endloading()
        })
      },
      requestBlog() {
        return getTypeInfo(this.typeInfo.id, ++this.page)
      }
    },
    beforeRouteUpdate(to, from ,next) {
      const id = to.params.id
      this.page = 1
      getTypeInfo(id, this.page).then(res => {
        this.typeInfo = res.data
        next()
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" scoped>

  div.category-info {
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
</style>
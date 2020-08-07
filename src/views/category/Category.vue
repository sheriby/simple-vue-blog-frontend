<template>
  <div class="category">
    <cover :cover="cover">
      <div class="category-info" slot="cover-content">
        <h2 class="category-name">{{name}}</h2>
        <p class="desc">{{desc}}</p>
      </div>
    </cover>
    <div class="container">
      <simple-blog-list :blogs="blogs"/>
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
        name: '技术',
        desc: 'Geek —— Only for Love',
        blogs: [
          {
            cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
            date: '2020-08-04 19:06',
            view: 8848,
            title: 'Linux学习日记01',
            tags: ['悦读', 'Linux'],
            type: '技术',
            desc: '第三章之linux中的两种链接文件，硬链接和软链接',
            content: ' '
          },
          {
            cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
            date: '2020-08-04 19:06',
            view: 8848,
            title: 'Linux学习日记01',
            tags: ['悦读', 'Linux'],
            type: '技术',
            desc: '第三章之linux中的两种链接文件，硬链接和软链接',
            content: ' '
          },
          {
            cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
            date: '2020-08-04 19:06',
            view: 8848,
            title: 'Linux学习日记01',
            tags: ['悦读', 'Linux'],
            type: '技术',
            desc: '第三章之linux中的两种链接文件，硬链接和软链接',
            content: ' '
          }
        ],
        page: 1
      }
    },
    methods: {
      loadblog() {
        console.log('111')
        this.$refs['pre'].startloading()

        this.requestBlog(this.page).then((data) => {
          data.forEach(x => {
            this.blogs.push(x)
          })
          this.$refs['pre'].endloading()
        })
      },
      requestBlog(page) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(page)
            const data = this.blogs
            resolve(data)
          }, 2000)
        })
      }
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
      font-size: 50px;
      letter-spacing: 8px;
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
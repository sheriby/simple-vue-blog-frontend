<template>
  <div class="tag">
    <cover :cover="cover">
      <div class="tag-info" slot="cover-content">
        <h2 class="tag-name">{{name}}</h2>
        <p class="desc">{{desc}}</p>
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
      <tag-item v-for="(tag, index) in tags" :key="index" :name="tag.name" :count="tag.count" />
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
  export default {
    name: "Tag",
    components: {
      BlogFooter,
      Cover, SimpleBlogList, Previous, TagItem
    },
    data() {
      return {
        cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
        name: 'Spring Boot',
        desc: 'Without Spring Boot, I Will Not Use Java',
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
        page: 1,
        select: false,
        tags: [
          {
            name: 'Spring Boot',
            count: 18
          },
          {
            name: 'Spring',
            count: 12
          },
          {
            name: 'Spring MVC',
            count: 13
          },
          {
            name: 'Spring Security',
            count: 9
          },
          {
            name: 'Spring Data JPA',
            count: 5
          },
          {
            name: 'Spring Cloud',
            count: 12
          },
          {
            name: 'Spring Boot',
            count: 18
          },
          {
            name: 'Spring Boot',
            count: 18
          },
          {
            name: 'Spring Boot',
            count: 18
          },
          {
            name: 'Spring Boot',
            count: 18
          },
          {
            name: 'Spring Boot',
            count: 18
          },
          {
            name: 'Spring Boot',
            count: 18
          },
        ]
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

  div.tag-info {
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
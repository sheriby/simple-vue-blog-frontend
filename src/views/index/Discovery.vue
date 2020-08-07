<template>
  <div id="discovery">
    <div id="discovery-text">
      <i class="el-icon-s-promotion"></i>
      <span>Discovery</span>
    </div>
    <div id="blog-container">
      <ul>
        <li v-for="(blog, index) in blogs" :key="index">
          <blog-left-item v-if="index % 2 === 0" :cover="blog.cover" :date="blog.date"
                          :view="blog.view" :title="blog.title" :tags="blog.tags"
                          :type="blog.type" :desc="blog.desc">
          </blog-left-item>
          <blog-right-item v-else :cover="blog.cover" :date="blog.date"
                           :view="blog.view" :title="blog.title" :tags="blog.tags"
                          :type="blog.type" :desc="blog.desc">
          </blog-right-item>
        </li>
      </ul>
    </div>
    <div id="previous">
      <el-button round @click="loadblog">
        Previous
      </el-button>
      <div class="loading">
        <img src="../../assets/img/rotating-ball.svg">
      </div>
    </div>
  </div>
</template>

<script>
  import BlogLeftItem from '@/components/blog/BlogLeftItem'
  import BlogRightItem from '@/components/blog/BlogRightItem'

  export default {
    name: "Discovery",
    components: {
      BlogRightItem, BlogLeftItem
    },
    data() {
      return {
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
        const previous = document.querySelector('div#previous button')
        const loading = document.querySelector('div#previous .loading')
        previous.style.display = 'none'
        loading.style.display = 'block'

        this.requestBlog(++this.page).then((data) => {
          data.forEach(x => {
            this.blogs.push(x)
          })
          previous.style.display = 'inline'
          loading.style.display = 'none'
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
      },
      loadItem() {
        const h = document.documentElement.clientHeight

        const top = document.documentElement.scrollTop + h
        const hidden = document.querySelector('.blog-item:not(.blog-item-show)')
        if (hidden == null) {
          return false
        }
        const hiddenh = hidden.offsetTop + 70
        console.log(hiddenh, top)
        if (top > hiddenh) {
          hidden.className = 'blog-item blog-item-show'
        }
      }
    },
    mounted() {
      window.addEventListener('scroll', this.loadItem)
    },
    updated() {
      this.loadItem()
    }
  }
</script>

<style lang="less" scoped>

  #discovery {
    margin: 80px auto;
  }

  div#discovery-text {
    height: 30px;
    border-bottom: #ddd 1px dashed;

    span {
      display: inline-block;
      padding-left: 7px;
    }
  }

  div#blog-container {
    margin: 40px auto;
  }

  li {
    list-style: none;
  }

  div#previous {
    margin: 60px auto;
    text-align: center;

    button {
      padding: 13px 30px;

      color: #adadad;
      font-size: 15px;
      letter-spacing: 2px;

      &:hover {
        color: #fe9600;
        background: none;
        border: #fe9600 1px solid;
      }
    }
  }

  div.loading{
    display: none;
    img {
      height: 50px;
      width: 50px;
    }
  }
</style>
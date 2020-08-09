<template>
  <div id="discovery">
    <div id="discovery-text">
      <i class="el-icon-s-promotion"></i>
      <span>Discovery</span>
    </div>
    <div id="blog-container">
      <ul>
        <li v-for="(blog, index) in blogs" :key="index">
          <blog-left-item
            v-if="index % 2 === 0"
            :id="blog.id"
            :cover="blog.cover"
            :date="blog.date"
            :view="blog.view"
            :title="blog.title"
            :tags="blog.tags"
            :type="blog.type"
            :desc="blog.desc"
          ></blog-left-item>
          <blog-right-item
            v-else
            :id="blog.id"
            :cover="blog.cover"
            :date="blog.date"
            :view="blog.view"
            :title="blog.title"
            :tags="blog.tags"
            :type="blog.type"
            :desc="blog.desc"
          ></blog-right-item>
        </li>
      </ul>
    </div>

    <div class="pre" @click="loadblog">
      <previous ref="pre" />
    </div>
  </div>
</template>

<script>
import BlogLeftItem from '@/components/blog/BlogLeftItem'
import BlogRightItem from '@/components/blog/BlogRightItem'
import Previous from '@/components/previous/Previous'
import { getBlogInfo } from '../../network/index'

export default {
  name: 'Discovery',
  components: {
    Previous,
    BlogRightItem,
    BlogLeftItem
  },
  data() {
    return {
      blogs: [],
      page: 1
    }
  },
  created() {
    getBlogInfo(this.page).then(res => {
      this.blogs = res.data
    })
  },
  methods: {
    loadblog() {
      this.$refs['pre'].startloading()

      this.requestBlog(++this.page).then(res => {
        if (res.data === null) {
          this.$refs['pre'].nodata()
          return
        }
        res.data.forEach(x => {
          this.blogs.push(x)
        })
        this.$refs['pre'].endloading()
      })
    },
    requestBlog(page) {
      return getBlogInfo(page)
    },
    loadItem() {
      const h = document.documentElement.clientHeight

      const top = document.documentElement.scrollTop + h
      const hidden = document.querySelector('.blog-item:not(.blog-item-show)')
      if (hidden == null) {
        return false
      }
      const hiddenh = hidden.offsetTop + 70
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
</style>

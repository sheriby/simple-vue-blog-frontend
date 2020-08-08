<template>
  <div class="archive">
    <cover :cover="cover">
      <div class="title" slot="cover-content">
        <h2>归档 | Archive</h2>
      </div>
    </cover>
    <div class="container">
      <div class="header">
        <span class="fold" @click="fold">
        [ 全部展开/收缩 ]
        </span>
      </div>
      <year-archive :archive="archive"/>
      <year-archive :archive="archive"/>
      <year-archive :archive="archive"/>
      <blog-footer/>
    </div>
  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'
  import BlogFooter from '@/components/footer/BlogFooter'
  import YearArchive from '@/views/archive/YearArchive'

  export default {
    name: "Archive",
    components: {
      YearArchive,
      BlogFooter,
      Cover
    },
    data() {
      return {
        cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg',
        allshow: true,
        archive: {
          year: 2020,
          months: [
            {
              month: 8,
              blogs: [
                {
                  date: '04日 12:56:12',
                  name: 'Spring Boot自动装箱原理浅析'
                },
                {
                  date: '04日 12:56:12',
                  name: 'Spring Boot自动装箱原理浅析'
                },
                {
                  date: '04日 12:56:12',
                  name: 'Spring Boot自动装箱原理浅析'
                }
              ]
            },
            {
              month: 4,
              blogs: [
                {
                  date: '04日 12:56:12',
                  name: 'Spring Boot自动装箱原理浅析'
                },
                {
                  date: '04日 12:56:12',
                  name: 'Spring Boot自动装箱原理浅析'
                },
                {
                  date: '04日 12:56:12',
                  name: 'Spring Boot自动装箱原理浅析'
                }
              ]
            }
          ]
        }
      }
    },
    methods: {
      fold() {
        if (this.allshow) {
          this.$children.filter(x => x.$el.className === 'year-archive')
              .forEach(x => x.allshow())
        } else {
          this.$children.filter(x => x.$el.className === 'year-archive')
              .forEach(x => x.allhide())
        }
        this.allshow = !this.allshow
      }
    }
  }
</script>

<style lang="less" scoped>

  div.title {
    text-align: center;
    color: #ffffff;
    font-size: 30px;
    text-shadow: rgba(0, 0, 0) 2px 2px 10px;

    padding-top: 150px;
  }

  div.container {
    width: 63%;
    margin: 50px auto;

    div.header {
      text-align: right;
      font-size: 16px;
      padding: 20px 0;

      span.fold:hover {
        cursor: pointer;
      }
    }
  }
</style>
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
      <year-archive v-for="(value, key, index) in archive" :key="index" :year="key" :months="value"/>
      <blog-footer/>
    </div>
  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'
  import BlogFooter from '@/components/footer/BlogFooter'
  import YearArchive from '@/views/archive/YearArchive'
  import {getArchive} from '../../network/archive'

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
        }
      }
    },
    created() {
      getArchive().then(res => {
        this.archive = res.data
        console.log(this.archive)
      }).catch(err => {
        console.log(err)
      })
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
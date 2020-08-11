<template>
  <div class="month-archive">
    <div class="container">
      <div class="month-info" @click="show = !show" @mouseenter="show=true">
        {{month}}月 ({{blogs.length}}篇文章)
      </div>
      <el-collapse-transition>
        <ul v-show="show">
          <li v-for="(blog, index) in blogs" :key="index">
            <span class="date">{{blog.time}}</span>
            <span class="title" @click="toBlog(blog.id)">{{blog.title}}</span>
          </li>
        </ul>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MonthArchive",
    props: {
      month: String,
      blogs: Array
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      toBlog(id) {
        this.$router.push('/blog/' + id)
      }
    }
  }
</script>

<style lang="less" scoped>
  div.container {
    position: relative;
    padding: 9px 0;
    overflow: hidden;

    &::after {
      content: '';
      height: 100%;
      width: 4px;
      background: #00bbff;
      position: absolute;
      left: 105px;
      top: 0;
      z-index: -1;
    }


    div.month-info {
      width: 50%;
      font-size: 15px;
      color: #444444;

      &:hover {
        cursor: pointer;
      }

      &::after {
        content: '';
        height: 12px;
        width: 12px;
        background: #00bbff;
        border-radius: 50%;
        border: 3px #f4f4f4 solid;
        box-sizing: content-box;
        position: absolute;
        left: 98px;
      }
    }

    ul {
      margin-top: 12px;
      list-style: none;
      padding: 0 130px;
      /*transition: opacity .5s ease-in-out;*/

      li {
        margin: 7px 0;
        font-size: 15px;

        span.title {
          padding-left: 10px;
          color: #444444;

          &:hover {
            cursor: pointer;
            color: #fe9600;
          }
        }

        span.date {
          color: #00bbff;
        }

        &::before {
          content: '';
          height: 8px;
          width: 8px;
          background: #00bbff;
          border-radius: 50%;
          border: 3px #f4f4f4 solid;
          box-sizing: content-box;
          position: absolute;
          left: 100px;
        }
      }
    }
  }

</style>
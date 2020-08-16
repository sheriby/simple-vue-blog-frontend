<template>
  <div class="simple-blog-item">
    <div class="container" @click="toBlog">
      <el-row>
        <el-col :span="4">
          <img :src="blog.cover">
        </el-col>
        <el-col :span="16">
          <h3 class="title">{{blog.title}}</h3>
          <p class="desc">{{blog.desc}}</p>
        </el-col>
        <el-col :span="4">
          <div class="date-info">
            <i class="el-icon-date"></i>
            <span class="date">{{blog.date}}</span>
          </div>
        </el-col>
      </el-row>
      <div class="more">
        <i class="el-icon-more"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SimpleBlogItem",
    props: {
      blog: Object
    },
    methods: {
      toBlog() {
        this.$router.push('/blog/' + this.blog.id)
      }
    }
  }
</script>

<style lang="less" scoped>
  div.container {
    height: 160px;
    margin: 40px auto;
    padding: 20px 20px;
    border-bottom: 1px #efefef solid;
    position: relative;

    &:hover {
      cursor: pointer;
      background: rgba(222, 222, 222, 0.2);
    }

    &:active {
      top: 2px;
    }

    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 3px;
      transition: ease-in-out .5s;

      &:hover {
        transform: rotate(360deg);
        transition: ease-in-out .5s;
      }
    }

    h3, .desc {
      font-family: serif;
    }

    h3 {
      font-size: 20px;
      letter-spacing: 1px;
      margin-top: 20px;

      &:hover {
        color: #fe9600;
        cursor: pointer;
      }
    }

    .desc {
      margin-top: 20px;
    }

    div.date-info {
      margin-top: 20px;
      color: #aaaaaa;
      font-size: 12px;

      i {
        margin-right: 5px;
      }
    }

    div.more {
      float: right;
      font-size: 25px;

      i:hover {
        cursor: pointer;
        color: #fe9600;
      }
    }
  }
</style>
<template>
  <div class="blog-cover">
    <cover :cover="cover">
      <div class="desc" slot="cover-content">
        <h1>{{title}}</h1>
        <p>
          <img src="../../assets/img/head.jpg">
          <span class="author">Hony Sher</span>
          <span class="date">
            <i class="el-icon-date"></i>
            <span class="datenum">{{date}}</span>
          </span>
          <span class="view">
            <i class="el-icon-view"></i>
            <span class="viewnum">{{view}}</span>
          </span>
        </p>
      </div>
    </cover>
  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'

  export default {
    name: "BlogCover",
    components: {
      Cover
    },
    props: {
      cover: String,
      title: String,
      date: String,
      view: Number
    }
  }
</script>

<style lang="less" scoped>

  div.desc {
    padding-top: 250px;
    padding-left: 200px;

    text-shadow: rgba(0, 0, 0) 2px 2px 10px;
    color: #ffffff;

    img {
      font-weight: 300;
      height: 35px;
      width: 35px;
      border-radius: 50%;
      vertical-align: middle;
    }

    span.author, span.date, span.view {
      margin-left: 10px;
    }

    span.viewnum, span.datenum {
      margin-left: 5px;
    }
  }

</style>
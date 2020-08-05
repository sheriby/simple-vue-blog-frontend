<template>
  <div id="blog-cover">
    <div class="header-container" :style="{backgroundImage: 'url(' + cover + ')'}">
      <div class="desc">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogCover",
    props: {
      cover: String,
      title: String,
      date: String,
      view: Number
    }
  }
</script>

<style lang="less" scoped>
  div.header-container {
    width: 100%;
    height: 400px;
    background: no-repeat center;
    background-size: cover;

    line-height: 1.4;

    padding-top: 250px;
    padding-left: 250px;

    div.desc {
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
  }

</style>
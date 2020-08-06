<template>
  <div class="author-info">
    <img src="../../assets/img/head.jpg">
    <h2 class="author">Hony Sher</h2>
    <div class="desc">
      <i class="el-icon-medal-1"></i>
      <span class="text">一枚小菜鸡</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AuthorInfo"
  }
</script>

<style lang="less" scoped>

  div.author-info {
    text-align: center;

    img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: #dfdfdf 3px solid;
    }

    h2 {
      margin-top: 10px;
      color: #cccccc;
      word-spacing: 8px;
      font-family: serif;
      font-size: 18px;
    }

    div.desc {
      width: 20%;
      margin: 20px auto;
      padding: 20px 0;
      border-top: 1px #cfcfcf dashed;
      border-bottom: 1px #cfcfcf dashed;

      i {
        color: #fe9600;
        margin-right: 5px;
        font-size: 20px;
        vertical-align: middle;
      }

      .text {
        color: #aaaaaa;
      }
    }
  }
</style>
<template>
  <div class="blog-content" v-highlight>
    <div v-html="content" class="content">
    </div>
  </div>
</template>

<script>

  export default {
    name: "BlogContent",
    props: {
      content: String
    },
    data() {
      return {
      }
    },
    mounted() {

    }
  }
</script>

<style lang="less" scoped>

  div.blog-content {
    padding-left: 250px;
    padding-right: 100px;
  }

  div.content {
    width: 80%;
    color: #404040;
    font-weight: 300;

    line-height: 1.8;
    font-family: 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc', 'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif;

    & /deep/ h1, & /deep/ h2, & /deep/ h3, & /deep/ h4, & /deep/ h5, & /deep/ h6 {
      font-weight: 300;
    }

    & /deep/ code:not([class]) {
      display: inline-block;
      color: #e67474;
      background: rgba(254, 250, 199, 0.8);
    }

    & /deep/ code[class*='language-'] {
      margin: 30px 0;
      width: 100%;

      box-shadow: rgba(0, 0, 0, 0.4) 0 10px 30px 0;
      border-radius: 5px;
    }


    & /deep/ h2 {
      margin: 18.67px 0;

      &::after {
        content: url("../../assets/img/tag.svg");
        margin-left: 5px;
        vertical-align: middle;
        display: inline-block;
      }
    }

    & /deep/ h3 {
      margin: 17.55px 0;
      padding-bottom: 5px;
      border-bottom: 1px dashed #aaaaaa;
      color: #666666;

      &::before {
        content: "#";
        color: #ff6d6d;
        font-weight: bolder;
        size: 15px;
      }
    }

    & /deep/ .hljs-ln-n:not(.hljs-ln-line) {
      text-align: left;
      padding-right: 12px !important;
      color: #888f96;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    & /deep/ .hljs-ln-line:hover {
      background: #333333;
    }

  }

  div.content /deep/ p {
    letter-spacing: 1px;
  }


</style>
<template>
  <div id="footer">
    <div class="copyright">
      ©<span class="time">{{time}}</span>
    </div>
    <div class="info">
      <span>My simple blog</span>
      <img src="../../assets/img/sakura.svg">
      <span>By Sheriby with Vue.js, ElementUi, Spring Boot and MyBatis Plus</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogFooter",
    props: {
      time: {
        type: String,
        default: '2020 ~ 2020'
      }
    }
  }
</script>

<style lang="less" scoped>

  div#footer {
    margin: 80px auto 40px;
    text-align: center;
    color: #999999;
  }

  div.copyright {
    span.time {
      display: inline-block;
      padding-left: 10px;
      font-size: 14px;

    }

    line-height: 100%;
    vertical-align: top;
  }

  @keyframes infinite-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  div.info {
    margin-top: 10px;
    letter-spacing: 1px;
    font-size: 13px;
    vertical-align: middle;

    img {
      height: 18px;
      margin: 0 5px;

      vertical-align: middle;
      animation: 2s linear infinite-rotate infinite;
    }
  }
</style>
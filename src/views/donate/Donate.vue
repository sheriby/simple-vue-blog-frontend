<template>
  <div class="donate">
    <cover :cover="cover">
      <h2 class="header" slot="cover-content">谢谢饲主了喵~</h2>
    </cover>

    <div class="container">
      <span class="info">
        如果喜欢我的博客，可以考虑资助一下哦~非常感激！
      </span>

      <div class="methods">
        PLACEHOLDER
      </div>

      <license/>
      <detail-footer/>
    </div>


  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'
  import License from '@/components/License/License'
  import DetailFooter from '@/components/footer/DetailFooter'

  export default {
    name: "Donate",
    components: {
      DetailFooter,
      License,
      Cover
    },
    data() {
      return {
        cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg'
      }
    }
  }
</script>

<style lang="less" scoped>
  h2.header {
    font-size: 45px;
    color: #ffffff;
    text-shadow: rgba(0, 0, 0) 2px 2px 10px;
    letter-spacing: 3px;
    text-align: center;
    padding-top: 200px;
    font-weight: 300;
  }

  div.container {
    max-width: 65%;
    margin: 40px auto;

    span.info {
      font-size: 15px;
    }

    div.methods {
      margin: 40px 0 80px;
      height: 150px;
    }
  }

</style>
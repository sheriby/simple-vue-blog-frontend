<template>
  <div class="about">
    <cover :cover="cover">
      <h2 class="header" slot="cover-content">关于</h2>
    </cover>

    <div class="container">
      <div class="info">
        [Hony Sherの小博客]
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
    name: "About",
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
    letter-spacing: 7px;
    text-align: center;
    padding-top: 200px;
    font-weight: 300;
  }

  div.container {
    max-width: 65%;
    margin: 40px auto;

    div.info {
      font-size: 45px;
      text-align: center;
    }
  }

</style>

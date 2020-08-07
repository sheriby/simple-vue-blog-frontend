<template>
  <div id="previous">
    <el-button round>
      Previous
    </el-button>
    <div class="loading">
      <img src="../../assets/img/rotating-ball.svg">
    </div>
  </div>
</template>
<script>
  export default {
    name: "Previous",
    props: {
      url: String,
      page: Number
    },
    methods: {
      startloading() {
        const previous = document.querySelector('div#previous button')
        const loading = document.querySelector('div#previous .loading')
        previous.style.display = 'none'
        loading.style.display = 'block'
      },
      endloading() {
        const previous = document.querySelector('div#previous button')
        const loading = document.querySelector('div#previous .loading')
        previous.style.display = 'inline'
        loading.style.display = 'none'
      }
    }

  }
</script>

<style lang="less" scoped>
  div#previous {
    margin: 60px auto;
    text-align: center;

    button {
      padding: 13px 30px;

      color: #adadad;
      font-size: 15px;
      letter-spacing: 2px;

      &:hover {
        color: #fe9600;
        background: none;
        border: #fe9600 1px solid;
      }
    }
  }

  div.loading{
    display: none;
    img {
      height: 50px;
      width: 50px;
    }
  }
</style>
<template>
  <div id="previous">
    <div class="pre-btn">
      <el-button round>
        Previous
      </el-button>
      <div class="loading">
        <img src="../../assets/img/rotating-ball.svg">
      </div>
    </div>
    <div class="no-data">
      <span class="info">感谢你看到这儿，但是实在没有更多了</span>
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
      },
      nodata() {
        const previous = document.querySelector('div#previous button')
        const loading = document.querySelector('div#previous .loading')
        const nodata = document.querySelector('div.no-data')
        previous.style.display = 'none'
        loading.style.display = 'none'
        nodata.style.display= 'block'
      },
      restart() {
        const previous = document.querySelector('div#previous button')
        const loading = document.querySelector('div#previous .loading')
        const nodata = document.querySelector('div.no-data')

        previous.style.display = 'inline'
        loading.style.display = 'none'
        nodata.style.display= 'none'
 
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

  div.no-data {
    display: none;
    span.info {
      font-size: 14px;
      color: #999999;
    }
  }
</style>
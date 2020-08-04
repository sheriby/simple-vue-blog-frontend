<template>
  <div id="avatar">
    <div id="avatar-img">
      <img src="../../assets/img/head.jpg">
    </div>
    <div id="header-info">
      <div id="header-text">
        To Make Some Funny and Meaningful Things.
      </div>
      <div id="header-icon">
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-s-help"></i>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    methods: {},
    mounted() {
      const position = () => {
        const avatar = document.getElementById('avatar')
        const h = document.documentElement.clientHeight
        const w = document.documentElement.clientWidth
        const ah = avatar.clientHeight
        const aw = avatar.clientWidth
        const left = (w - aw) / 2
        const top = (h - ah) / 2 - 50
        avatar.style.left = left + 'px'
        avatar.style.top = top + 'px'
      }

      position()

      let timer = null
      window.onresize = () => {
        if (timer) {
          clearInterval(timer)
        }
        timer = setTimeout(() => {
          position()
        }, 300)
      }
    }
  }
</script>

<style scoped>
  #avatar {
    position: absolute;
    height: 260px;
    width: 600px;
  }

  #avatar-img {
    text-align: center;
    margin-bottom: 20px;

  }

  #avatar-img img {
    height: 130px;
    width: 130px;
    border-radius: 50%;

    transition: 1s ease-in-out;
    -webkit-transition: 1s ease-in-out;
  }

  #header-info {
    background: rgba(0, 0, 0, 0.5);
    height: 90px;
    box-sizing: border-box;
    padding: 20px 40px;
    text-align: center;
    color: white;
    font-size: 16px;
    font-weight: bolder;
  }

  #header-text {
    font-size: 18px;
    margin-bottom: 20px;
  }

  #avatar-img img:hover {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }


</style>
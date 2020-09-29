<template>
  <div id="avatar">
    <div id="avatar-img">
      <img src="../../assets/img/head.jpg" />
    </div>
    <div id="header-info">
      <div id="header-text">
        To Make Some Funny and Meaningful Things.
      </div>
      <div id="header-icon">
        <i class="el-icon-arrow-left"></i>
        <a href="https://github.com" target="_blank">
          <img src="../../assets/img/icon/github.svg" />
        </a>
        <a href="https://bilibili.com" target="_blank">
          <img src="../../assets/img/icon/bilibili.svg" />
        </a>
        <a href="https://im.qq.com" target="_blank">
          <img src="../../assets/img/icon/qq.svg" />
        </a>
        <a href="https://wx.qq.com" target="_blank">
          <img src="../../assets/img/icon/wechat.svg" />
        </a>
        <a href="https://weibo.com" target="_blank">
          <img src="../../assets/img/icon/weibo.svg" />
        </a>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
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

    // let timer = null
    window.onresize = () => {
      // if (timer) {
      //   clearInterval(timer)
      // }
      // timer = setTimeout(() => {
      position()
      // }, 10)
    }
  }
}
</script>

<style scoped lang="less">
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
  border: rgba(0, 0, 0, 0.3) 5px solid;

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

i.el-icon-arrow-left,
i.el-icon-arrow-right {
  color: deepskyblue;
  font-size: 20px;
  font-weight: bolder;
  margin: 0 5px;
}

#header-icon img {
  margin: 0 4px;

  &:hover {
    cursor: pointer;
  }
}
</style>

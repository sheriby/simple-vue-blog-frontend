<template>
  <div id="wave">
    <div class="down">
      <i class="el-icon-arrow-down" @click="down"></i>
    </div>
    <div id="wave1">
      <img src="../../assets/img/wave1.png">
    </div>
    <div id="wave2">
      <img src="../../assets/img/wave2.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Wave",
    methods: {
      down() {
        const height = document.documentElement.clientHeight
        window.scrollTo({
          left: 0,
          top: height,
          behavior: 'smooth'
        })
      }
    },
    mounted() {
      const wave = document.getElementById('wave')

      const position = () => {
        const height = document.documentElement.clientHeight
        const h = wave.clientHeight
        const top = height - h
        wave.style.top = top + 'px'
      }

      position()

      let timer = null

      window.addEventListener('resize', () => {
        if (timer) {
          clearInterval(timer)
        }
        timer = setTimeout(() => {
          position()
        }, 300)
      })
    }
  }
</script>

<style lang="less" scoped>
  #wave {
    position: absolute;
    height: 100px;
    left: 0;
    right: 0;
    width: 100%;
    overflow-x: hidden;
  }

  @keyframes updown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  #wave div.down {
    font-size: 50px;
    font-weight: bolder;
    color: white;
    position: absolute;
    top: -20px;
    z-index: 100;
    width: 100%;
    text-align: center;

    i {
      animation: 1.5s linear updown infinite;

      &:hover {
        cursor: pointer;
      }
    }
  }

  #wave1, #wave2{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70px;
  }

  #wave img {
    width: 100%;
    height: 70px;
  }

  #wave2 {
    left: 150px;
  }

</style>
<template>
  <div id="wave">
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
  #wave {
    position: absolute;
    height: 100px;
    left: 0;
    right: 0;
    width: 100%;
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
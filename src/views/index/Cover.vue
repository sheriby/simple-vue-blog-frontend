<template>
  <div class="cover" :style="coverStyle">
  </div>
</template>

<script>

  export default {
    name: "Index",
    data() {
      return {
        coverStyle: {
          height: '400px',
          width: '100%'
        }
      }
    },
    mounted: function () {
      let timer= null
      const h = document.documentElement.clientHeight
      this.coverStyle.height = h + 'px'

      window.onresize = () => {
        if (timer) {
          clearInterval(timer)
        }
        timer = setTimeout(() => {
          const h = document.documentElement.clientHeight
          this.coverStyle.height = h + 'px'
        }, 300)
      }
    }
  }
</script>

<style scoped>
  .cover {
    background: url("../../assets/img/bg.png");
    background-size: cover;
    background-position: center;
    filter: brightness(80%) blur(1px);
  }
</style>
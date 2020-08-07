<template>
  <div class="index-cover" :style="coverStyle">
  </div>
</template>

<script>

  export default {
    name: "IndexCover",
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

      window.addEventListener('resize', () => {
        if (timer) {
          clearInterval(timer)
        }
        timer = setTimeout(() => {
          const h = document.documentElement.clientHeight
          this.coverStyle.height = h + 'px'
        }, 100)
      })
    }
  }
</script>

<style scoped>
  .index-cover {
    background: url("../../assets/img/bg.png");
    background-size: cover;
    background-position: center;
    filter: brightness(80%) blur(1px);
  }
</style>
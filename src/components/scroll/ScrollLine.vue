<template>
  <div class="scroll-line">
    <img src="../../assets/img/scroll.png" @click="toTop">
  </div>
</template>

<script>
  export default {
    name: "ScrollLine",
    methods: {
      toTop() {
        const line = document.querySelector('div.scroll-line')
        const height = line.clientHeight + 10
        line.style.top = -height + 'px'

        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'smooth'
        })
      }
    },
    mounted() {
      const line = document.querySelector('div.scroll-line')
      const h = document.documentElement.clientHeight
      const height = h - 80
      line.style.height = height + 'px'

      line.style.top = -(height + 10) + 'px'

      let timer = null
      window.addEventListener('scroll', () => {
        if (timer) {
          clearInterval(timer)
        }
        timer = setTimeout(() => {
          const h = document.documentElement.scrollTop
          if (h !== 0) {
            line.style.top = '0'
          } else {
            line.style.top = -(height + 10) + 'px'
          }
        }, 100)
      })
    }
  }
</script>

<style lang="less" scoped>

  @keyframes updown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  div.scroll-line {
    position: fixed;
    right: 40px;

    height: 700px;
    width: 40px;
    z-index: 9;

    img {
      height: 100%;

      &:hover {
        cursor: pointer;
      }
    }

    animation: 2s linear updown infinite;
    transition: all 1s ease-in-out;
  }


</style>
<template>
  <div class="nav-bar">
    <el-row>
      <el-col :span="5" class="name-col">
        <span class="prefix">Hony</span>
        <span class="name">Sher</span>
        <span>的小博客</span>
      </el-col>
      <el-col :span="14" class="nav-col">
        <el-menu id="navlist" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect" :router="true">
          <el-menu-item index="/index"><i class="el-icon-s-home"></i>
            <span class="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title" class="title"><i class="el-icon-s-management"></i>
              <span class="title">归档</span>
            </template>
            <el-menu-item index="2-1">技术</el-menu-item>
            <el-menu-item index="2-2">生活</el-menu-item>
            <el-menu-item index="2-3">随想</el-menu-item>
            <el-menu-item index="2-3">资源</el-menu-item>
            <el-menu-item index="2-3">转载</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>
              <span class="title">清单</span>
            </template>
            <el-menu-item index="3-1">书单</el-menu-item>
            <el-menu-item index="3-2">番组</el-menu-item>
            <el-menu-item index="3-3">歌单</el-menu-item>
            <el-menu-item index="3-3">图集</el-menu-item>
          </el-submenu>
          <el-menu-item index="4"><i class="el-icon-s-comment"></i>
            <span class="title">留言板</span>
          </el-menu-item>
          <el-menu-item index="5"><i class="el-icon-s-custom"></i>
            <span class="title">友人帐</span>
          </el-menu-item>
          <el-menu-item index="6"><i class="el-icon-s-goods"></i>
            <span class="title">赞赏</span>
          </el-menu-item>
          <el-menu-item index="7"><i class="el-icon-info"></i>
            <span class="title">关于</span>
          </el-menu-item>
        </el-menu>

      </el-col>
      <el-col :span="5" class="search-col">
        <span class="el-icon-search search" @click="search"></span>
        `
      </el-col>
    </el-row>
    <div class="search-input">
      <div class="input">
        <el-input v-model="searchtext" placeholder="Type something..."
                  @keyup.enter.native="searchenter"
                  @keyup.esc.native="close">
        </el-input>
        <div class="close icon">
          <i class="el-icon-close" @click="close"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "NavBar",
    data() {
      return {
        activeIndex: "1",
        searchtext: '',
        show: false,
        alwaysShow: false
      }
    },
    methods: {
      handleSelect(key) {
        this.alwaysShow = key !== '/index';
      },
      search() {
        const searchinput = document.querySelector('div.search-input')
        searchinput.style.visibility = 'visible'
        document.body.style.overflow = 'hidden'
      },
      close() {
        const searchinput = document.querySelector('div.search-input')
        this.searchtext = ''
        searchinput.style.visibility = 'hidden'
        document.body.style.overflow = 'auto'
      },
      searchenter() {
        console.log('submit')
        const searchinput = document.querySelector('div.search-input')
        searchinput.style.visibility = 'hidden'
        document.body.style.overflow = 'auto'
      }
    },
    created() {
      console.log('xxx', this.$route.path)
      this.alwaysShow = !this.$route.path.includes('/index')
    },
    mounted() {
      const titles = document.getElementsByClassName('el-submenu__title')
      for (let title of titles) {
        title.style.padding = '0 5px'
      }

      //TODO fix this problem after project fininshed
      if (!this.alwaysShow) {
        const navbar = document.getElementsByClassName('nav-bar')[0]
        const navcol = document.getElementsByClassName('nav-col')[0]
        navbar.style.background = 'rgba(0, 0, 0, 0.05)'
        navcol.style.visibility = 'hidden'
        navcol.style.transform = 'translateX(100px)'

        let itemhover = false


        const over = () => {
          if (!this.show) {
            navcol.style.visibility = 'visible'
            navbar.style.background = 'rgba(255, 255, 255, 0.9)'
            navcol.style.transform = 'translateX(0)'
            this.show = true
          }
          return false
        }

        const out = () => {
          if (!itemhover && this.show && document.documentElement.scrollTop === 0) {
            navcol.style.visibility = 'hidden'
            navcol.style.transform = 'translateX(100px)'
            navbar.style.background = 'rgba(0, 0, 0, 0.05)'
            this.show = false
          }
          return false
        }

        navbar.onmouseenter = over
        navbar.onmouseleave = () => {
          setTimeout(out, 300)
        }

        const navitems = document.querySelectorAll('div.el-menu--horizontal')
        for (let navitem of navitems) {
          navitem.onmouseenter = () => {
            itemhover = true
          }
          navitem.onmouseleave = () => {
            itemhover = false
            setTimeout(out, 300)
          }
        }

        let timer = null

        window.addEventListener('scroll', () => {
          if (timer) {
            clearInterval(timer)
          }
          timer = setTimeout(() => {
            const h = document.documentElement.scrollTop
            if (h === 0 && this.show) {
              out()
            } else if (!this.show) {
              over()
            }
          }, 100)
        })

      }
    }
  }
</script>

<style lang="less" scoped>
  .el-row {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .nav-col {
    display: flex;
    justify-content: center;
    color: #555555;
  }

  /*.nav-bar:hover {*/

  /*  .nav-col {*/
  /*    visibility: visible;*/
  /*  }*/

  /*  background: rgba(255, 255, 255, 0.9);*/
  /*}*/

  .el-menu-item, .el-submenu {
    padding: 0 7px;
  }


  .name-col:hover {

    span.prefix {
      background: orange;
      color: #ffffff;
    }

    span {
      color: orange;
    }
  }

  .name-col {
    font-size: 23px;
    font-weight: bolder;
    margin-left: 10px;
  }

  .name-col span {
    padding: 3px;
    color: #444444;
  }

  .prefix {
    border-radius: 10px;
  }

  .nav-bar {
    background: rgba(255, 255, 255, 0.9);
    z-index: 10;
    background-clip: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    transition: all 0.5s ease-in-out;
  }

  .el-menu {
    background: inherit;
  }

  .nav-col {
    transition: transform 0.7s ease-in-out;
  }

  .search-col {
    text-align: right;
    font-size: 20px;
  }

  .search-col span {
    margin-right: 20px;
    padding: 10px;
    color: #000000;
  }

  span.search:hover {
    cursor: pointer;
    color: #fe9600;
  }


  div.search-input {
    visibility: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 100px 400px;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
    z-index: 20;

  }

  div.input {
    position: relative;
  }

  div.close.icon {
    position: absolute;
    right: 10px;
    top: 13px;
    z-index: 21;
    color: #000000;
    font-size: 14px;
    height: 14px;
    width: 14px;

    border-radius: 50%;
    background: #666666;

    i.el-icon-close {
      font-weight: bolder;
      color: #ffffff;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(30deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-30deg);
    }
    100% {
      transform: rotate(0deg);
    }

  }

  .el-menu-item:hover, .el-submenu:hover {
    i {
      color: #fe9600;
      animation: 0.5s rotate linear 4;
    }

    span.title {
      color: #fe9600;
    }
  }

  span.title {
    font-size: 15px;
  }

</style>
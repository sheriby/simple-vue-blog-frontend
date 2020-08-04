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
                 @select="handleSelect">
          <el-menu-item index="1"><i class="el-icon-s-home"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title" class="title"><i class="el-icon-s-management"></i>归档</template>
            <el-menu-item index="2-1">技术</el-menu-item>
            <el-menu-item index="2-2">生活</el-menu-item>
            <el-menu-item index="2-3">随想</el-menu-item>
            <el-menu-item index="2-3">资源</el-menu-item>
            <el-menu-item index="2-3">转载</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>清单</template>
            <el-menu-item index="3-1">书单</el-menu-item>
            <el-menu-item index="3-2">番组</el-menu-item>
            <el-menu-item index="3-3">歌单</el-menu-item>
            <el-menu-item index="3-3">图集</el-menu-item>
          </el-submenu>
          <el-menu-item index="4"><i class="el-icon-s-comment"></i>留言板</el-menu-item>
          <el-menu-item index="5"><i class="el-icon-s-custom"></i>友人帐</el-menu-item>
          <el-menu-item index="6"><i class="el-icon-s-goods"></i>赞赏</el-menu-item>
          <el-menu-item index="7"><i class="el-icon-info"></i>关于</el-menu-item>
        </el-menu>

      </el-col>
      <el-col :span="5" class="search-col"><span class="el-icon-search"></span></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        activeIndex: "1"
      }
    },
    methods: {
      handleSelect(key) {
        console.log(key)
      }
    },
    mounted() {
      const navbar = document.getElementsByClassName('nav-bar')[0]
      const navcols = document.getElementsByClassName('nav-col')
      let itemhover = false
      let show = false
      const over = () => {
        if (!show) {
          for (let navcol of navcols) {
            navcol.style.visibility = 'visible'
          }
          navbar.style.background = 'rgba(255, 255, 255, 0.9)'
          show = true
        }
        return false
      }

      const out = () => {
        if (!itemhover && show && document.documentElement.scrollTop === 0) {
          for (let navcol of navcols) {
            navcol.style.visibility = 'hidden'
          }
          navbar.style.background = 'rgba(0, 0, 0, 0.05)'
          show = false
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

      const titles = document.getElementsByClassName('el-submenu__title')
      for (let title of titles) {
        title.style.padding = '0 5px'
      }

      let timer = null

      window.onscroll = () => {
        if (timer) {
          clearInterval(timer)
        }
        timer = setTimeout(() => {
          const h = document.documentElement.scrollTop
          if (h === 0 && show) {
            show = false
            for (let navcol of navcols) {
              navcol.style.visibility = 'hidden'
            }
            navbar.style.background = 'rgba(0, 0, 0, 0.05)'
          } else if (!show) {
            show = true
            for (let navcol of navcols) {
              navcol.style.visibility = 'visible'
            }
            navbar.style.background = 'rgba(255, 255, 255, 0.9)'
          }
        }, 100)
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-row {
    display: flex;
    align-items: center;
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

  .el-menu-item, .el-submenu{
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
    font-size: 27px;
    font-weight: bolder;
    margin-left: 10px;
  }

  .name-col span {
    padding: 3px;
  }

  .prefix {
    border-radius: 10px;
  }

  .nav-bar {
    background: rgba(0, 0, 0, 0.05);
    z-index: 10;
    background-clip: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .el-menu {
    background: inherit;
  }

  .nav-col {
    visibility: hidden;
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

</style>
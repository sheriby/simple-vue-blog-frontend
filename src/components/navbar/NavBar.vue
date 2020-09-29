<template>
  <div class="nav-bar">
    <el-row>
      <el-col :span="5" class="name-col">
        <span class="prefix">Hony</span>
        <span class="name">Sher</span>
        <span><span class="no">の</span>小博客</span>
      </el-col>
      <el-col :span="14" class="nav-col">
        <el-menu
          id="navlist"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :router="true"
        >
          <el-menu-item index="/index"
            ><i class="el-icon-s-home"></i>
            <span class="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/archive">
            <el-dropdown placement="bottom" @command="toType">
              <div>
                <i class="el-icon-s-management"></i>
                <span class="title">归档</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(type, index) in types"
                  :key="index"
                  :icon="typeIcons[index % 5]"
                  :command="type.id"
                >
                  {{ type.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item index="/tag">
            <i class="el-icon-menu"></i>
            <span class="title">标签</span>
          </el-menu-item>
          <el-menu-item index="/messageboard"
            ><i class="el-icon-s-comment"></i>
            <span class="title">留言板</span>
          </el-menu-item>
          <el-menu-item index="/link"
            ><i class="el-icon-s-custom"></i>
            <span class="title">友人帐</span>
          </el-menu-item>
          <el-menu-item index="/donate"
            ><i class="el-icon-s-goods"></i>
            <span class="title">赞赏</span>
          </el-menu-item>
          <el-menu-item index="/about"
            ><i class="el-icon-info"></i>
            <span class="title">关于</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5" class="search-col">
        <span class="el-icon-search search" @click="search"></span>
      </el-col>
    </el-row>
    <div class="search-input">
      <div class="input">
        <el-input
          v-model="searchtext"
          placeholder="Type something..."
          @keyup.esc.native="close"
          @input="handleInput"
        >
        </el-input>
        <div class="close icon">
          <i class="el-icon-close" @click="close"></i>
        </div>
      </div>
      <el-collapse-transition>
        <div class="data-container" v-show="showSearch">
          <div v-if="searchDatas.blogs">
            <div class="info">Blog 博客</div>
            <search-item
              v-for="(item, index) in searchDatas.blogs"
              :key="index"
              :search="item"
              type="blog"
              @click="searchClick"
            />
          </div>
          <div v-if="searchDatas.types">
            <div class="info">Type 分类</div>
            <search-item
              v-for="(item, index) in searchDatas.types"
              :key="index"
              :search="item"
              type="type"
              @click="searchClick"
            />
          </div>
          <div v-if="searchDatas.tags">
            <div class="info">Tag 标签</div>
            <search-item
              v-for="(item, index) in searchDatas.tags"
              :key="index"
              :search="item"
              type="tag"
              @click="searchClick"
            />
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import SearchItem from '@/components/navbar/SearchItem'
import { searchInfo } from '@/network/blog'
import { getTypes } from '@/network/type'
import {addClass, removeClass} from '@/utils/classutils'

export default {
  name: 'NavBar',
  components: {
    SearchItem
  },
  data() {
    return {
      activeIndex: '1',
      searchtext: '',
      timeId: -1,
      showSearch: false,
      searchDatas: {},
      types: [],
      typeIcons: [
        'el-icon-document',
        'el-icon-reading',
        'el-icon-folder',
        'el-icon-tickets',
        'el-icon-monitor'
      ],
      disappear: false,
      disappearTimer: null,
      isDisappearPage: false
    }
  },
  methods: {
    search() {
      const searchinput = document.querySelector('div.search-input')
      searchinput.style.visibility = 'visible'
      document.body.style.overflow = 'hidden'
      searchinput.querySelector('input').focus()
    },
    close() {
      const searchinput = document.querySelector('div.search-input')
      this.searchtext = ''
      this.showSearch = false
      searchinput.style.visibility = 'hidden'
      document.body.style.overflow = 'auto'
    },
    toArchive() {
      this.$router.push('/archive')
    },
    toType(id) {
      this.$router.push('/type/' + id)
    },
    handleInput() {
      if (this.timeId !== -1) {
        clearTimeout(this.timeId)
      }
      this.timeId = setTimeout(() => {
        this.inputBlur()
      }, 1000)
    },
    inputBlur() {
      searchInfo(this.searchtext.trim()).then(res => {
        this.searchDatas = res.data
        this.showSearch = true
      })
    },
    searchClick(data) {
      const { type, id } = data
      this.close()
      this.$router.push('/' + type + '/' + id)
    },
    addDisappear() {
      if (!this.isDisappearPage || this.disappear ||
            document.documentElement.scrollTop !== 0) {
        return
      }
      // add class 'disappear'
      const _this = this
      this.disappearTimer = setTimeout(function() {
        const navBar = document.querySelector('.nav-bar')
        addClass(navBar, 'disappear')
        _this.disappear = true
      }, 300)
    },
    removeDisappear() {
      if (this.disappearTimer) {
        clearInterval(this.disappearTimer)
      }
      if (!this.disappear) {
        return
      }
      // remove class 'disappear'
      const navBar = document.querySelector('.nav-bar')
      removeClass(navBar, 'disappear')
      this.disappear = false
    },
    scrollDisappear() {
      this.removeDisappear()
      if (document.documentElement.scrollTop === 0) {
        this.addDisappear()
      }
    },
    disappearListener() {
      const navBar = document.querySelector('.nav-bar')
      navBar.addEventListener('mouseenter', this.removeDisappear)
      navBar.addEventListener('mouseleave', this.addDisappear)

      const popper = document.querySelector('.el-popper')
      popper.addEventListener('mouseenter', this.removeDisappear)
      popper.addEventListener('mouseleave', this.addDisappear)

      window.addEventListener('scroll', this.scrollDisappear)
    },
    removeDisappearListener() {
      const navBar = document.querySelector('.nav-bar')
      navBar.removeEventListener('mouseenter', this.removeDisappear)
      navBar.removeEventListener('mouseleave', this.addDisappear)

      const popper = document.querySelector('.el-popper')
      popper.addEventListener('mouseenter', this.removeDisappear)
      popper.addEventListener('mouseleave', this.addDisappear)

      window.removeEventListener('scroll', this.scrollDisappear)
    },
    disappearPage() {
      if (!this.isDisappearPage) {
        this.isDisappearPage = true
        this.disappearListener()
        this.addDisappear()
      }
    },
    undisappearPage() {
      if (this.isDisappearPage) {
        this.isDisappearPage = false
        this.removeDisappearListener()
        this.removeDisappear()
      }
    }
  },
  created() {
    getTypes()
      .then(res => {
        this.types = res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  mounted() {

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

@keyframes infinite-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.el-menu-item,
.el-submenu {
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

  span.no {
    display: inline-block;
    color: skyblue;
    animation: 3s linear infinite-rotate infinite;
  }

}

.name-col {
  font-size: 23px;
  font-weight: bolder;
  margin-left: 10px;
}

.name-col span {
  padding: 2.5px;
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

  &.disappear {
    background: rgba(0, 0, 0, 0.05);

    .nav-col {
      visibility: hidden;
      transform: translateX(80px);
    }
  }
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
  padding: 100px 350px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  z-index: 20;
}

div.input {
  position: relative;

  /deep/ .el-input__inner {
    font-size: 16px;
    color: #fe9600;
    font-family: serif;
    padding: 15px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
    border: none;

    :focus {
      outline: none;
      border: none;
    }
  }
}

div.data-container {
  height: 400px;
  overflow: auto;
  div.info {
    background: #fefefe;
    text-align: left;
    padding: 5px 15px;
    color: #ff8198;
    font-size: 15px;
    font-family: serif;

    border-bottom: rgb(230, 230, 230) 1px solid;
  }
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

.el-menu-item:hover,
.el-submenu:hover {
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

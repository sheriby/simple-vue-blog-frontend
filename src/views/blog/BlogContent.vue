<template>
  <div class="blog-content" v-highlight>
    <el-row>
      <el-col :span="20">
        <div v-html="content" class="content"></div>
      </el-col>
      <el-col :span="4" class="toc-col">
        <div class="toc"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tocbot from 'tocbot'
import 'tocbot/dist/tocbot.css'
import { highlightBlock } from 'highlight.js'
import clipboard from 'clipboard'

export default {
  name: 'BlogContent',
  props: {
    content: String
  },
  data() {
    return {
      html: ''
    }
  },
  methods: {
    // init the code block wrapper title such as JAVA/CSS and so on
    initLang() {
      document.querySelectorAll('pre code').forEach(block => {
        const lang = block.classList[0]
        if (lang !== null && lang.startsWith('language-')) {
          block.setAttribute('data-lang', lang.split('-')[1].toUpperCase())
        } else {
          block.setAttribute('data-lang', 'TEXT')
        }
      })

      document.querySelectorAll('pre').forEach(pre => {
        // const height = pre.offsetHeight + 2
        // pre.style.height = height + 'px'
        pre.onclick = event => {
          const target = event.target
          if (target.tagName === 'CODE') {
            if (target.parentNode.className === '') {
              target.parentNode.className = 'full-screen'
              document.body.style.overflow='hidden'
              pre.style.width = ''
              pre.style.height = ''
            } else {
              target.parentNode.className = ''
              document.body.style.overflow = 'auto'
              // pre.style.width = width + 'px'
              // pre.style.height = height + 'px'
            }
          }
          return false

        }
        if (!pre.querySelector('a.copy')) {
          const a = document.createElement('a')
          const i = document.createElement('i')
          i.className = 'el-icon-document'
          a.appendChild(i)
          a.className = 'copy'
          pre.appendChild(a)
        }
      })

      const clip = new clipboard('pre a.copy', {
        text(trigger) {
          const res = trigger.parentNode.innerText.
            replace(/\n\n/g, '\n').replace(/\n\t/g, '\n').
            replace(/^\t/, '')

          return res 
        }
      })

      clip.on('success', () => {
        this.$message({
          message: '复制成功',
          type: 'success'
        })
      })

      clip.on('error', () => {
        this.$message.error('复制失败')
      })
    }
  },
  mounted() {
    // highlight your code
    window.hljs.initHighlightingOnLoad();
    // highlight number
    // NOTICE:
    // in App.vue => window.hljs = hljs
    window.hljs.initLineNumbersOnLoad();
    // init code block wrapper tille after highlight.js has loaded

    // generate the index of the blog
    tocbot.init({
      tocSelector: 'div.toc',
      contentSelector: 'div.content',
      headingSelector: 'h1, h2, h3, h4, h5, h6'
    })

    const toc = document.querySelector('div.toc')

    let timer = null

    window.addEventListener('scroll', () => {
      if (timer) {
        clearInterval(timer)
      }
      timer = setTimeout(() => {
        const h = document.documentElement.scrollTop
        if (h > 400) {
          toc.className = 'toc toc-fixed'
        } else {
          toc.className = 'toc'
        }
      }, 10)
    })

  },
  updated() {
    // rerender the hljs and tocbot
    document.querySelectorAll('pre code').forEach(block => {
      window.hljs.highlightBlock(block)
      window.hljs.lineNumbersBlock(block)
    })


    tocbot.init({
      tocSelector: 'div.toc',
      contentSelector: 'div.content',
      headingSelector: 'h1, h2, h3, h4, h5, h6'
    })

    this.initLang() 
  }
}
</script>

<style lang="less" scoped>
div.blog-content {
  margin-bottom: 50px;
}

div.content {
  width: 100%;
  color: #404040;
  font-weight: 300;

  line-height: 1.8;
  font-family: 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc',
    'PT Serif', 'SongTi SC', 'MicroSoft Yahei', Georgia, serif;

  & /deep/ h1,
  & /deep/ h2,
  & /deep/ h3,
  & /deep/ h4,
  & /deep/ h5,
  & /deep/ h6 {
    font-weight: 300;
  }

  & /deep/ table.hljs-ln {
    width: 100%;
  }

  & /deep/ code:not([class]) {
    display: inline-block;
    color: #e67474;
    background: rgba(254, 250, 199, 0.8);
  }

  & /deep/ code[class*='language-'], 
  & /deep/ code.hljs {
    // margin: 25px 0;
    width: 100%;
    border-radius: 8px;

    // box-shadow: rgba(0, 0, 0, 0.4) 0 10px 30px 0;
    // border-radius: 5px;

    &::before {
      content: attr(data-lang);
      color: #fff;
      position: absolute;
      left: 0;
      margin-top: -30px;
      width: 100%;
      font-weight: 900;
      letter-spacing: 1px;
      text-align: center;
      z-index: 2;
      cursor: pointer;
    }
  }

  & /deep/ h2 {
    margin: 18.67px 0;

    &::after {
      content: url('../../assets/img/tag.svg');
      margin-left: 5px;
      vertical-align: middle;
      display: inline-block;
    }
  }

  & /deep/ h3 {
    margin: 17.55px 0;
    padding-bottom: 5px;
    border-bottom: 1px dashed #aaaaaa;
    color: #666666;

    &::before {
      content: '#';
      color: #ff6d6d;
      size: 30px;
      display: inline-block;
      padding-right: 5px;
    }
  }

  & /deep/ h4::before {
    content: '##';
    margin: 15px 0;
    color: #ff6d6d;
    font-weight: bolder;
    size: 14px;
    display: inline-block;
    padding-right: 5px;
  }

  & /deep/ .hljs-ln-n:not(.hljs-ln-line) {
    padding-left: 0px !important;
    color: #888f96;
    text-align: right;
    width: 15px !important;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & /deep/ .hljs-ln-line.hljs-ln-numbers {
    width: 15px !important;
    padding-right: 10px !important;
  }

  & /deep/ .hljs-ln-line:hover {
    background: #333333;
  }

  & /deep/ ul, & /deep/ ol {
    border: rgba(0, 0, 0, 0.1) 1px solid;
    border-radius: 10px;
    padding: 20px 40px;
    margin-top: 15px;
    margin-bottom: 15px;

    li {
      margin: 5px 0;
    }
  }

  & /deep/ blockquote {
    padding-left: 30px;
    border-left: 5px #fe9600 solid;
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.2, 0.2, 0.2);
      transform: scale3d(0.2, 0.2, 0.2);
    }

    40% {
      opacity: 1;
    }

    70% {
      -webkit-transform: scale3d(1.0, 1.0, 1.0);
      transform: scale3d(1.0, 1.0, 1.0);
    }

    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }

  }


  & /deep/ pre {
    border-top: 25px #21252b solid;
    position: relative;
    overflow: visible;

    // transition: height 0.3s ease-in-out;
    &.full-screen {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      border-radius: 0;
      margin: 0;
      animation: zoomIn .5s linear;

      &::before {
        position: fixed;
      }

      code::before {
        position: fixed;
        width: 100%;
      }
    }

    a {
      color: #ffffff;
      font-size: 18px;
      position: absolute;
      right: 15px;
      top: -25px;
      z-index: 4;

      &:hover {
        cursor: pointer;
        color: #fe9600;
      }
    }
  }

  & /deep/ pre::before {
    content: " ";
    position: absolute;
    background: #fc625d;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    margin-left: 12px;
    margin-top: -18px;
    z-index: 3;
  }
}

div.toc {
  margin-top: 5px;
  margin-left: 5px;
}

div.toc-fixed {
  position: fixed;
  top: 61px;
}

div.content /deep/ p {
  letter-spacing: 1px;
}

/deep/ a.toc-link {
  display: inline-block;
  margin: 5px 0;
  letter-spacing: 1px;
  font-size: 13px;
}

/deep/ .is-active-link {
  color: #fe9600;
}
</style>

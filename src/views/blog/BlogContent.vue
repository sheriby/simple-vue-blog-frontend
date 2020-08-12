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
  mounted() {
    window.hljs.initHighlightingOnLoad();
    window.hljs.initLineNumbersOnLoad();

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
      }, 100)
    })
  },
  updated() {
    document.querySelectorAll('pre code').forEach(block => {
      window.hljs.highlightBlock(block)
      window.hljs.lineNumbersBlock(block)
    })

    tocbot.init({
      tocSelector: 'div.toc',
      contentSelector: 'div.content',
      headingSelector: 'h1, h2, h3, h4, h5, h6'
    })
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

  & /deep/ code:not([class]) {
    display: inline-block;
    color: #e67474;
    background: rgba(254, 250, 199, 0.8);
  }

  & /deep/ code[class*='language-'] {
    // margin: 25px 0;
    width: 100%;

    // box-shadow: rgba(0, 0, 0, 0.4) 0 10px 30px 0;
    // border-radius: 5px;
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
    text-align: left;
    padding-right: 12px !important;
    color: #888f96;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  & /deep/ .hljs-ln-line:hover {
    background: #333333;
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

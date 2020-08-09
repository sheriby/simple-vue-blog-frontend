import hljs from 'highlight.js'
import 'highlightjs-line-numbers.js'
import '../assets/css/highlight.css'

const Highlight = {}
Highlight.install = function(Vue) {
  Vue.directive('highlight', {
    inserted: function(el) {
      const blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightBlock(blocks[i])
      }
    },
    componentUpdated: function(el) {
      const blocks = el.querySelectorAll('pre code')
      for (let i = 0; i < blocks.length; i++) {
        hljs.highlightBlock(blocks[i])
      }
    }
  })
}

export default Highlight

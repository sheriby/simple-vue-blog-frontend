<template>
  <div class="link">
    <cover :cover="cover">
      <h2 class="header" slot="cover-content">友人帐</h2>
    </cover>

    <div class="container">
      <div class="info">
        <div>欢迎交换友链 ꉂ(ˊᗜˋ)</div>
        <div>
          请留言告诉我你的：
          <ul>
            <li>1、名字</li>
            <li>2、一句话介绍（熟人我会亲自帮写的）</li>
            <li>3、主页地址</li>
            <li>4、头像（HTTPS*，可在评论区上传）</li>
          </ul>
        </div>
        <div>
          For Example：
          <ul>
            <li>★ Name: Hony Sher</li>
            <li>★ Bio: 好少年光芒万丈</li>
            <li>★ URL: https://sheriby.github.io</li>
            <li>★ Avatar: 获取嵌入代码</li>
          </ul>
        </div>
      </div>
      <div class="tip">
        ※ 为保证友链质量，今后新申请的友链将经过筛选，请在收到我的回复邮件后再于贵站添加本站链接。原则上过去已添加友链不会轻易删除，如遇死链、改变网站用途（友链主要针对的是同类的博客），将单独移至“阵亡将士”分类中，下次清理时未整改的将移除；如遇盗版、破解、网页植入挖矿脚本、极低质量内容、单方面移除本站链接，将直接移除，恕不另行通知。
      </div>

      <div class="list">
        <comment-list :comments="messages" :commentCount="count" @reply="reply" />
      </div>
      <div class="form">
        <comment-form ref="form" @submit="submit"/>
      </div>
      <detail-footer/>

    </div>
  </div>
</template>

<script>
  import Cover from '@/components/cover/Cover'
  import DetailFooter from '@/components/footer/DetailFooter'
  import CommentForm from '@/components/comment/CommentForm'
  import CommentList from '@/components/comment/CommentList'

  export default {
    name: "Link",
    components: {
      Cover, CommentForm, CommentList, DetailFooter
    },
    data() {
      return {
        cover: 'https://cdn.jsdelivr.net/gh/sheriby/cdn@1.12/img/cover/15.jpg'
      }
    }
  }
</script>

<style lang="less" scoped>
  h2.header {
    font-size: 45px;
    color: #ffffff;
    text-shadow: rgba(0, 0, 0) 2px 2px 10px;
    letter-spacing: 7px;
    text-align: center;
    padding-top: 200px;
    font-weight: 300;
  }

  div.container {
    max-width: 65%;
    margin: 40px auto;

    ul {
      list-style: none;
      li {
        margin: 5px 0;
      }
    }

    div.info div {
      margin: 30px 0;
      font-size: 15px;
    }

    div.tip {
      font-size: 13px;
      color: #888888;
      letter-spacing: 0.1px;
      line-height: 1.4;
    }

    div.list {
      margin-top: 100px;
    }
  }
</style>
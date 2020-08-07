<template>
  <div class="comment-item">
    <div class="user-info">
      <div class="avatar">
        <img :src="avatarSrc">
      </div>
      <div class="info">
        <div class="name">{{name}}</div>
        <div class="date-info">
          <i class="el-icon-date"></i>
          <span class="date">
            {{date}}
          </span>
        </div>
      </div>
    </div>
    <div class="content">
      <span v-if="atNotEmpty" class="at">
        @{{at}}
      </span>
      {{content}}
    </div>
    <div class="reply">
      <el-button type="success" size="mini">
        Reply
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommentItem",
    props: {
      qq: Number,
      name: String,
      date: String,
      content: String,
      at: String
    },
    computed: {
      avatarSrc() {
        return `http://q1.qlogo.cn/g?b=qq&nk=${this.qq}&s=640`
      },
      atNotEmpty() {
        return this.at !== undefined && this.at !== null && this.at.length !== 0
      }
    },
  }
</script>

<style lang="less" scoped>
  div.comment-item {
    position: relative;
    width: 100%;
    height: 120px;
    border-bottom: #efefef 1px solid;
    padding: 10px;
    margin: 10px 0;
  }

  div.user-info {
    div.avatar, div.info {
      display: inline-block;
    }
  }

  div.info {
    margin-left: 10px;

    div.name {
      font-size: 17px;
      font-family: serif;
      color: #fe9600;
    }

    div.date-info {
      color: #aaaaaa;
      font-size: 11px;
      margin-top: 5px;
    }
  }

  div.avatar {
    height: 40px;

    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      vertical-align: bottom;
      transition: 0.8s ease-in-out;
    }
  }

  div.content {
    margin-top: 25px;
    font-size: 15px;
  }

  span.at {
    color: #99ce00;
    font-family: serif;
  }

  div.reply .el-button {
    visibility: hidden;
    position: absolute;
    right: 60px;
    top: 20px;
    font-family: serif;
    font-size: 13px;
    background-color: #fe9600;
    border-color: #fe9600;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 3px 3px;
    border-radius: 5px;

    &:active {
      top: 22px;
    }
  }

  div.comment-item:hover {

    div.avatar img {
      transform: rotate(360deg);
      transition: 0.8s ease-in-out;
    }

    div.reply .el-button {
      visibility: visible;
    }
  }


</style>
<template>
  <div class="comment-form">
    <el-form ref="commentForm" :model="comment" :rules="commentRules">
      <el-form-item prop="content">
        <el-input class="content" type="textarea"
                  :rows="6" v-model="comment.content"></el-input>
      </el-form-item>

      <el-row :gutter="60">
        <el-col :span="9">
          <el-form-item prop="qq">
            <el-popover ref="popover" placement="top"
                        trigger="focus" content="QQ主要是用来获取你的头像的嗷~~"></el-popover>
            <el-input v-popover:popover placeholder="请输入你的QQ" v-model.number="comment.qq">
              <template slot="prepend">QQ:</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item prop="name">
            <el-input placeholder="请输入你的昵称" v-model="comment.name">
              <template slot="prepend">Name:</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button class="submit" @click="submit('commentForm')">
              BiuBiuBiu~
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
    <span class="flag">
      你是我一生只会遇见一次的惊喜...
    </span>
  </div>
</template>

<script>
  export default {
    name: "CommentForm",
    data() {
      return {
        comment: {},
        commentRules: {
          content: [
            {required: true, message: '你还没有输入评论内容呢～', trigger: 'blur'}
          ],
          qq : [
            {required: true, message: '不输入秋秋无法获取头像呢~', trigger: 'blur'},
            {type: 'number', message: '再怎么样也要输入数字吧~', trigger: 'blur'},
            {type: 'number', min: 10001, max: 9999999999, message: '秋秋就没有这个位数好么~', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '做人呢，就是要有名有姓的啦~', trigger: 'blur'},
            {max: 20, message: '阁下的名字为啥这么长~', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit')
          } else {
            console.log('error submit')
            return false
          }
        })
      }
    },
    mounted() {
      const area = document.querySelector('textarea')
      const flag = document.querySelector('span.flag')

      flag.addEventListener('click', () => {
        area.focus()
      })
      area.addEventListener('focus', () => {
        flag.className = 'flag flag-show'
      })

      area.addEventListener('focusout', () => {
        if (area.innerText === '') {
          flag.className = 'flag'
        }
      })

    }
  }
</script>

<style lang="less" scoped>

  div.comment-form /deep/ textarea {
    padding: 20px 15px;
    background: url("../../assets/img/comment-bg.png") no-repeat right;
    background-size: contain;
    background-clip: border-box;
    font-size: 16px;
    color: #666666;

    &::-webkit-input-placeholder {
      color: #aaaaaa;
    }

    &:focus {
      border: 1px #fe9600 solid;
    }

    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;

  }

  button.submit {
    background: #fe9600;
    color: #ffffff;
    border: none;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.3) 1px 3px 3px;

    &:active {
      top: 2px;
    }
  }

  /deep/ input.el-input__inner {
    &:focus {
      border-color: #fe9600;
    }
  }

  div.comment-form {
    position: relative;
  }

  span.flag {
    color: #555555;
    padding: 2px 5px;
    border-radius: 1px;
    font-size: 12px;
    /*opacity: 0;*/

    position: absolute;
    top: -7px;
    left: 20px;

    transform: translate(25px, 31px) scale(1.3, 1.2);
    transition: transform ease-in-out .5s, color ease-in-out .5s;
  }

  span.flag-show {
    color: white;
    background: #fe9600;
    opacity: 1;
    transform: translate(0, 0) scale(1);
    transition: ease-in-out .5s;
  }

</style>
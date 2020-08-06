<template>
  <div id="blog-donate">
    <el-popover
        placement="bottom"
        width="280"
        trigger="hover">
      <div class="qrcode">
        <el-row>
          <el-col :span="12">
            <div class="qrcode-img">
              <img src="../../assets/img/qrcode/WechatPayQr.png">
              <h4 class="wechat">微信</h4>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="qrcode-img">
              <img src="../../assets/img/qrcode/AliPayQR.jpg">
              <h4 class="alipay">支付宝</h4>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-button circle slot="reference" class="pay">
        赏
      </el-button>
    </el-popover>
  </div>
</template>

<script>
  export default {
    name: "BlogDonate"
  }
</script>

<style lang="less" scoped>

  div#blog-donate {
    text-align: center;
  }

  button.pay {
    background: #d34836;
    color: white;
    font-weight: 300px;
    font-size: 18px;
  }

  div.qrcode-img {
    text-align: center;
    img {
      width: 120px;
    }

    .wechat, .alipay {
      letter-spacing: 3px;
      text-shadow: rgba(0, 0, 0, 0.3) 1px 3px 3px;
    }

    .wechat {
      color: #04b302;
    }

    .alipay {
      color: deepskyblue;
    }
  }
</style>
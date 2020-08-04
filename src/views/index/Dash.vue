<template>
  <div id="dash">
    <div id="dash-text">
      <i class="el-icon-s-cooperation"></i>
      <span>START:DASH!!</span>
    </div>
    <div id="dash-container">
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="dash">
            <div class="img">
              <img src="../../assets/img/dash/dash1.png">
            </div>
            <div class="info">
              <h2>Sakura</h2>
              <p>Sakura Hexo主题使用教程</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="dash">
            <div class="img">
              <img src="../../assets/img/dash/dash2.jpg">
            </div>
            <div class="info">
              <h2>Bilibili</h2>
              <p>Sher的Bilibili视屏</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="dash">
            <div class="img">
              <img src="../../assets/img/dash/dash3.jpg">
            </div>
            <div class="info">
              <h2>Sher的万事屋</h2>
              <p>技术服务</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Dash"
  }
</script>

<style lang="less" scoped>

  #dash {
    margin: 40px auto;
    width: 800px;
  }

  #dash-text {
    height: 30px;
    border-bottom: #ddd 1px dashed;

    span {
      display: inline-block;
      padding-left: 7px;
    }
  }

  #dash-container {
    height: 160px;
    text-align: center;
    margin-top: 20px;
  }

  #dash-container img {
    width: 100%;
    height: 160px;
  }

  div.img {
    border-radius: 10px;
    border: #e6e6e6 1px solid;

    overflow: hidden;
  }

  div.dash img {
    transition: all 0.3s ease-in-out;
  }

  div.dash:hover {
    img {
      transition: all 0.3s ease-in-out;
      transform: scale(1.2);
    }

    div.info {
      visibility: visible;
      overflow: hidden;

      h2 {
        transition: 0.3s ease-in-out;
        transform: translateX(0);
      }

      p {
        transition: 0.3s ease-in-out;
        transform: translateX(0);
      }
    }

  }

  div.dash {
    position: relative;
  }

  div.info {
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #e6e6e6;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;

    h2 {
      margin: 30px 0;
      padding: 10px 0;
      background: rgba(0, 0, 0, 0.7);
      text-transform: uppercase;
      transform: translateX(-100%);
      transition: 0.3s ease-in-out;
    }

    p {
      font-size: 13px;
      font-style: italic;
      transform: translateX(100%);
      transition: 0.3s ease-in-out;
    }

  }


</style>
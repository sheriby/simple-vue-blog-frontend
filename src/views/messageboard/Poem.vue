<template>
  <div class="poem">
    <div class="container">
      <div class="content">
        <div class="wrapper">
          <div class="poem-left"></div>
          <h1>念两句诗</h1>
          <div class="poem-right"></div>
        </div>
        <div class="poem-main">
          <h2 class="poem-content">湖上西风斜日，荷花落尽红英。</h2>
          <h3 class="poem-author">【宋代】晏殊《破阵子》</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Poem"
  }
</script>

<style lang="less" scoped>

  div.content {
    text-align: center;
    border: 2px #aaaaaa solid;
    border-top: 0;
    font-family: serif;
    position: relative;
    height: 150px;
    margin-bottom: 60px;

    div.wrapper {
      width: 100%;
    }

    h1 {
      position: absolute;
      display: inline-block;
      font-size: 30px;
      letter-spacing: 3px;
      width: 20%;
      top: -30px;
      left: 40%;
    }

    div.poem-left {
      position: absolute;
      height: 2px;
      width: 30%;
      left: 0;
      background: #aaaaaa;
    }

    div.poem-right {
      position: absolute;
      height: 2px;
      width: 30%;
      right: 0;
      background: #aaaaaa;
    }

    div.poem-main {
      padding-top: 30px;
      line-height: 2.5;

      .poem-content {
        font-size: 25px;
      }

      .poem-author {
        font-size: 15px;
        color: #888888;
      }
    }
  }
</style>
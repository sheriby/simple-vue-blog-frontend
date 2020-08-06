<template>
  <div id="license">
    <div class="container">
      <i class="el-icon-share"></i>
      <span class="license">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "License"
  }
</script>

<style lang="less" scoped>

  div#license {
    margin: 40px 0;
    width: 100%;
  }

  div.container {
    width: 100%;
    height: 80px;
    border-bottom: 1px #afafaf dashed;
    border-top: 1px #aaaaaa dashed;
    color: #b3b3b3;

    display: flex;
    justify-content: center;
    align-items: center;

    span.license {
      margin-left: 5px;

      &:hover {
        color: #999999;
      }
    }
  }

</style>
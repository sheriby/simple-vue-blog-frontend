<template>
  <div id="cover">
    <div class="header-container" :style="{backgroundImage: 'url(' + cover + ')'}">
      <slot name="cover-content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogCover",
    props: {
      cover: String
    }
  }
</script>

<style lang="less" scoped>
  div.header-container {
    width: 100%;
    height: 400px;
    background: no-repeat center;
    background-size: cover;
    margin-top: 61px;

    line-height: 1.4;

  }

</style>

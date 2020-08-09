<template>
  <div class="tag-item" @click="tagItemClick">
    <span class="name">{{tag.name}}</span>
    <span class="count">
      {{tag.blogCount}}
      <span class="triangle"></span>
    </span>
  </div>
</template>

<script>
  export default {
    name: "TagItem",
    props: {
      tag: Object
    },
    methods: {
      tagItemClick() {
        this.$emit('itemclick', this.tag)
      }
    }
  }
</script>

<style lang="less" scoped>

  div.tag-item {
    display: inline-block;
    height: 35px;
    /*width: 130px;*/
    margin: 10px;
    border-radius: 7px;
    line-height: 35px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 3px;

    position: relative;
    &:active {
      top: 2px;
    }


    &:hover {
      cursor: pointer;
    }

    span.name {
      padding: 0 13px;
      display: inline-block;
      height: 100%;
      text-align: center;
      color: #ffffff;
      background: #fe9600;
      font-size: 15px;
      text-shadow: rgba(0, 0, 0, 0.3) 1px 1px 1px;
    }

    span.count {
      padding: 0 15px;
      display: inline-block;
      width: 20%;
      text-align: center;
      color: deeppink;
      position: relative;

      .triangle {
        width: 0;
        height: 0;
        border: 8px solid;
        border-color: transparent transparent #ffffff;
        transform: rotate(-90deg);
        position: absolute;
        top: 8px;
        left: -16px;
      }
    }
    border: 1px #fe9600 solid;
  }

</style>
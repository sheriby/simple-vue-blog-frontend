<template>
  <div class="search-item" @click="handleClick">
    <div class="data">
      <span>{{ search.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchItem',
  props: {
    search: Object,
    type: String
  },
  methods: {
    handleClick() {
      this.$emit('click', {type: this.type, id: this.search.id})
    }
  }
}
</script>

<style lang="less">

  div.search-item {
    height: 40px;
    width: 100%;
    margin: 0 auto;
    padding: 0 25px;
    background: #fefefe;
    text-align: left;
    line-height: 40px;

    font-size: 14px;
    font-weight: 300;
    color: #999;

    div.data {
      border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
    }

    &:hover {
      cursor: pointer;
      background: #f1f1f1;
    }
  }
</style>

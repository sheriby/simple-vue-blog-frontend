<template>
  <div class="detail-footer">
    <author-info/>
    <blog-footer/>
  </div>
</template>

<script>
  import AuthorInfo from '@/components/footer/AuthorInfo'
  import BlogFooter from '@/components/footer/BlogFooter'
  export default {
    name: "DetailFooter",
    components: {BlogFooter, AuthorInfo}
  }
</script>

<style lang="less" scoped>
  div.detail-footer {
    margin-top: 120px;
  }
</style>
<template>
   <div id="welcome">
     <div class="container">
       <i class="el-icon-postcard"></i>
       <span>欢迎来到Sher的小博客!</span>
     </div>
   </div>
</template>

<script>
  export default {
    name: "Welcome"
  }
</script>

<style scoped>

  #welcome {
    width: 800px;
    height: 70px;
    margin: 40px auto;
    border-radius: 10px;
    border: #e6e6e6 1px dashed;
    text-align: left;
    padding: 10px;
  }

  .container {
    line-height: 50px;
    margin-left: 10px;
  }

  .container span {
    display: inline-block;
    padding-left: 10px;

    color: #aaaaaa;
    letter-spacing: 1px;
  }

</style>
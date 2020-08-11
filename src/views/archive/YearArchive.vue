<template>
  <div class="year-archive">
    <div class="container">
      <div class="year">
        <span>{{year}}年</span>
      </div>
      <div class="months">
        <month-archive v-for="(value, key, index) in months" :key="index"
                       :month="key" :blogs="value"/>
      </div>
    </div>
  </div>
</template>

<script>
  import MonthArchive from '@/views/archive/MonthArchive'
  export default {
    name: "YearArchive",
    components: {MonthArchive},
    props: {
      year: String,
      months: Object
    },
    methods: {
      allshow() {
        this.$children.forEach(x => x.show = true)
      },
      allhide() {
        this.$children.forEach(x => x.show = false)
      }
    }
  }
</script>

<style lang="less" scoped>

  div.container {
    div.year {
      padding-left: 80px;
      padding-top: 20px;

      span {
        font-size: 18px;
        font-family: serif;
        color: #222222;
        font-weight: bolder;
      }
    }
  }

</style>
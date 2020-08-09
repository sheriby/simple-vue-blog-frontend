<template>
  <div id="blog-post">
    <div class="container">
      <el-row v-if="notEmpty(previous) && notEmpty(next)" class="allrow">
        <el-col :span="12">
          <div class="previous" @click="toPrev">
            <img :src="previous.cover">
            <div class="info preinfo">
              <div class="label" @click="toPrev">
                <div class="header">PREVIOUS POST</div>
                <div class="title">{{previous.title}}</div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="next">
            <img :src="next.cover" @click="toNext">
            <div class="info nextinfo">
              <div class="label" @click="toNext">
                <div class="header">NEXT POST</div>
                <div class="title">{{next.title}}</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div v-if="notEmpty(previous) && !notEmpty(next)">
        <div class="previous" @click="toPrev">
          <img :src="previous.cover">
          <div class="info preinfo">
            <div class="label" @click="toPrev">
              <div class="header">PREVIOUS POST</div>
              <div class="title">{{previous.title}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!notEmpty(previous) && notEmpty(next)">
        <div class="next" @click="toNext">
          <img :src="next.cover">
          <div class="info nextinfo">
            <div class="label" @click="toNext">
              <div class="header">NEXT POST</div>
              <div class="title">{{next.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogPost",
    props: {
      previous: {
        type: Object,
        default() {
          return {}
        }
      },
      next: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      notEmpty(obj) {
        return obj !== undefined && obj !== null && Object.keys(obj).length !== 0
      },
      toPrev() {
        this.$router.push('/blog/' + this.previous.id)
      },
      toNext() {
        this.$router.push('/blog/' + this.next.id)
      }
    }
  }
</script>

<style lang="less" scoped>

  div#blog-post {
    margin: 40px 0;
  }

  div.previous, div.next {
    cursor: pointer;
    height: 150px;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(50%);

      &:hover {
        filter: brightness(70%);
      }
    }

    div.header {
      font-size: 18px;
      font-family: serif;
      color: #dedede;
    }

    div.title {
      margin: 10px 0;
      color: #ffffff;
    }

    div.info {
      position: absolute;
      top: 40px;

      &.preinfo {
        left: 40px;
      }
      &.nextinfo {
        right: 40px;
      }
    }
  }
</style>
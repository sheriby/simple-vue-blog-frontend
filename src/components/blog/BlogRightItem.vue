<template>
  <div class="blog-item" @click="blogdetail">
    <el-row>
      <el-col :span="11" class="desc">
        <div class="desc-container">
          <div class="date">
            <i class="el-icon-date"></i>
            <span>{{date}}</span>
            <i class="el-icon-view"></i>
            <span>{{view}}</span>
          </div>
          <div class="title">
            <h3>{{title}}</h3>
          </div>
          <div class="tagtype">
            <div class="tags">
              <i class="el-icon-collection-tag"></i>
              <span v-for="(tag, index) in tags" :key="index">
                {{tag.name}}
                <span v-if="index !== tags.length-1" class="dot">·</span>
              </span>
            </div>
            <div class="type">
              <i class="el-icon-folder"></i>
              <span @click.stop="toType(type.id)">{{type.name}}</span>
            </div>
          </div>
          <div class="desc-text">
            <p>{{desc}}</p>
          </div>
          <div class="more">
            <i class="el-icon-more"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="13" class="cover">
        <img :src="cover" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BlogRightItem",
  props: {
    id: Number,
    cover: String,
    date: String,
    view: Number,
    title: String,
    type: Object,
    tags: Array,
    desc: String,
  },
  methods: {
    blogdetail() {
      this.$router.push('/blog/' + this.id)
    },
    toType(id) {
      this.$router.push('/type/' + id)
    }
  }
};
</script>

<style lang="less" scoped>
.blog-item {
  width: 800px;
  height: 300px;

  margin: 40px auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
  opacity: 0;

  position: relative;

  &:active {
    top: 2px;
  }

  &:hover {
    cursor: pointer;
  }
}

@keyframes blog-item-show {
  0% {
    transform: translateY(70px);
  }
  100% {
    transform: translateY(0);
  }
}

.blog-item-show {
  opacity: 1;
  animation: blog-item-show ease-in-out 0.5s;
}

.blog-item:hover {
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.5);

  img {
    transition: all 0.5s ease-in;
    transform: scale(1.1);
  }
}

.el-row {
  height: 100%;
}

.el-col.cover {
  height: 100%;
  overflow: hidden;

  img {
    transition: all 0.5s ease-in-out;
    height: 100%;
  }
}

.el-col.desc {
  background: #fefefe;
  height: 100%;
}

div.desc-container {
  padding: 30px;
  text-align: left;
}

div.date {
  font-size: 13px;

  span {
    display: inline-block;
    padding-left: 5px;
  }

  i {
    margin-left: 10px;
  }
}

div.title {
  margin: 30px 0;
  color: #555555;
  letter-spacing: 1px;

  &:hover {
    color: #fe9600;
    cursor: pointer;
  }
}

div.tags,
div.type {
  display: inline-block;

  font-size: 13px;
}

div.tagtype {
  margin: 30px 0;
}

div.tags span {
  padding: 0 1px;
}

div.type {
  margin-left: 10px;
}

div.tags,
div.type {
  span {
    padding-left: 2px;
    .dot {
      padding: 0;
    }
  }
}

div.desc-text {
  font-size: 15px;

  color: #555555;
  letter-spacing: 1px;
  line-height: 1.4;
  margin: 20px 0;
}

div.more {
  font-size: 25px;

  i:hover {
    color: #fe9600;
    cursor: pointer;
  }
}

div.tagtype span:hover {
  color: #fe9600;
  cursor: pointer;
}
</style>
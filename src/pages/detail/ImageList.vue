<template>
  <div class="image-list">
    <div class="title border-bottom">
      <span class="iconfont icon-back" @click="$router.go(-1)"></span>
      <div class="inline">景区图片</div>
    </div>
    <div class="content flex-row">
      <div class="img" v-for="item in imgList" :key="item.id">
        <img :src="item.src">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default({
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.cityInfo)
  },
  computed: {
    ...mapState(['imgList', 'cityInfo'])
  },
  methods: {}
})
</script>

<style lang="less" scoped>
  .image-list {
    font-size: .16rem;
    .title {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      line-height: .44rem;
      text-align: center;
      background: #fff;
      .iconfont {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: .4rem;
        line-height: .44rem;
      }
      > div {
        margin: 0 auto;
      }
    }
    .content {
      position: absolute;
      top: .55rem;
      flex-wrap: wrap;
      padding: 0 .05rem 0 .1rem;
      .img {
        width: 50%;
        padding: 0 .05rem .05rem 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>

<template>
  <div class="image-list">
    <div class="title border-bottom">
      <span class="iconfont icon-back" @click="$router.go(-1)"></span>
      <div class="inline">景区图片</div>
    </div>
    <div class="content flex-row" :style="style">
      <div class="img" v-for="(item, index) in imgList" :key="item.id" @click="showGallery(index)">
        <img :src="item.src">
      </div>
    </div>
    <Gallery v-if="show" @close="handleClose" :index="index"></Gallery>
  </div>
</template>

<script>
import Gallery from './Gallery'
import {mapState} from 'vuex'
export default({
  components: {Gallery},
  data () {
    return {
      show: false,
      style: {
        overflow: 'auto'
      },
      index: 1
    }
  },
  mounted () {
    // console.log(this.cityInfo)
  },
  computed: {
    ...mapState(['imgList', 'cityInfo'])
  },
  watch: {
    show () {
      if (this.show) this.style.overflow = 'hidden'
      else this.style.overflow = 'auto'
    }
  },
  methods: {
    showGallery (index) {
      this.index = index
      this.show = true
      this.style.overflow = 'hidden'
    },
    handleClose () {
      this.show = false
      this.style.overflow = 'auto'
    }
  }
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
      z-index: 1;
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
      left : 0;
      right: 0;
      bottom: 0;
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

<template>
  <div class="icon-page flex-row">
    <swiper :options="options">
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div
          class="item flex-cloumn"
          v-for="icon in item"
          :key="icon.id"
          @click="jumpTo(icon)">
          <div class="img">
            <img :src="icon.src">
          </div>
          <p>{{icon.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default({
  props: {
    iconList: Array
  },
  data () {
    return {
      options: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((e, i) => {
        let n = Math.floor(i / 8)
        if (!pages[n]) pages[n] = []
        pages[n].push(e)
      })
      return pages
    }
  },
  mounted () {
  },
  methods: {
    jumpTo (item) {
      this.$router.push('/ticket?title=' + item.title)
    }
  }
})
</script>

<style lang="less">
  .icon-page {
    background: #fff;
    font-size: .14rem;
    padding: .1rem 0 .2rem;
    min-height: 2.16rem;
    .swiper-container-horizontal > .swiper-pagination-bullets {
      bottom: 0;
    }
    .item {
      float: left;
      width: 25%;
      text-align: center;
      margin-bottom: .2rem;
      .img {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 55%;
        margin-bottom: .05rem;
        img {
          width: 55%;
        }
      }
      p {
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>

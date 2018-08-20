<template>
  <div class="banner">
    <swiper :options="options" ref="banner">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img :src="item.src">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default({
  components: {swiper, swiperSlide},
  props: {
    bannerList: Array
  },
  data () {
    return {
      options: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        speed: 1000
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.banner.swiper
    }
  },
  activated () {
    this.swiper.on('click', (e) => {
      console.log(e)
    })
  },
  methods: {
    show (item) {
      console.log(item.id)
    }
  }
})
</script>

<style lang="stylus" scoped>
  .banner
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 26.6%;
    img
      width: 100%;
</style>

<template>
  <div class="gallery flex-column" @click="closeGallery">
    <div class="wrapper">
      <swiper :options="options" ref="gallery">
        <swiper-slide v-for="img in imgList" :key="img.id">
          <img :src="img.src">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {mapState} from 'vuex'
export default({
  components: {swiper, swiperSlide},
  data () {
    return {
      options: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: false,
        observer: true,
        observeParents: true
      }
    }
  },
  props: {
    index: Number
  },
  computed: {
    swiper () {
      return this.$refs.gallery.swiper
    },
    ...mapState(['imgList'])
  },
  mounted () {
    this.swiper.slideTo(this.index, 0, false)
  },
  methods: {
    closeGallery () {
      this.$emit('close')
    }
  }
})
</script>

<style lang="less">
  .gallery {
    width: 100%;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    z-index: 10;
    .wrapper {
      width: 100%;
      .swiper-container {
        /*overflow-x: hidden;
        overflow-y: inherit;*/
        overflow: inherit;
        width: 100%;
        .swiper-slide {
          width: 100%;
          height: 0;
          overflow: hidden;
          padding-bottom: 68.57%;
          img {
            width: 100%;
          }
        }
        .swiper-pagination-fraction {
          color: #fff;
          bottom: -.5rem;
        }
      }
    }
  }
</style>

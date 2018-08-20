<template>
  <div class="index bg-color">
    <Header></Header>
    <Banner :bannerList="bannerList"></Banner>
    <Icon :iconList="iconList"></Icon>
    <div class="position flex-row border-top">
      <div class="pos-item border-right">
        <span class="fa fa-map-marker"></span>
        <span>定位失败</span>
      </div>
      <div class="pos-item">
        <span class="fa fa-tint"></span>
        <span>玩水季</span>
      </div>
    </div>
    <div class="position flex-row">
      <div class="pos-item border-right">
        <img src="/static/images/index/bg1.png" alt="">
      </div>
      <div class="pos-item">
        <img src="/static/images/index/bg2.png" alt="">
      </div>
    </div>
    <WeekPopular :popularList="popularList"></WeekPopular>
    <Guess :guessList="guessList"></Guess>
    <Weekend :weekendList="weekendList"></Weekend>
  </div>
</template>

<script>
import Header from './components/Header'
import Banner from './components/Banner'
import Icon from './components/Icon'
import WeekPopular from './components/WeekPopular'
import Guess from './components/Guess'
import Weekend from './components/Weekend'
export default({
  components: {Header, Banner, Icon, WeekPopular, Guess, Weekend},
  data () {
    return {
      info: {},
      bannerList: [],
      iconList: [],
      popularList: [],
      guessList: [],
      weekendList: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$axios.get('/api/index.json').then(res => {
        if (res.data.ret) {
          this.info = res.data.data
          this.bannerList = this.info.banner
          this.iconList = this.info.icon
          this.popularList = this.info.weekPopular
          this.guessList = this.info.guess
          this.weekendList = this.info.weekend
        }
      })
    }
  }
})
</script>

<style lang="less" scoped>
  .index {
    font-size: .16rem;
    .position {
      background: #fff;
      font-size: .14rem;
      color: #2d2d2d;
      margin-bottom: .1rem;
      .pos-item {
        width: 50%;
        line-height: .4rem;
        text-align: center;
        img {
          width: 80%;
        }
      }
    }
  }
</style>

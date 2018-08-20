<template>
  <div class="header header-color">
    <router-link tag="div" class="back" :to="'/'">
      <span class="fa fa-angle-left"></span>
    </router-link>
    <div class="title">城市选择</div>
    <div class="choose">
      <span @click="change()" :class="active === 'in' ? 'active' : ''">境内</span><span @click="change()" :class="active === 'out' ? 'active' : ''">境外·港澳台</span>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default({
  props: {
    info: Object,
    hot: Array
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.list = this.info.hotCities
  },
  computed: {
    ...mapState(['hotCities', 'active'])
  },
  methods: {
    ...mapMutations(['changeHotCities', 'changeActive']),
    change () {
      let activeClass = this.active
      activeClass = activeClass === 'in' ? 'out' : 'in'
      this.changeActive(activeClass)
      this.changeHotCities(this.hot)
    }
  }
})
</script>

<style lang="less" scoped>
  .header {
    font-size: .16rem;
    position: relative;
    height: .74rem;
    color: #fff;
    .back {
      position: absolute;
      width: .44rem;
      text-align: center;
      .fa {
        font-size: .28rem;
        line-height: .4rem;
      }
    }
    .title {
      text-align: center;
      line-height: .44rem;
    }
    .choose {
      font-size: .14rem;
      text-align: center;
      > span {
        display: inline-block;
        width: 1.5rem;
        text-align: center;
        border: 1px solid #fff;
        padding: .03rem 0;
      }
      > span:first-child {
        border-top-left-radius: .02rem;
        border-bottom-left-radius: .02rem;
      }
      > span:last-child {
        border-top-right-radius: .02rem;
        border-bottom-right-radius: .02rem;
      }
      .active {
        background: #fff;
        color: #16afca;
      }
    }
  }
</style>

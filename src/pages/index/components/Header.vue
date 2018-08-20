<template>
  <div class="header">
    <div class="container flex-row header-color">
      <div class="back">
        <span class="fa fa-angle-left"></span>
      </div>
      <router-link tag="div" class="search" :to="'/search'">
        <div>
          <span class="fa fa-search"></span>
          <span>输入城市/景点/游玩主题</span>
        </div>
      </router-link>
      <router-link tag="div" class="city" :to="'/city'">
        <span>{{city}}</span>
        <span class="fa fa-caret-down"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default({
  name: 'Header',
  computed: {
    ...mapState(['currentCity'])
  },
  data () {
    return {
      city: ''
    }
  },
  mounted () {
    this.city = localStorage.currentCity || this.currentCity
  }
})
</script>

<style lang="less" scoped>
  .header {
    font-size: .16rem;
    .container {
      line-height: .44rem;
      height: .44rem;
      color: #fff;
      .back {
        width: .44rem;
        text-align: center;
        .fa {
          font-size: .28rem;
          line-height: .4rem;
        }
      }
      .search {
        flex: 1;
        line-height: .44rem;
        >div {
          position: relative;
          height: .28rem;
          top: .08rem;
          line-height: .28rem;
          padding-left: .1rem;
          font-size: .14rem;
          background: #fff;
          color: #f2f2f2;
          border-radius: .05rem;
        }
      }
      .city {
        text-align: center;
        min-width: .7rem;
        margin: 0 .05rem;
      }
    }
  }
</style>

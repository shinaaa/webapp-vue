<template>
  <div class="list" ref="list">
    <div>
      <div class="city-item">
        <div class="title bg-color">热门城市</div>
        <div class="content clear" ref="content">
          <div class="item" style="border-right: 1px solid #e4e4e4" v-for="item in hot" :key="item.id" @click="changeCity(item.name)">{{item.name}}</div>
        </div>
      </div>
      <div class="letter">
        <div class="title bg-color">字母排序</div>
        <div class="content clear">
          <div
            class="item"
            v-for="(item, index) in cityList"
            :key="index"
            @click="scrollTo(item.initial)"
          >
            {{item.initial}}
          </div>
        </div>
      </div>
      <div class="letter-city">
        <div v-for="(item, index) in cityList" :key="index" :ref="item.initial">
          <div class="title bg-color">{{item.initial}}</div>
          <div class="content clear">
            <div
              class="content-item"
              v-for="(city, index) in item.list"
              :key="index"
              style="border-right: 1px solid #e4e4e4"
              @click="changeCity(city.name)"
            >
              {{city.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default({
  props: {
    hot: Array,
    cityList: Array
  },
  data () {
    return {
    }
  },
  watch: {
    active () {
      this.scroll.scrollTo(0, 0)
    }
  },
  computed: {
    ...mapState(['active', 'currentCity', 'hotCities'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
    this.getBorder()
  },
  methods: {
    getBorder () {
      let itemList = document.getElementsByClassName('item')
      for (let i = 1; i <= itemList.length; i++) {
        if (i % 3 === 0) {
          itemList[i - 1].style.borderRight = 'none'
        }
      }
    },
    ...mapMutations(['changeHotCities', 'changeCurrentCity']),
    changeCity (city) {
      this.changeCurrentCity(city)
      this.$router.push('/')
    },
    scrollTo (letter) {
      const elem = this.$refs[letter][0]
      this.scroll.scrollToElement(elem, 300)
    }
  }
})
</script>

<style lang="less" scoped>
  .list {
    position: absolute;
    top: .74rem;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .city-item {
    font-size: .14rem;
    min-height: 1.5rem;
    > .title {
      font-size: .12rem;
      line-height: .36rem;
      padding-left: .15rem;
    }
    > .content {
      > .item {
        border-bottom: 1px solid #e4e4e4;
        float: left;
        border-right: 1px solid #e4e4e4;
        width: 33.33%;
        line-height: .44rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .letter {
    font-size: .14rem;
    .title {
      font-size: .12rem;
      line-height: .36rem;
      padding-left: .15rem;
    }
    .content {
      padding: .1rem 0;
    }
    .item {
      float: left;
      width: 16.66%;
      line-height: .44rem;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .letter-city {
    font-size: .14rem;
    .title {
      font-size: .12rem;
      line-height: .36rem;
      padding-left: .15rem;
    }
    .content {
      .content-item {
        width: 25%;
        border-bottom: 1px solid #e4e4e4;
        float: left;
        border-right: 1px solid #e4e4e4;
        line-height: .44rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>

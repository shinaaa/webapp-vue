<template>
  <div class="ticket-header" :style="style">
    <div class="wrapper clear">
      <div class="item left" @click="showCategory">
        全部分类
        <span class="fa fa-angle-down" ref="arrow1"></span>
      </div>
      <div class="item right" @click="recommend">
        推荐排序
        <span class="fa fa-angle-down" ref="arrow2"></span>
      </div>
    </div>
    <div class="mask" v-show="visible" @click="hide"></div>
    <div class="content">
      <div class="category" v-show="categoryVisible">
        <div class="content-item left" ref="left">
          <div>
            <div
              class="items border-bottom"
              v-for="item in categoryList"
              :key="item.id"
              :class="itemId === item.id ? 'active' : ''"
              @click.stop="show(item)"
            >
              <img :src="item.img">
              {{item.name}}
              <span class="right">{{item.num}}</span>
            </div>
          </div>
        </div>
        <div class="content-item content-right right" ref="right">
          <div>
            <div
              class="items"
              v-for="item in children"
              :key="item.id"
              @click.stop="getSenery(item)"
            >
              {{item.title}}
              <span class="right">{{item.num}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="recommendVisible" class="recommend">
        <div
          class="border-bottom"
          v-for="item in sortList"
          :key="item.id"
          :class="sortId === item.id ? 'active' : ''"
          @click.stop="changeSort(item)"
        >{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default({
  data () {
    return {
      // visible: false,
      categoryVisible: false,
      recommendVisible: false,
      categoryList: [], // 全部分类
      children: [],
      itemId: '',
      sortList: [],
      sortId: '',
      style: {
        position: 'absolute',
        top: '.42rem'
      }
    }
  },
  computed: {
    ...mapState(['visible'])
  },
  mounted () {
    this.init()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  activated () {
    this.scroll = new BScroll(this.$refs.left)
    this.scroll = new BScroll(this.$refs.right)
  },
  methods: {
    ...mapMutations(['changeVisible']),
    init () {
      this.$axios.get('/api/category.json').then(res => {
        if (res.data.ret) {
          this.categoryList = res.data.categoryList
          this.itemId = this.categoryList[0].id
          this.children = this.categoryList[0].category
          this.sortList = res.data.sort
          this.sortId = this.sortList[0].id
        }
      })
    },
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 80) {
        this.style.position = 'fixed'
        this.style.top = 0
      } else {
        this.style.position = 'absolute'
        this.style.top = '.42rem'
      }
    },
    show (item) {
      this.itemId = item.id
      this.categoryList.forEach(e => {
        if (this.itemId === e.id) {
          this.children = e.category
        }
      })
      console.log(this.children)
    },
    getSenery (item) {
      console.log(item.id)
    },
    changeSort (item) {
      this.sortId = item.id
      // this.visible = false
      this.changeVisible(false)
      this.recommendVisible = false
      this.categoryVisible = false
      this.changeShow()
    },
    hide () { // 点击下面部分自动隐藏分类栏
      // this.visible = false
      this.changeVisible(false)
      this.recommendVisible = false
      this.categoryVisible = false
      this.changeShow()
    },
    showCategory () { // 显示全部推荐
      if (this.recommendVisible) {
        // this.visible = true
        this.changeVisible(true)
      } else {
        // this.visible = !this.visible
        this.changeVisible(!this.visible)
      }
      this.recommendVisible = false
      this.categoryVisible = !this.categoryVisible
      this.changeShow()
    },
    recommend () { // 显示推荐排序
      if (this.categoryVisible) {
        // this.visible = true
        this.changeVisible(true)
      } else {
        // this.visible = !this.visible
        this.changeVisible(!this.visible)
      }
      this.categoryVisible = false
      this.recommendVisible = !this.recommendVisible
      this.changeShow()
    },
    changeShow () {
      let arrow1 = this.$refs.arrow1
      if (this.categoryVisible) {
        arrow1.className = 'fa fa-angle-up'
        arrow1.parentElement.className = 'item left common-color'
      } else {
        arrow1.className = 'fa fa-angle-down'
        arrow1.parentElement.className = 'item left'
      }
      let arrow2 = this.$refs.arrow2
      if (this.recommendVisible) {
        arrow2.className = 'fa fa-angle-up'
        arrow2.parentElement.className = 'item left common-color'
      } else {
        arrow2.className = 'fa fa-angle-down'
        arrow2.parentElement.className = 'item left'
      }
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.left)
          this.scroll = new BScroll(this.$refs.right)
        }
      })
    }
  }
})
</script>

<style lang="less" scoped>
  .ticket-header {
    font-size: .14rem;
    line-height: .3rem;
    height: .3rem;
    left: 0;
    right: 0;
    z-index: 20;
    background: #fff;
    .wrapper {
      border-top: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      padding: .05rem 0;
      background: #fff;
      .item {
        width: 50%;
        text-align: center;
        span {
          color: #848484;
          font-size: .18rem;
        }
      }
      .left {
        border-right: 1px solid #f5f5f5;
      }
    }
    .mask {
      position: fixed;
      top: .86rem;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      background: rgba(0, 0, 0, .3);
      overflow: hidden;
    }
    .content {
      position: absolute;
      top: .4rem;
      left: 0;
      right: 0;
      bottom: 0;
      /*z-index: 1;
      background: rgba(0, 0, 0, .3);
      overflow: hidden;*/
      .category {
        background: #fff;
        height: 2.4rem;
        position: relative;
        z-index: 10;
        .content-right {
          background: #ededed;
        }
        .content-item {
          width: 50%;
          height: 2.4rem;
          overflow: hidden;
          .active {
            background: #ededed;
          }
          .items {
            font-size: .12rem;
            color: #2b2b2b;
            width: 100%;
            line-height: .4rem;
            padding: 0 .1rem 0 .15rem;
            > img{
              width: .15rem;
              vertical-align: center;
            }
            > span {
              color: #8e8e8e;
            }
          }
        }
      }
      .recommend {
        width: 100%;
        position: relative;
        z-index: 10;
        > div {
          line-height: .4rem;
          text-align: center;
          background: #fff;
        }
        .active {
          background: #ededed;
        }
      }
    }
  }
</style>

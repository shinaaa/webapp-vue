<template>
  <div class="detail">
    <div class="detail-header">
      <div class="icon" @click="$router.go(-1)">
        <span class="iconfont icon-back"></span>
      </div>
    </div>
    <div class="banner" @click="jump()">
      <div class="img">
        <img :src="info.banner">
      </div>
      <div class="title">
        <div class="title-number">
          <span class="iconfont icon-image"></span>
          <span>{{info.imgList.length}}</span>
        </div>
        <div class="title-name">{{title}}</div>
      </div>
    </div>
    <div class="content bg-color">
      <div class="comment border-bottom flex-row">
        <div class="comment-item border-right">
          <div class="rate font-color">
            <div class="inline">
              <span>{{info.rate}}</span>分
            </div>
            <div class="inline">超赞</div>
          </div>
          <div class="comment-number">
            <div class="inline">
              <span>{{info.comment}}</span>条评论
            </div>
            <div class="inline">
              <span>{{info.guides}}</span>条攻略
            </div>
          </div>
          <div class="arrow">
            <span class="iconfont icon-right"></span>
          </div>
        </div>
        <div class="comment-item intro">
          <div class="rate">景点简介</div>
          <div class="comment-number">开放时间、贴士</div>
          <div class="arrow">
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
      <div class="address">
        <span class="iconfont icon-marker"></span>
        <span>{{info.address}}</span>
        <span class="iconfont icon-right right"></span>
      </div>
      <div class="recommend">
        <div class="reco-title border-bottom">
          <span class="iconfont icon-thumbbg"></span>
          <span>去哪儿网推荐</span>
        </div>
        <div
          class="reco-item border-bottom flex-row"
          v-for="item in info.recommendList"
          :key="item.id"
        >
          <div class="item-detail">
            <div class="item-title">{{item.title}}</div>
            <div class="time">
              <span class="iconfont icon-clock common-color"></span>
              <span>{{item.time}}</span>
            </div>
            <div class="remark common-color">
              <span v-for="(remark, index) in item.comment" :key="index">{{remark}}</span>
            </div>
          </div>
          <div class="item-price">
            <div class="font-color">
              ¥<span>{{item.price}}</span>
            </div>
            <div class="order-btn">
              <span>预定</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default({
  data () {
    return {
      info: {
        imgList: [],
        recommendList: []
      },
      title: this.$route.query.title,
      id: this.$route.query.id
    }
  },
  computed: {
    ...mapState(['imgList'])
  },
  mounted () {
    this.init()
  },
  methods: {
    ...mapMutations(['changeImgList']),
    init () {
      this.$axios.get('/api/detail.json').then(res => {
        if (res.data.ret) {
          this.info = res.data
          this.changeImgList(this.info.imgList)
        }
      })
    },
    jump () {
      this.$router.push('/image/list?id=' + this.id)
    }
  }
})
</script>

<style lang="less" scoped>
  .detail {
    font-size: .14rem;
    .detail-header {
      .icon {
        position: fixed;
        z-index: 10;
        top: .05rem;
        left: .05rem;
        height: .36rem;
        width: .36rem;
        line-height: .36rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, .4);
        text-align: center;
        color: #fff;
        span {
          font-size: .2rem;
          line-height: .36rem;
        }
      }
    }
    .banner {
      position: relative;
      .img {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 55%;
        img {
          width: 100%;
        }
      }
      .title {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: .15rem;
        color: #fff;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
        .title-number {
          font-size: .14rem;
          margin-bottom: .05rem;
          width: .6rem;
          text-align: center;
          line-height: .24rem;
          background: rgba(0, 0, 0, .3);
          border-radius: .1rem;
          .iconfont {
            font-size: .14rem;
            color: #fff;
          }
        }
        .title-name {
          font-size: .18rem;
        }
      }
    }
    .comment {
      background: #fff;
      .comment-item {
        width: 50%;
        margin: .1rem;
        position: relative;
        .arrow {
          line-height: .46rem;
          position: absolute;
          right: .1rem;
          top: 0;
          bottom: 0;
          span {
            font-size: .18rem;
            color: #8c8c8c;
          }
        }
        .rate {
          font-size: .14rem;
          margin: .07rem 0;
          .inline {
            span {
              font-size: .2rem;
            }
          }
        }
        .comment-number {
          color: #8c8c8c;
          font-size: .12rem;
        }
      }
      .intro {
        div:first-child {
          line-height: .2rem;
        }
      }
    }
    .address {
      background: #fff;
      line-height: .4rem;
      padding: 0 .15rem;
      margin-bottom: .1rem;
      .iconfont {
        color: #8c8c8c;
      }
      > span:nth-child(2) {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .recommend {
      background: #fff;
      margin-bottom: .1rem;
      .reco-title {
        font-size: .16rem;
        line-height: .4rem;
        padding: 0 .15rem;
        .iconfont {
          color: #e45359;
        }
      }
      .reco-item {
        padding: .1rem;
        .item-detail {
          flex: 1;
          .item-title {
            font-size: .16rem;
            line-height: .24rem;
            color: #4e4e4e;
          }
          .time {
            line-height: .24rem;
            font-size: .12rem;
            .iconfont {
              font-size: .12rem;
            }
          }
          .remark {
            font-size: .12rem;
            padding: .03rem 0;
            span {
              border: .01rem solid #d9f4f6;
              padding: .01rem;
              margin-right: .05rem;
            }
          }
        }
        .item-price {
          text-align: center;
          min-width: 1rem;
          padding: .2rem 0;
          .font-color {
            > span {
              font-size: .2rem;
            }
          }
          .order-btn {
            background: #fd801c;
            color: #fff;
            text-align: center;
            line-height: .28rem;
            border-radius: .05rem;
          }
        }
      }
    }
  }
</style>

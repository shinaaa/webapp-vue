<template>
  <div class="ticket-list bg-color">
    <div v-for="item in ticketList" :key="item.id" @click="jump(item)">
      <div class="content flex-row border-bottom">
        <div class="img">
          <img :src="item.src">
        </div>
        <div class="detail flex-column">
          <div class="name">{{item.title}}</div>
          <div class="comment">
            <span v-for="star in item.star" :key="star" class="fa fa-star font-color"></span>
            <span>{{item.comment}}条评论</span>
          </div>
          <div class="price clear">
            <div class="left">
              <span class="font-color">¥<span>{{item.price}}</span></span>起
            </div>
            <div class="right">{{item.address}}</div>
          </div>
          <div class="remark">
            <span class="common-color" v-for="(remark, index) in item.remark" :key="index">{{remark}}</span>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div
          class="ticket-item flex-row border-bottom"
          v-for="ticket in item.ticket"
          :key="ticket.id"
        >
          <span class="title">{{ticket.title}}</span>
          <span class="price font-color">
            ¥<span>{{ticket.price}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default({
  data () {
    return {
    }
  },
  props: {
    ticketList: Array
  },
  mounted () {},
  computed: {
    ...mapState(['visible'])
  },
  methods: {
    jump (item) {
      this.$router.push('/detail?id=' + item.id + '&title=' + item.title)
    }
  }
})
</script>

<style lang="less" scoped>
  .ticket-list {
    font-size: .14em;
    position: absolute;
    top: .86rem;
    left: 0;
    right: 0;
    /*bottom: 0;*/
    .content {
      padding: .1rem;
      background: #fff;
      .img {
        width: 25%;
        height: 0;
        overflow: hidden;
        padding-bottom: 25%;
        margin-right: .15rem;
        img {
          width: 100%;
        }
      }
      .detail {
        flex: 1;
        justify-content: space-around;
        .name {
          font-size: .16rem;
        }
        .comment {
          font-size: .12rem;
          >span:last-child {
            margin-left: .1rem;
          }
        }
        .price {
          font-size: .12rem;
          line-height: .18rem;
          .left {
            .font-color {
              > span {
                font-size: .18rem;
              }
            }
          }
        }
        .remark {
          font-size: .1rem;
          > span {
            margin-right: .05rem;
            padding: .01rem .02rem;
            border: .01rem solid #d9f4f6;
            border-radius: .05rem;
          }
          > span:last-child {
            background: #ebf9fc;
          }
        }
      }
    }
    .ticket {
      margin-bottom: .1rem;
      padding: 0 .1rem;
      background: #fff;
      .ticket-item {
        line-height: .4rem;
        .title {
          flex: 1;
          color: #4e4e4e;
          font-size: .14rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .price {
          min-width: .5rem;
          text-align: right;
          font-size: .12rem;
          > span {
            font-size: .16rem;
          }
        }
      }
    }
  }
</style>

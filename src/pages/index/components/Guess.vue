<template>
  <div class="guess">
    <div class="title">
      <span class="fa fa-heart"></span>
      <span>猜你喜欢</span>
    </div>
    <div
      class="content flex-row border-bottom"
      v-for="item in guessList"
      :key="item.id"
      @click="jump(item)"
    >
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
      </div>
    </div>
    <div class="view-all">
      查看所有产品
    </div>
  </div>
</template>

<script>
export default({
  props: {
    guessList: Array
  },
  methods: {
    jump (item) {
      this.$router.push('/detail?id=' + item.id + '&title=' + item.title)
    }
  }
})
</script>

<style lang="less" scoped>
  .guess {
    padding: 0 .1rem;
    font-size: .14em;
    background: #fff;
    .title {
      line-height: .44rem;
      font-size: .18rem;
      .fa {
        font-size: .16rem;
        color: #e34141;
      }
    }
    .content {
      padding: .1rem 0;
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
        padding: .08rem 0;
        flex: 1;
        justify-content: space-around;
        .name {
          font-size: .18rem;
        }
        .comment {
          font-size: .12rem;
          >span:last-child {
            margin-left: .1rem;
          }
        }
        .price {
          line-height: .18rem;
          font-size: .12rem;
          .left {
            .font-color {
              > span {
                font-size: .18rem;
              }
            }
          }
        }
      }
    }
    .view-all {
      font-size: .16rem;
      color: #16afca;
      background: #fff;
      line-height: .44rem;
      text-align: center;
    }
  }
</style>

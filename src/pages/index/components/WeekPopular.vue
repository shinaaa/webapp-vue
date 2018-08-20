<template>
  <div class="week-popular">
    <div class="title flex-row">
      <div class="title-item">
        <span class="fa fa-fire font-color"></span>
        <span>本周热门榜单</span>
      </div>
      <div class="title-item">
        <span>全部榜单</span>
        <span class="fa fa-angle-right"></span>
      </div>
    </div>
    <div class="content">
      <div class="content-item" v-for="item in popularList" :key="item.id">
        <div class="img">
          <img :src="item.src">
        </div>
        <p class="name">{{item.title}}</p>
        <p class="price">
          <span class="font-color">¥<span class="num">{{item.price}}</span></span>起
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default({
  props: {
    popularList: Array
  }
})
</script>

<style lang="less" scoped>
  .week-popular {
    background: #fff;
    font-size: .12rem;
    margin-bottom: .1rem;
    .title {
      padding: 0 .1rem;
      line-height: .44rem;
      >div:first-child {
        font-size: .18rem;
        flex: 1;
        .fa {
          margin-right: .05rem;
        }
      }
      >div:nth-child(2) {
        width: .75rem;
        .fa {
          font-size: .18rem;
        }
      }
    }
    .content {
      width: 100%;
      white-space: nowrap;
      overflow-x: scroll;
      padding-bottom: .1rem;
      padding-right: .1rem;
      .content-item {
        width: 25%;
        margin: 0 0 0 .1rem;
        text-align: center;
        position: relative;
        display: inline-block;
        .img {
          width: 100%;
          height: 0;
          overflow: hidden;
          padding-bottom: 100%;
          img {
            width: 100%;
          }
        }
        .name {
          margin: .05rem 0;
        }
        .price {
          .num {
            font-size: .14rem;
          }
        }
      }
    }
  }
</style>

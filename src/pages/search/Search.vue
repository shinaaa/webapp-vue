<template>
  <div class="search">
    <Header></Header>
    <div class="title flex-row bg-color border-top">
      <div>热门搜索</div>
      <div class="common-color">
        <span class="fa fa-refresh common-color"></span>
        <span>换一批</span>
      </div>
    </div>
    <div class="content">
      <div class="content-item border-top flex-row">
        <div class="icon border-right">
          <span class="fa fa-connectdevelop"></span>
        </div>
        <div class="item-detail clear">
          <div class="item-city common-color">川越成渝</div>
          <div class="item-city">1元秒玩水川越成渝</div>
          <div class="item-city common-color">川越成渝</div>
          <div class="item-city">1元秒玩水</div>
          <div class="item-city common-color">川越成渝</div>
          <div class="item-city">1元秒玩水</div>
        </div>
      </div>
      <div class="content-item border-top flex-row">
        <div class="icon icon-second border-right">
          <span class="fa fa-connectdevelop"></span>
        </div>
        <div class="item-detail clear">
          <div class="item-city">安吉</div>
          <div class="item-city">安吉</div>
          <div class="item-city">安吉</div>
          <div class="item-city">安吉</div>
        </div>
      </div>
    </div>
    <div class="nearby">
      <div>搜索身边的景点</div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default({
  components: {Header}
})
</script>

<style lang="less" scoped>
  .search {
    font-size: .14rem;
    .title {
      line-height: .38rem;
      height: .38rem;
      padding-left: .1rem;
      position: relative;
      > div:nth-child(2) {
        font-size: .12rem;
        position: absolute;
        right: .1rem;
        top: 0;
        bottom: 0;
      }
    }
    .content {
      .content-item {
        padding: .1rem 0;
        .icon {
          min-width: .4rem;
          line-height: .8rem;
          height: .8rem;
          text-align: center;
        }
        .icon-second {
          line-height: .4rem;
          height: .4rem;
        }
        .item-detail {
          .item-city {
            float: left;
            min-width: .9rem;
            text-align: center;
            border-right: 1px dashed #bbbebf;
            height: .2rem;
            line-height: .2rem;
            padding: 0 .1rem;
            margin: .1rem 0;
          }
        }
      }
    }
    .nearby {
      > div {
        text-align: center;
        margin: .1rem auto;
        height: .4rem;
        line-height: .4rem;
        border: 1px solid #bbbebf;
        width: 90%;
      }
    }
  }
</style>

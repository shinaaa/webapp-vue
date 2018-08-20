<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <div class="content" v-for="item in weekendList" :key="item.id">
      <div class="img">
        <img :src="item.src">
      </div>
      <div class="name">{{item.title}}</div>
      <div class="desc">{{item.desc}}</div>
    </div>
  </div>
</template>

<script>
export default({
  props: {
    weekendList: Array
  }
})
</script>

<style lang="less" scoped>
  .weekend {
    font-size: .14rem;
    .title {
      line-height: .44rem;
      padding-left: .1rem;
    }
    .content {
      background: #fff;
      .img {
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 37%;
        img {
          width: 100%;
        }
      }
      .name {
        padding: .07rem .1rem;
      }
      .desc {
        padding-left: .1rem;
        padding-bottom: .15rem;
        font-size: .12rem;
        color: #5a5a5a;
      }
    }
  }
</style>

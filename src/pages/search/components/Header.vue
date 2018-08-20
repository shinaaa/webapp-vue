<template>
  <div class="search-header flex-row">
    <div class="back">
      <router-link tag="div" class="back fa fa-angle-left" :to="'/'">
      </router-link>
    </div>
    <div class="search-input">
      <input v-model="title" type="text" placeholder="输入城市或景点" class="bg-color">
    </div>
    <div class="end">搜索</div>
  </div>
</template>

<script>
export default({
  props: {
    title: String
  }
})
</script>

<style lang="less" scoped>
  .search-header {
    font-size: .14rem;
    position: relative;
    line-height: .44rem;
    .back {
      display: inline-block;
      width: .44rem;
      text-align: center;
      font-size: .3rem;
      color: #525252;
      height: .44rem;
      line-height: .44rem;
    }
    .search-input {
      flex: 1;
      height: .44rem;
      line-height: .44rem;
      input {
        height: .3rem;
        border-radius: .15rem;
        text-align: center;
        width: 100%;
      }
    }
    .end {
      width: .54rem;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
    }
  }
</style>

<template>
  <div class="city">
    <Header :info="info" :hot="hotCities"></Header>
    <template v-if="active === 'in'">
      <List :hot="hotCities" :cityList="cityList"></List>
    </template>
    <template v-if="active === 'out'">
      <List :hot="foreignHot" :cityList="foreignCities"></List>
    </template>
  </div>
</template>

<script>
import Header from './components/Header'
import List from './components/List'
import {mapState, mapMutations} from 'vuex'
export default({
  components: {Header, List},
  data () {
    return {
      info: {}, // 境内
      hotCities: [], // 境内热门
      cityList: [], // 境内字母
      foreignInfo: {},
      foreignHot: [], // 境外热门
      foreignCities: [] // 境外字母
    }
  },
  computed: {
    ...mapState(['active', 'cityInfo'])
  },
  mounted () {
    this.getCities()
    this.getForeign()
  },
  methods: {
    getCities () {
      let url = '/api/city.json'
      this.$axios.get(url).then(res => {
        if (res.data.ret) {
          this.info = res.data.data
          this.hotCities = this.info.hotCities
          this.cityList = this.info.cities
          this.changeInfo(this.info)
        }
      })
    },
    getForeign () {
      let url = '/api/foreigncities.json'
      this.$axios.get(url).then(res => {
        if (res.data.ret) {
          let data = res.data.data
          this.foreignInfo = res.data.data
          this.foreignHot = data.hotCities
          this.foreignCities = data.cities
        }
      })
    },
    ...mapMutations(['changeInfo'])
  }
})
</script>

<style lang="less" scoped></style>

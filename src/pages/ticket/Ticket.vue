<template>
  <div class="ticket">
    <SearchHeader :title="title"></SearchHeader>
    <TicketHeader></TicketHeader>
    <TicketList :ticketList="ticketList"></TicketList>
  </div>
</template>

<script>
import SearchHeader from '../search/components/Header'
import TicketHeader from './TicketHeader'
import TicketList from './TicketList'
export default({
  components: {SearchHeader, TicketHeader, TicketList},
  data () {
    return {
      title: this.$route.query.title,
      ticketList: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$axios.get('/api/ticketlist.json').then(res => {
        if (res.data.ret) {
          this.ticketList = res.data.ticketList
        }
      })
    }
  }
})
</script>

<style lang="less"></style>

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Search from '@/pages/search/Search'
import City from '@/pages/city/City'
import Ticket from '@/pages/ticket/Ticket'
import Detail from '@/pages/detail/Detail'
import ImageList from '@/pages/detail/ImageList'
import Gallery from '@/pages/detail/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {index: 1},
      component: Index
    }, {
      path: '/city',
      name: 'City',
      meta: {index: 2},
      component: City
    }, {
      path: '/search',
      name: 'Search',
      meta: {index: 3},
      component: Search
    }, {
      path: '/ticket',
      name: 'Ticket',
      meta: {index: 4},
      component: Ticket
    }, {
      path: '/detail',
      name: 'Detail',
      meta: {index: 5},
      component: Detail
    }, {
      path: '/image/list',
      name: 'ImageList',
      meta: {index: 6},
      component: ImageList
    }, {
      path: '/gallery',
      name: 'Gallery',
      meta: {index: 7},
      component: Gallery
    }
  ]
})

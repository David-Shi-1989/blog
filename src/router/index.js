import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Tourism from '@/page/Tourism'
import Video from '@/page/Video'
import NotFound from '@/page/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tourism/:id',
      name: 'Tourism',
      component: Tourism
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Tourism from '@/page/Tourism'
import Video from '@/page/Video'
import NotFound from '@/page/404'
import BlogList from '@/page/blog/blog-list'

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
      path: '/blog',
      name: 'Blog',
      component: BlogList
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

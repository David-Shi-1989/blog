import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Tourism from '@/page/Tourism'
import Video from '@/page/Video'
import NotFound from '@/page/404'
import BlogList from '@/page/blog/blog-list.1'
import BlogItem from '@/page/blog/blog-item'
import AlbumList from '@/page/album/album-list'
import AlbumItem from '@/page/album/album-item'
import DemoList from '@/page/demo/demo-list'
import DemoItem from '@/page/demo/demo-item'

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
      path: '/blog/:id',
      name: 'BlogItem',
      component: BlogItem
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogList
    },
    {
      path: '/album',
      name: 'Album',
      component: AlbumList
    },
    {
      path: '/album/:id',
      name: 'AlbumItem',
      component: AlbumItem
    },
    {
      path: '/demo',
      name: 'DemoList',
      component: DemoList
    },
    {
      path: '/demo/:id',
      name: 'DemoItem',
      component: DemoItem
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

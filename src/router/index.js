import Vue from 'vue'
import Router from 'vue-router'
import Storex from '../store/index'
import Home from '@/page/Home'
import Tourism from '@/page/Tourism'
import Video from '@/page/Video'
import NotFound from '@/page/404'
import articleList from '@/page/article/article-list.1'
import articleItem from '@/page/article/article-item'
import AlbumList from '@/page/album/album-list'
import AlbumItem from '@/page/album/album-item'
import DemoList from '@/page/demo/demo-list'
import DemoItem from '@/page/demo/demo-item'
import PostList from '@/page/post/post-list'
import PostItem from '@/page/post/post-item'

Vue.use(Router)
Vue.use(Storex)

const router = new Router({
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
      path: '/article/:id',
      name: 'articleItem',
      component: articleItem
    },
    {
      path: '/article',
      name: 'article',
      component: articleList
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
      path: '/post',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/post/:id',
      name: 'PostItem',
      component: PostItem
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
router.beforeEach((to, from, next) => {
  Storex.commit('triggerRouterBeforeChange')
  next()
})
router.afterEach((to, from) => {
  Storex.commit('triggerRouterAfterChange', to)
})
export default router

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import navigation from '@/components/navigation'
import community from '@/components/community'
import me from '@/components/me'
import shop from '@/components/shop'
import friend from '@/components/friend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    }
  ]
})

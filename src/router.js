import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Footer = () => import('@/components/common/Footer')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/Home'),
        footer: Footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('@/views/Kind'),
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('@/views/Cart'),
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('@/views/User'),
        footer: Footer
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('@/views/Login')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('@/views/Register')
      }
    },
    {
      path: '/detail/gc_id=:gd&goods_id=:id',
      name: 'detail',
      components: {
        default: () => import('@/views/Detail')
      }
    },
    {
      path: '/goodslist/gc_id=:id&goods_name=:name',
      name: 'goodslist',
      components: {
        default: () => import('@/views/Goodslist')
      }
    }
  ]
})
export default router

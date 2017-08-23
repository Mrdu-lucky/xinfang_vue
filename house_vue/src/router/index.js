import Vue from 'vue'
import Router from 'vue-router'
import Notes from '../containers/Notes.vue'
import Home from '../containers/Home.vue'
import Profile from '../containers/Profile.vue'
import Aboutus from '../containers/Aboutus.vue'
import Help from '../containers/Help.vue'
import Safe from '../containers/Safe.vue'
import Detail from '../containers/Detail.vue'
import Order from '../containers/ProfileRoute/Order.vue'
import UpdataInfo from '../containers/ProfileRoute/UpdataInfo.vue'
import Shoucang from '../containers/ProfileRoute/Shoucang.vue'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}

export default new Router({
  mode: 'history',
  base: __dirname,
  scrollBehavior,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      children: [
        {path: '/updataInfo', name: 'UpdataInfo', component: UpdataInfo},
        {path: '/shoucang', name: 'Shoucang', component: Shoucang},
        {path: '/order', name: 'Order', component: Order}
      ],
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/safe',
      name: 'Safe',
      component: Safe,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/aboutus',
      name: 'Aboutus',
      component: Aboutus,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes,
      meta: {
        keepAlive: true
      }
    },
    { //404路由
      path: '*',
      redirect: '/home',
      meta: {
        keepAlive: true
      }
    }
  ],
  linkActiveClass: 'active'
})


import Vue from 'vue'
import Router from 'vue-router'
import MenuSelection from './views/MenuSelection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MenuSelection
    },
    {
      path: '/menu/:section',
      name: 'menu-page',
      props: true,
      component: () => import(/* webpackChunkName: "menuPage" */ './views/MenuPage.vue')
    }
  ]
})

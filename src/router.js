import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListCleanCodeExamples from './views/ListCleanCodeExamples.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cleancode/:section',
      name: 'cleancode',
      component: ListCleanCodeExamples,
      meta: {
        reload: true,
      }
    },
  ]
})

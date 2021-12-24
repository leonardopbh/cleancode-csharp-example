import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListCleanCodeExamples from './views/ListCleanCodeExamples.vue'
import CSharp6 from './views/csharp-news/csharp6.vue'
import CSharp8 from './views/csharp-news/csharp8.vue'

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
    {
      path: '/csharp-news/v6',
      name: 'v6',
      component: CSharp6,
      meta: {
        reload: true,
      }
    },
    {
      path: '/csharp-news/v8',
      name: 'v8',
      component: CSharp8,
      meta: {
        reload: true,
      }
    }
  ]
})

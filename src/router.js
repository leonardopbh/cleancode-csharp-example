import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListCleanCodeExamples from './views/ListCleanCodeExamples.vue'
import Tricks from './views/csharp-tricks/tricks.vue'
import CSharp6 from './views/csharp-news/csharp6.vue'
import CSharp7 from './views/csharp-news/csharp7.vue'
import CSharp8 from './views/csharp-news/csharp8.vue'
import CSharp9 from './views/csharp-news/csharp9.vue'
import CSharp10 from './views/csharp-news/csharp10.vue'
import CSharp11 from './views/csharp-news/csharp11.vue'

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
      path: '/csharp-tricks',
      name: 'Tricks',
      component: Tricks,
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
      path: '/csharp-news/v7',
      name: 'v7',
      component: CSharp7,
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
    },
    {
      path: '/csharp-news/v9',
      name: 'v9',
      component: CSharp9,
      meta: {
        reload: true,
      }
    },
    {
      path: '/csharp-news/v10',
      name: 'v10',
      component: CSharp10,
      meta: {
        reload: true,
      }
    },
    {
      path: '/csharp-news/v11',
      name: 'v11',
      component: CSharp11,
      meta: {
        reload: true,
      }
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Info from '@/components/Info'
import Learn from '@/components/Learn'
import Play from '@/components/Play'
import Quiz from '@/components/Quiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    }
  ]
})

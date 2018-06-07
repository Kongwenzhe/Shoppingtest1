import Vue from 'vue'
import Router from 'vue-router'
import First from '../components/first'
import Home from '../components/index'
import Second from '../components/second'
import Exam from '../components/exam'
import Promise from '../components/promise'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: Second
    },
    {
      path: '/exam',
      name: 'exam',
      component: Exam
    },
    {
      path: '/promise',
      name: 'promise',
      component: Promise
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import Home from '../components/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
  ]
})

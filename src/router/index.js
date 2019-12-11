import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListUser from '@/components/user/ListUser'
import EditUser from '@/components/user/EditUser'
import DeleteUser from '@/components/user/DeleteUser'
import CreateUser from '@/components/user/CreateUser'
import Login from '@/components/user/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/users/nuevo',
      name: 'NuevoUser',
      component: CreateUser
    },
    {
      path: '/users',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '/users/:userId/edit',
      name: 'UserEdit',
      component: EditUser
    },
    {
      path: '/users/:userId/delete',
      name: 'UserDelete',
      component: DeleteUser
    }

  ] ,
  mode: 'history'
})

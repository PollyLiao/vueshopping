import Vue from 'vue'
import VueRouter from 'vue-router'


//import Hello from '@/components/HelloWorld';
import Login from '@/components/pages/Login';
import Dashboard from '@/components/dashborad';
import Products from '@/components/pages/Products';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'*',
      redirect:'login'
    },
    {
      name:'登入',
      path:'/login',
      component:Login
    },
    {
      name:'Dashboard',
      path:'/admin',
      component:Dashboard,
      children:[
        {
          name:'Products',
          path:'products',
          component:Products,
          meta: { requiresAuth: true },
        }
      ]
    },
  ]
})
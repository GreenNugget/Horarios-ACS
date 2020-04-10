import VueRouter from 'vue-router';
import Login from './views/Login.vue';

import Dashboard from './views/Dashboard.vue';
import PageOne from './views/Dashboard/PageOne.vue';
import PageTwo from './views/Dashboard/PageTwo.vue';

const routes = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/dashboard',
      redirect: '/dashboard/page-one',
      component: Dashboard,
      children: [
        {
          path: 'page-one',
          component: PageOne,
        },
        {
          path: 'page-two',
          component: PageTwo,
        },
        {
          path: '*',
          redirect: '/dashboard',
        },
      ],
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});

export default routes;
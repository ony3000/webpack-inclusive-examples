import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '@/components/index';
import User from '@/components/user';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/users/:id',
      name: 'user',
      component: User,
    }
  ],
});

router.beforeEach((to, from, next) => {
  console.log('[beforeEach] navigation guard in route');
  next();
});

router.afterEach((to, from) => {
  console.log('[afterEach] navigation guard in route');
});

export default router;

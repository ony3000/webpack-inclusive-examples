import Vue from 'vue';
import VueRouter from 'vue-router';

import HomepageLayout from '@/layouts/homepage';
import HelpcenterLayout from '@/layouts/helpcenter';

import IndexPage from '@/pages/index';
import FeaturesIndexPage from '@/pages/features/index';
import PricingIndexPage from '@/pages/pricing/index';
import featureSubPages from '@/router/features';

import HelpIndexPage from '@/pages/help/index';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomepageLayout,
      children: [
        {
          path: '',
          name: 'homepage-index',
          component: IndexPage,
        },
        {
          path: 'features',
          name: 'feature-index',
          component: FeaturesIndexPage,
        },
        ...featureSubPages,
        {
          path: 'pricing',
          name: 'pricing-index',
          component: PricingIndexPage,
        },
      ],
    },
    {
      path: '/help',
      component: HelpcenterLayout,
      children: [
        {
          path: '',
          name: 'help-index',
          component: HelpIndexPage,
        }
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  },
});

router.beforeEach((to, from, next) => {
  console.log('[beforeEach] navigation guard in route');
  const pageClassList = document.querySelector('html').classList
  if (to.name === 'homepage-index') {
    pageClassList.add('is-main')
    pageClassList.remove('is-sub')
  } else {
    pageClassList.remove('is-main')
    pageClassList.add('is-sub')
  }
  next();
});

router.afterEach((to, from) => {
  console.log('[afterEach] navigation guard in route');
});

export default router;

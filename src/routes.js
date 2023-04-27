import { createRouter,
 createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from '@/page/Home-page.vue';
import AboutPage from '@/page/About-page.vue';
import NotFound from '@/page/NotFound-page.vue';

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFound,
    }
  ]
})

export default routers;
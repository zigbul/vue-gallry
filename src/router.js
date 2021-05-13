import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
   {
      path: '/',
      component: () => import('./pages/MainPage')
   },
   {
      path: '/about-me',
      component: () => import('./pages/AboutMe')
   },
   {
      path: '/:id',
      name: 'photoPage',
      component: () => import('./pages/PhotoPage')
   }
];

export default new VueRouter({
   mode: 'history',
   routes,
});
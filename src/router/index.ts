import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/HomePage.vue';
import NotFoundComponent from '@/views/NotFoundPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    // route level code-splitting
    // this generates a separate chunk (registration.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "registration" */ '../views/RegistrationPage.vue'
      ),
  },
  {
    path: '/remove',
    props: true,
    name: 'RemovePage',
    component: () =>
      import(/* webpackChunkName: "remove" */ '../views/RemovePage.vue'),
  },
  {
    path: '/students',
    name: 'StudentsPage',
    component: () =>
      import(/* webpackChunkName: "students" */ '../views/StudentsPage.vue'),
  },
  {
    path: '/verify',
    name: 'VerifyPage',
    component: () =>
      import(/* webpackChunkName: "verify" */ '../views/VerifyPage.vue'),
  },
  { path: '*', component: NotFoundComponent },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

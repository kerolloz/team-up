import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import NotFoundComponent from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/registration',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (registration.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "registration" */ '../views/Registration.vue'
      ),
  },
  {
    path: '/remove',
    props: true,
    name: 'Remove',
    component: () =>
      import(/* webpackChunkName: "remove" */ '../views/Remove.vue'),
  },
  {
    path: '/students',
    name: 'Students',
    component: () =>
      import(/* webpackChunkName: "students" */ '../views/Students.vue'),
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () =>
      import(/* webpackChunkName: "verify" */ '../views/Verify.vue'),
  },
  { path: '*', component: NotFoundComponent },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

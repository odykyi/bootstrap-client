import Vue from 'vue';

import VueRouter from 'vue-router';
import auth from './auth';
import axios from 'axios';
import {
  App,
  Home,
  User,
  Signup,
  Login,
} from './components';
// if you want to use the standard this.$http as you used to do with VueResource
// I don't like this approach so code uses axion directly though
// Uncomment below and then replace in code "axios" with this.$http
// Vue.prototype.$http = axios;

// Check the users auth status when the app starts
auth.checkAuth();

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/users', component: User },
  { path: '/signup', component: Signup },
  { path: '/login', component: Login },
  { path: '*', redirect: '/home' },
];

export const router = new VueRouter({
  routes,
});

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

import Vue from 'vue';
import Router from 'vue-router';
import Words from './views/Words.vue';
import New from './views/New.vue';
import Edit from './views/Edit.vue';
import Show from './views/Show.vue';
import Report from './views/Report.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

//path to main router
const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/', name: 'Home', component: Words, meta: { requiresAuth: true } },
    { path: '/new', component: New, meta: { requiresAuth: true } },
    { path: '/edit/:id', component: Edit, meta: { requiresAuth: true } },
    { path: '/show/:id', component: Show, meta: { requiresAuth: true } },
    { path: '/report', component: Report, meta: { requiresAuth: true } }
  ]
});

//check account user before go to homepage
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;

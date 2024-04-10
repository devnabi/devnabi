import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/HomePage.vue';
import Error from '@/views/ErrorPage';
import Login from '@/views/LoginPage.vue';
import SignUp from '@/views/SignUpPage.vue';
import MyProfileUpdate from '@/components/my/MyProfileUpdate.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/error',
      name: 'ErrorPage',
      component: Error
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUp
    },
    {
      path: '/myprofileupdate',
      name: 'MyProfileUpdate',
      component: MyProfileUpdate
    },
  ]
});

export default router;

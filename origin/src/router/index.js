import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/home'
import About from '@/views/about';
// import Hello from '@/components/HelloWorld';
import APP from "@/operation";
// import MainPage from '@/components/main';
import login from '@/layout/login';
Vue.use(VueRouter)
const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '*', component: APP },
    { path: '/operation', component: APP, children: [
        // {
        // path: '/',
        // redirect: '/home'
        // },
        { path: 'home', component: Home }
    ]},
    { path: '/operation/', component: login }
];
const router = new VueRouter({
    mode: 'history',
    // 通过环境变量来配置路由的 base url
    // base: process.env.VUE_APP_BASE_URL,
    routes
});
export default router

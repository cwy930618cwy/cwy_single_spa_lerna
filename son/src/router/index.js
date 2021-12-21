import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/home'
import About from '@/views/about';
import Hello from '@/components/HelloWorld';
Vue.use(VueRouter)
/**
 * 子应用路由
 */
const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/', component: Home },
    { path: '*', component: Hello }
    // {
    //     path: '/about',
    //     component: () => import(/* webpackChunkName: "about" */'../views/about.vue'),
    //     meta: {
    //       keepAlive: true
    //     }
    // }, 
];
const router = new VueRouter({
    // mode: 'history',
    // 通过环境变量来配置路由的 base url
    // base: process.env.VUE_APP_BASE_URL,
    routes
});
export default router

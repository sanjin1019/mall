import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
const Home = () => import('@/views/home/Home');
const routes = [
    {
        path: '/',
        name: 'home',
        components: { default:Home }
    },
    {
        path: '/home',
        name: 'home',
        components: { default:Home }
    }
]
const router = new Router({
    routes,
    mode: 'history'
})

export default router
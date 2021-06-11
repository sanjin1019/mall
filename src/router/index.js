import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

const Home = () => import('@/views/home/Home');
const Category = () => import('../views/category/category.vue');
const Cart = () => import('../views/cart/cart.vue');
const Me = () => import('../views/me/me.vue');

const routes = [
    {
		path: '/',
		redirect: '/home'
	},
    {
        path: '/home',
        name: 'home',
        components: { default:Home }
    },
    {
        path: '/category',
        name: 'category',
        components: { default:Category }
    },
    {
        path: '/cart',
        name: 'cart',
        components: { default:Cart }
    },
    {
        path: '/me',
        name: 'me',
        components: { default:Me }
    }
]
const router = new Router({
    routes,
    mode: 'history'
})

export default router
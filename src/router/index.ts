import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
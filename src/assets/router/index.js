import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import {routers} from './router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: routers
});

import Home from '@/pages/home.vue';

export const appRouter = {
    path: '/',
    name: 'home',
    title: '首页',
    component: Home,
    children: [
        {
            path: 'hello',
            title: '欢迎页',
            name: 'hello',
            component: resolve => { require(['@/pages/hello-world.vue'], resolve); }
        }
    ]
};
export const routers = [appRouter];

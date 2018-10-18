// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './assets/router/index';
import L from 'leaflet';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    components: { App },
    template: '<App/>',
    mounted () {
        // Vue.use(uimap, {
        //     titleType: this.mapType,
        //     titleUrl: this.mapUrl,
        //     componentPrefix: 'cw'
        // });
        // console.log(this.uiMap);
    },
    created: {

    }
});

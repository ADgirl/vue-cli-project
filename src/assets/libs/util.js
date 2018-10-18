import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

let util = {};

// 初始化配置参数

util.config = window.g;
Vue.prototype.sysTitle = util.config.sys_SysTitle;

// 地图配置参数
Vue.prototype.mapUrl = util.config.map_url;
Vue.prototype.mapType = util.config.map_type;
Vue.prototype.mapZoom = util.config.map_zoom;
Vue.prototype.mapMaxzoom = util.config.map_maxzoom;
Vue.prototype.mapMinzoom = util.config.map_minzoom;
Vue.prototype.mapCenter = util.config.map_center;
Vue.prototype.mapMaxbounds = util.config.map_maxbounds;
Vue.prototype.defaultApp = util.config.sys_defApp; // 默认选中应用;
Vue.prototype.mapJSON = util.config.mapOrgidJSON; // 机构id对应地图点名称;
Vue.prototype.mapZoomRegion = util.config.map_zoom_region; // 地图显示行政区层级
Vue.prototype.mapZoomVillage = util.config.map_zoom_village; /// /地图显示小区层级
Vue.prototype.mapZoomDoor = util.config.map_zoom_door; // 地图显示楼栋层级

// 初始化系统名称
util.title = function (title) {
    title = title || util.config.sys_SysTitle;
    window.document.title = title;
};

// 构造ajax请求
util.ajax = function (vm) {
    var utilAjax = axios.create({
        baseUrl: '',
        timeout: 3000
    });
    // 构造请求头
    utilAjax.interceptors.request.use(config => {
        if (config.url.indexOf('device/vedio/add') > -1) {
            config.header = {
                'Content-type': undefined
            };
        } else {
            if (config.method === 'post') {
                config.headers = {
                    'Content-type': 'application/json'
                };
            }
        }
        var token = localStorage['token'];
        if (config.url.indexOf('WebAuthentication/token') !== -1) {
            token = localStorage['refreshToken'];
        }
        if (token) {
            config.headers['X-Authorization'] = 'Bear' + token;
        } else {
            console.log('丢失token!');
        }
        return config;
    });
    // 自动处理响应
};

window.g = {
    sys_SysTitle: '监狱地图测试', // 系统名称
    sys_Copyright: 'COPYRIGHT  2018 渝ICP备09080754号 重庆中科云丛科技有限公司 ALL RIGHT RESEVED.CLOUDWALK TECHNOLOGY CO..LED..', // 版权声明
    sys_authExpires: '为避免影响系统正常使用，请及时联系云从工作人员：400-151-5992', // 授权到期
    sys_aboutSystem: '火眼大数据作战平台3.0.0', // 关于系统
    sys_systemId: 1, // 系统编号
    sys_version: '3.0.0', // 系统版本

    sys_appMenuStatus: 1, // 0:头部资源菜单不显示  1:显示

    // 人口
    // sys_defApp: '1', // 默认加载appId
    // webApi_socket: 'ws://192.168.10.119:9980/lion/', // 人口webSocket地址
    // webApi_lion: 'http://192.168.10.119:9980/lion/', // 人口管控主要接口
    // webApi_base: 'http://192.168.10.119:9980/lion/', // 基础数据接口
    // webApi_dic: 'http://192.168.10.119:9980/lion/common/getDicData', // 人口字典获取接口
    // imgHead_url: '', // 人口图片前缀

    // 火眼
    sys_defApp: '0', // 默认加载appId
    webApi_socket: 'ws://192.168.10.59:10003/ocean/', // 火眼webSocket地址
    webApi_base: 'http://192.168.10.59:10002/ocean/', // 火眼基础数据接口
    webApi_ocean: 'http://192.168.10.59:10002/ocean/',
    webApi_dic: 'http://192.168.10.59:10002/ocean/dic/data/ext/list', // 火眼字典获取接口
    imgHead_url: 'http://192.168.10.59:10005/', // 火眼图片前缀

    map_url: 'http://192.168.10.217:8008/{z}/{x}/{y}.png', // 地图服务地址
    // map_url: 'http://192.168.10.59:10004/{z}/{x}/{y}.png', //泉州版本
    map_type: 'gaode', // 地图服务类型
    map_zoom: 14, // 地图默认缩放层级
    map_maxzoom: 18, // 地图最大缩放层级
    map_minzoom: 12, // 地图最小缩放层级
    // map_center: [29.41, 106.53], // 地图默认中心点
    map_center: [29.548907, 106.546154], // 高德
    map_maxbounds: { northEast: [29.574278, 106.70], southWest: [29.523579, 106.33] }, // 地图边界
    map_zoom_region: 15, // 地图显示行政区层级
    map_zoom_village: 17, /// /地图显示小区层级
    map_zoom_door: 19, // 地图显示楼栋层级
    home_map_name: 'chongqing', // 首页地图名称 china,chongqing,fujian,quanzhou
    home_map_distance: 130 // 地图距离（大小）
};

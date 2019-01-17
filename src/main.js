/**
 * @file entry
 * @author cuiliangliang
 * @since 2018/08/28
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {http} from './api'

Vue.use(http);

import './ui';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});

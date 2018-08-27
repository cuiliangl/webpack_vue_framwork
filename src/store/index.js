/**
 * @file vuex
 * @author cuiliangliang
 * @since 2018/08/27
 */

import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
    modules
})

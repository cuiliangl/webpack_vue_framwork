/**
 * @file helloWorld
 * @author cuiliangliang
 * @since 2018/08/27
 */

 import {api} from 'api';
 import {
     GET_USER_INFO
 } from '../mutations';

const state = {
    userInfo: {
        name: 'Jack'
    }
}

const mutations = {
    [GET_USER_INFO](state, payload) {
        state.userInfo = payload;
    }
}

// 所有异步数据在这里获取
const actions = {
    async getUserInfo({commit}, params) {
        let data = await api.getUserInfo(params);

        commit('GET_USER_INFO', data);
    }
}

export default {
    state,
    mutations,
    actions
}

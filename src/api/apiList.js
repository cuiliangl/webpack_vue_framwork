/**
 * @file 管理所有请求
 * @author cuiliangliang
 * @since 2018/08/29
 */

 import instance from './options';

 export default {
     getUserInfo(params) {
        return instance.get('userinfo', params);
     },
     getList(data) {
         // close loading
        return instance.post('getList', data, true);
     }
 }

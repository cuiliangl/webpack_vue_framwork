/**
 * @file api
 * @author cuiliangliang
 * @since 2018/08/29
 */

 import instanceApi from './apiList';

 export const api = instanceApi;

 export const http = {
     install(Vue) {
         Vue.prototype.$http = api;
     }
 }
 
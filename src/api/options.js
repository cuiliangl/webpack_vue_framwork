/**
 * @file axios全局配置
 * @author cuiliangliang
 * @since 2018/08/29
 */

 import axios from 'axios';
 import qs from 'qs';

 const baseURL = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? '127.0.0.1'

  // 线上环境api接口
  : 'culiang.com';


  // 创建axios实例
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
  });


  // 请求拦截器
  instance.interceptors.request.use(config => {
      console.log(config)
      // 默认开启loading slience 为true时close loading
      if (!config.silence) {
         // show loading

         console.log('show loading...')
      }

      return config;
  }, error => {
      return Promise.reject(error);
  });


  // 响应拦截器
  instance.interceptors.response.use(response => {
      // close loading

      return response;

  }, error => {
    return Promise.reject(error);
  })


  export default {
    /**
     * GET 请求
     * @param {String} url 路径 Required
     * @param {Object} params 参数 Required
     * @param {Boolean} silence 是否开启loading，默认开启，如果不开启则传true Option
     */
    get(url, params = {}, silence) {
        return instance({
            method: 'get',
            url,
            params,
            silence
        })
    },

    /**
     * POST请求
     * @param {String} url Required
     * @param {Object} data Required
     * @param {Boolean} silence option
     */
    post(url, data = {}, silence) {
        return instance({
            method: 'post',
            url,
            data: qs.stringify(data),
            silence,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    }
  }

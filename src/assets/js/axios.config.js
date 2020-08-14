// axios 配置
import Vue from 'vue';
import axios from 'axios';

// 设置 axios 请求 baseUrl
axios.defaults.baseURL = 'http://api.imooc.hybrid.lgdsunday.club/';

axios.interceptors.request.use(config => {

  // 当请求中存在 params 的时候，为 params 新增 token 字段
  if (config.params) {
    config.params.token = '47680100-a969-11ea-ad19-03481aa896cd';
  }
  // 当请求不存在 params 的时候，为它设置 params 对象
  else {
    config.params = {
      token: '47680100-a969-11ea-ad19-03481aa896cd'
    };
  }

  return config;
});

/**
 * 设置拦截器，interceptors 响应处理，
 */
axios.interceptors.response.use((response) => {
  return response.data.data;
}, (error) => {
  return Promise.reject(error);
});

//  绑定到 vue 原型中
Vue.prototype.$http = axios;

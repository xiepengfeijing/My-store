import axios from 'axios';
const MyAxios = {};
MyAxios.install = function (Vue) {
  // axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
  // Vue.prototype.$http = axios;
  const instance = axios.create({
    baseURL: 'http://192.168.129.68:8888/api/private/v1/'
  });
  Vue.prototype.$http = instance;
};

export default MyAxios;

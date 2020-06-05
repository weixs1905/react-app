import axios from 'axios'
const Axios = axios.create({
  baseURL: 'https://www.fastmock.site/mock/d7b3beb5b6af55fa4cfab7efb692af0b/api',
  timeout: 20000,
//   headers: {
//     "Content-Type": "application/json;charset=UTF-8"
// }
});
// Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default{
  get(url,params={}){
    return new Promise((resolve,reject)=>{
      Axios.get(url,{params:params}).then(response=>{
        resolve(response.data)
      },err=>{
        reject(err)
      })
      .catch(error=>{
        reject(error)
      })
    })
  },
  post(url,params={},config={}){
    return new Promise((resolve,reject)=>{
      Axios.post(url,params,config).then(response=>{
        resolve(response.data)
      },err=>{
        reject(err)
      })
      .catch(error=>{
        reject(error)
      })
    })
  }
}
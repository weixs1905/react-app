import http from './services'
//首页文章列表接口
 export const getList = ()=> http.get('/list')
 export const detailInfo = (params)=> http.post('/detail',params)
 export const login = (params)=> http.post('/login',params)
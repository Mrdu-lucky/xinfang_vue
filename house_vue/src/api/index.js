//1.引入 axios,不支持jsonp,需要下载第三方jsonp库
import axios from 'axios';



// export function requestLogin(id,data) {
//   return axios.get('/api/login?id='+id,data)
// }
// export function requestSign(data) {
//   return axios.post('/api/sign',data)
// }

export function addUser(data) {
  return axios.post('/api/sign',data)
}
export function updataPas(data) {
  return axios.post('/api/profile/updataPas',data)
}
export function updataNam(data) {
  return axios.post('/api/profile/updataNam',data)
}
export function updataImg(data) {
  return axios.post('/api/profile/updataImg',data)
}
export function checkUserName(data) {
  return axios.post('/api/checkNa',data)
}
export function postUser(data) {
  return axios.post('/api/login',data)
}

export function AddCollect(data) {
  return axios.post('/api/add-collect',data)
}
export function DelCollect(data) {
  return axios.post('/api/del-collect',data)
}

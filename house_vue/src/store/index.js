import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
Vue.use(Vuex);
const state = {
  notes: [],
  activeNote: {},
  aaa:5,
  testLogin:false,
  testSign:false,
  tabBt:true,
  tabUser:false,
  userImg:require('../assets/images/per_img.png'),
  user:{},
  starred: false
}

if(sessionStorage.getItem('user')){
  let user=JSON.parse(sessionStorage.getItem('user'));
  state.tabBt = false;
  state.tabUser = true;

  if(user.headImg){
    state.userImg = user.headImg;
  }
  state.user = user;
}

export default new Vuex.Store({
  state,//所有的状态
  getters,//所有的状态的计算属性
  mutations//所有更改状态的方法
});

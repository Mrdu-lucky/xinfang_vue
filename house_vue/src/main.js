import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import Resource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'
import "./assets/css/base.css"  //公共样式
import './assets/css/viewer.min.css'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.use(Resource)
Vue.use(Vuex)
Vue.use(ElementUI)

new Vue({
	el: '#app',
  router,
	store, // inject store to all children
	...App
})

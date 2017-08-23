<template>
  <div id="app">

    <star></star>

    <header-div></header-div>

    <keep-alive>
      <router-view class="view" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view class="view" v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>

    <back-to-top></back-to-top>

    <login v-if="testLogin"/>

    <sign v-if="testSign"/>

    <footer-div/>
  </div>
</template>

<script>
  import Star from "./components/Star"
  import BackToTop from './components/BackToTop'
  import HeaderDiv from './components/Header'
  import FooterDiv from './components/Footer'
  import Login from './components/Login'
  import Sign from './components/Sign'
  import {mapState} from 'vuex';

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      HeaderDiv,
      FooterDiv,
      BackToTop,
      Star,
      Login,
      Sign
    },
    computed: {
      ...mapState(['testSign', 'testLogin'])
    },
    methods: {}

  }
</script>

<style>

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body, html, #app {
    min-height: 100%;
  }

  .view {
    min-height: 650px;
  }

</style>

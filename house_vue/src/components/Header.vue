<template>
  <header class="headerDiv">

    <div class="el-menu--dark headerChild" :class="{'isopacity': isopacity}">

      <el-menu router theme="dark" :default-active="tabactive" class="el-menu-demo" mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="/home" id="logo">
          <img src="../assets/images/logo.png">
        </el-menu-item>

        <el-menu-item index="/home">新房楼盘</el-menu-item>
        <el-menu-item index="/safe">安全保障</el-menu-item>
        <el-menu-item index="/help">新手指南</el-menu-item>
        <el-menu-item index="/aboutus">关于我们</el-menu-item>

        <el-submenu index="/profile" v-if="tabUser">
          <template slot="title"><img :src="userImg" class="smallhead">{{user.userName}}</template>
          <el-menu-item index="/shoucang">个人中心</el-menu-item>
          <el-menu-item index="/notes">记事本</el-menu-item>

          <div style="display: none">
            <el-menu-item index="/order"></el-menu-item>
            <el-menu-item index="/shopCar"></el-menu-item>
            <el-menu-item index="/updataInfo"></el-menu-item>
          </div>
          <el-button type="text" @click="toHome">退出登录</el-button>
        </el-submenu>

        <el-button-group class="perbtns" v-if="tabBt">
          <el-button type="primary" @click="loginDiv"><i class="icon-login iconfont"></i>登录</el-button>
          <el-button type="primary" @click="signDiv">注册<i class="iconfont icon-register"></i></el-button>
        </el-button-group>

      </el-menu>

    </div>
  </header>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  import * as Types from '../store/mutation-types'

  export default {
    data() {
      return {
        isopacity: false,
        tabactive: "/home"
      }
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'tabchange'
    },
    props: [],
    created() {
      this.tabchange();
    },
    computed: {
      ...mapState(['tabBt', 'tabUser', 'user','userImg'])
    },
    methods: {
      ...mapMutations([[Types.CHA_LOGIN], [Types.CHA_SIGN], [Types.TAB_BT],[Types.FAL_STA],[Types.UPDATA_INFO]]),
      signDiv() {
        this[Types.CHA_SIGN]();
      },
      loginDiv() {
        this[Types.CHA_LOGIN]();
      },
      toHome() {
        this.$router.push({path: '/home'});
        sessionStorage.removeItem('user');
        this[Types.TAB_BT]();
        this[Types.FAL_STA]();
        this[Types.UPDATA_INFO]({});
      },


      //切换nav
      handleSelect(key, keyPath) {
//        console.log(key, keyPath);
      },
      tabchange() {
        this.tabactive = this.$route.path;
        if (this.$route.name == "Safe") {
          this.isopacity = true;
        } else {
          this.isopacity = false;
        }
      }
    }
  }
</script>
<style scoped>
  .smallhead{
    width: 22px;
    height:22px;
    vertical-align: middle;
    margin: 0 10px 2px 0;
    border-radius: 10%;
  }
  .el-menu--dark.isopacity *, .el-menu--dark.isopacity {
    background: none;
  }

  .el-menu--dark.isopacity .el-button--primary {
    border-color: #fff;
  }

  .el-button.el-button--primary i {
    font-size: 14px;
    padding: 0 5px;
    vertical-align: middle;
  }

  .el-menu-item {
    padding: 0;
  }

  header {
    height: 60px;
  }

  .headerChild {
    height: 60px;
  }

  .headerChild > .el-menu {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    padding-right: 34px;
  }

  .headerChild > .el-menu > li {
    flex: 1;
  }

  .el-menu-item.is-active {
    color: #fff;
    border-bottom: 5px solid #20a0ff;
  }

  #logo {
    display: inline-block;
    padding-right: 10%;
    border-bottom: none;
  }

  #logo img {
    margin-top: 10px;
    height: 40px;
  }

  .perbtns {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }

  #tabUser {
    border-bottom: none;
  }
</style>

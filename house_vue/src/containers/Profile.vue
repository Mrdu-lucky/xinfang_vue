<template>
  <div id="userInfo" class="inner">
    <el-row type="flex">
      <el-col :span="5">
        <div class="grid-content">

          <div class="headimgdiv">
            <img :src="userImg" class="headimg">
            <p class="imgloading" v-if="loadingImg"></p>
            <p class="username">{{user.userName}}</p>
          </div>

          <uploadqiniu :propsrc="userImg" @croped="croped" @imageuploading="imageuploading"></uploadqiniu>

          <el-menu router :default-active="tabactive" class="el-menu-vertical-demo">
            <el-menu-item index="/shoucang">我的收藏</el-menu-item>
            <el-menu-item index="/order">认购订单</el-menu-item>
            <el-menu-item index="/updataInfo">账号信息</el-menu-item>
          </el-menu>
        </div>
      </el-col>

      <el-col :span="19" style="padding-left: 40px;">
        <div class="grid-content">

          <el-menu class="el-menu-demo" mode="history">

            <keep-alive>
              <router-view class="profileview"></router-view>
            </keep-alive>

          </el-menu>
        </div>

      </el-col>

    </el-row>
  </div>
</template>
<script>
  import {updataImg} from '../api';
  import {mapState, mapMutations} from 'vuex';
  import * as Types from '../store/mutation-types'
  import Uploadqiniu from '../components/Uploadqiniu.vue'

  export default {
    data() {
      return {
        tabactive: "/order",
        loadingImg: false
      }
    },
    created() {
      this.tabchange();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'tabchange'
    },
    computed: {
      ...mapState(['userImg', 'user'])
    },
    components: {Uploadqiniu},
    methods: {
      ...mapMutations([[Types.UPDATA_IMG], [Types.UPDATA_INFO]]),
      tabchange() {
        this.tabactive = this.$route.path;
      },
      imageuploading() {
        this.loadingImg = true;
      },
      croped(pic) {
        this.updataImg(pic);
      },

      updataImg(imageUrl) {

        let imgIfo = {id: this.user.id, userImg: imageUrl};

        updataImg(JSON.stringify(imgIfo)).then(res => {

          let {msg, code, userData} = res.data;

          if (code == 0) {
            this.$message({
              message: msg,
              type: 'error'
            });
          } else {
            this.$message({
              message: msg,
              type: 'success'
            });
            if (userData.headImg) {
              this[Types.UPDATA_IMG](userData.headImg);
            } else {
              this[Types.UPDATA_IMG]();
            }
            this.loadingImg = false;

            this[Types.UPDATA_INFO](userData);

            sessionStorage.setItem('user', JSON.stringify(userData));

          }
        });

      }
    }
  }
</script>
<style scoped>
  .profileview {
    padding: 10px 30px;
    min-height: 650px;
  }

  #userInfo {
    margin: 50px auto;
  }

  .username {
    line-height: 3;
    font-size: 14px;
  }

  .grid-content {
    border-radius: 4px;
    background: #eef1f6;
    height: 100%;
    position: relative;
  }

  .headimg {
    margin: 50px 0 0;
    width: 100px;
    border-radius: 10%;
  }

  .headimgdiv {
    position: relative;
    height: 200px;
  }

  .el-menu-vertical-demo {
    margin: 20px 0 0;
  }
</style>

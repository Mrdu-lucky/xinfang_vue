<template>
  <div id="detail">
    <div v-if="data.huxingList">
      <el-row style="max-width: 1200px;margin: 0 auto;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item onclick="history.back()">新房楼盘</el-breadcrumb-item>
          <el-breadcrumb-item>{{data.base.buildingname}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-col :xs="16" :sm="16">
          <div class="grid-content bg-purple">
            <el-carousel trigger="click" :interval="5000" height="500px" indicator-position="outside">
              <el-carousel-item v-for="imgsrc in data.imgPath" :key="imgsrc.imgPath">
                <img :src="imgsrc.imgPath+'-800_500'">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :xs="8" :sm="8" style="padding-left: 20px;">
          <div class="grid-content bg-purple-light">
            <div class="el-card" style="padding: 12px;height: 500px;">
              <h2 class="el-submenu-title">{{data.base.buildingname}}</h2>
              <div class="hbright-content" style="text-align: left;line-height: 2.2;padding: 0 20px 20px;">
                <ul class="hbright-content-title clearFix">
                  <li class="hbrts-1"><b class="hbrts-1-i"></b><i
                    class="iconfont icon-chengshi"></i><span>{{data.base.province + " " + data.base.city}}</span>
                  </li>

                  <li class="price-li">均 价：<span class="price-number"
                                                 style="font-size: 26px;color: #e8380d"><b>{{data.base.remark}}</b></span>
                    元/m<i>2</i></li>
                  <li class="special-li"><span>特 色：</span><span class="special-span">{{data.base.featuretype}}</span>
                  </li>
                  <li class="special-li"><span>物 业：</span><span class="special-span">{{data.base.propertytype}}</span>
                  </li>
                  <li class="special-li"><span>产权年限：</span><span class="special-span"><span
                    class="special-year"><b>{{data.base.realestatelife}}</b></span>年</span></li>
                  <li class="hbrts-2"><b class="hbrts-2-i"></b><span>装修状况：{{data.base.decoratestatus}}</span></li>
                  <li class="special-li"><span>楼盘地址：</span><span class="special-span">{{data.base.mapaddr}}</span></li>
                  <li class="special-li"><span>咨询热线：</span><span class="tel-num"
                                                                 style="font-size: 20px;color: #e8380d"><b>010-58037333</b></span>
                  </li>
                </ul>

                <div class="btns">

                  <el-button :type="starred?'success':'primary'" @click="ifstarred">{{starred ? '您已收藏' : '收藏楼盘'}}<i
                    :class="(starred?'el-icon-star-on':'el-icon-star-off')+' el-icon--right'"></i></el-button>
                  <el-button :disabled="data.huxingList.length==0" :type="ordered?'success':'primary'"
                             @click="ifordered">{{ordered ? '您已认购' : '立即认购'}}<i
                    :class="(ordered?'el-icon-document':'el-icon-edit')+' el-icon--right'"></i></el-button>
                </div>
                <p v-if="data.huxingList.length==0" style="text-align: center">该楼盘暂时还不能认购!</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>


      <div class="inner">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="楼盘简介" name="first"></el-tab-pane>
          <el-tab-pane label="楼盘信息" name="second"></el-tab-pane>
          <el-tab-pane label="楼盘图库" name="third"></el-tab-pane>
          <el-tab-pane label="楼盘动态" name="fourth"></el-tab-pane>
          <el-tab-pane label="全景看房" name="fifth"></el-tab-pane>
        </el-tabs>


        <transition name="el-fade-in">
          <keep-alive>
            <component :is="tabnow" :rdata="data" class="detailcomponent"></component>
          </keep-alive>
        </transition>

      </div>

    </div>
  </div>
</template>
<script>
  import Dhome from '../components/detail/Dhome.vue'
  import Dmsg from '../components/detail/Dmsg.vue'
  import Dpic from '../components/detail/Dpic.vue'
  import Dnews from '../components/detail/Dnews.vue'
  import Dview from '../components/detail/Dview.vue'
  import Dorder from '../components/detail/Dorder.vue'

  import {AddCollect, DelCollect} from '../api/index'
  import {mapState, mapMutations} from 'vuex'
  import * as Types from '../store/mutation-types'

  export default {
    props: [],
    data() {
      return {
        data: {
          base: {},
          imgPath: []
        },
        detailId: '',
        activeName: 'first',
        tabnow: "Dhome",
        ordered: false,
        dialogVisible: false
      }
    },
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    computed: {
      ...mapState(['starred', "user"])
    },
    components: {Dhome, Dmsg, Dpic, Dnews, Dview, Dorder},
    methods: {
      ...mapMutations([[Types.CHA_LOGIN], [Types.TRU_STA], [Types.FAL_STA],[Types.UPDATA_INFO]]),
      handleClick(tab, event) {
        switch (tab.index) {
          case "0":
            this.tabnow = "Dhome";
            break;
          case "1":
            this.tabnow = "Dmsg";
            break;
          case "2":
            this.tabnow = "Dpic";
            break;
          case "3":
            this.tabnow = "Dnews";
            break;
          case "4":
            this.tabnow = "Dview";
            break;
        }
      },
      fetchData() {
        let route = this.$route;
        if (route.name == "Home" || route.name == "Shoucang") {
          this.$destroy();
          return;
        } else if (!route.params.id || this.detailId == route.params.id) {
          return;
        }

        this.detailId = route.params.id;
        this.$http.jsonp('http://wxtest1.galaxyhouse.cn/wechat/rest/baseInfoWxController.do?getRecommendBaseDetail', {
          params: {
            baseInfoId: route.params.id
          },
          jsonpCallback: "success_jsonpCallback"
        }).then(function (response) {
          this.data = JSON.parse(response.bodyText).obj;
          this.data.imgPath = this.data.imgPath.reverse();

          let testStarred = this.user.collection;
          if (testStarred && testStarred.length != 0) {
            let collect = testStarred.find(item => item.id === this.data.base.id);
            if (collect) {
              this[Types.TRU_STA]()
            } else {
              this[Types.FAL_STA]();
            }
          }


        }.bind(this)).catch(function (response) {
          console.log(response);
        });
      },
      ifstarred() {

        if (this.user.userName) {
          let base = this.data.base;
          let testCollect = {
            id: this.user.id,
            collection: {
              buildingname: base.buildingname,
              province: base.province,
              region: base.region,
              id: base.id,
              imgPath: this.data.imgPath[0].imgPath,
              remark: base.remark
            }
          };

          if (this.starred) {
            this.$confirm('确认取消收藏？').then(_ => {
              DelCollect(JSON.stringify(testCollect)).then(res => {
                let {msg, userData} = res.data;
                this[Types.FAL_STA]();
                setTimeout(_=>{
                  this.$message(msg);
                },300)
                this[Types.UPDATA_INFO](userData);
                sessionStorage.setItem('user', JSON.stringify(userData));
              });
            }).catch(_ => {
            });
          } else {
            AddCollect(JSON.stringify(testCollect)).then(res => {
              let {msg, num, userData} = res.data;

              this[Types.TRU_STA]();
              this.$message({
                message: msg,
                type: 'success'
              });
              this[Types.UPDATA_INFO](userData);
              sessionStorage.setItem('user', JSON.stringify(userData));
            });
          }
        } else {
          this[Types.CHA_LOGIN]();
        }


      },
      ifordered() {
        if (this.data.huxingList.length == 0) {
          this.$alert('该楼盘暂时还不能认购！', '抱歉', {
            confirmButtonText: '确定'
          });
          return;
        }
        if (!this.ordered) {
          this.ordered = true;
          this.$message({
            message: '您已认购成功！',
            type: 'success'
          });
        } else {
          this.$confirm('确认取消认购？')
            .then(_ => {
              this.ordered = false;
              this.$message('您已取消认购！');
            })
            .catch(_ => {
            });
        }
      }
      ,
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      }
    }
  }
</script>
<style scoped>
  .el-submenu-title {
    line-height: 2.6;
  }

  .hbright-content-title {
    font-size: 15px;
  }

  .inner {
    padding-top: 20px;
  }

  .btns {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
  }

  .icon-chengshi {
    padding: 0 10px 0 0;
    font-size: 18px;
    color: seagreen;
  }

  .hbrts-1 {
    text-align: center;
    font-size: 16px;
  }
</style>

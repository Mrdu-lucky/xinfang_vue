<template>
  <div id="homediv">
    <el-carousel trigger="click" indicator-position="outside" :interval="5000" height="450px">
      <el-carousel-item v-for="item in sliders" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <el-row style="max-width: 1200px;margin: 0 auto;padding-bottom: 50px;min-height: 500px;">
      <h1 class="el-tag--success">推荐楼盘</h1>
      <h4 class="el-tag--success">新房精挑细选高性价比</h4>
      <el-col :xs="24" :sm="12" v-for="(o,index) in recommend.list" :key="index">
        <router-link :to="{ name: 'Detail', params: { id: o.baseInfoId }}">
          <el-card :body-style="{ padding: '0px' }">
            <div class="image">
              <img v-lazy="o.imagePath+'-580_360'">
              <p class="imgloading"></p>
            </div>
            <div class="card-text">
              <div style="text-align: left;font-size: 18px;display: flex;justify-content: space-between">
                <span style="font-size: 26px;font-weight: bolder">{{o.buildingname}}</span>
                <span>均价: <strong class="salesprice" :style="{'color':o.salesprice!='待定'?('rgb(232, 56, 13)'):('rgb(220, 150, 7)')}"> {{o.salesprice}} </strong> 元/平</span>
              </div>
              <div style="text-align: right;display: flex;justify-content: space-between">
                <span>{{o.propertyaddr}}</span>
                <span>物业类别: {{o.propertytype}}</span>
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>

  </div>
</template>
<script>
  export default {
    props: [],
    data() {
      return {
        sliders: ["http://oe8wmyqo6.bkt.clouddn.com/o_1b1h19p571rj0nhsksarqj1t4lf.jpg-1920_450",
          "http://oe8wmyqo6.bkt.clouddn.com/o_1b1h1a19lkne1jljjee1a5pro1v.jpg-1920_450",
          "http://oe8wmyqo6.bkt.clouddn.com/o_1b1h1a6p5elmcgj1cgv1sh6126d1f.jpg-1920_450"],
        recommend: {
          list: [],
          page: 1
        }
      }
    },
    created() {

      this.$http.jsonp('http://wxtest1.galaxyhouse.cn/wechat/rest/baseInfoWxController.do?getRecommendBaseList&buildingname&city=北京', {
        jsonpCallback: "success_jsonpCallback"
      }).then(function (response) {
        this.recommend.list = JSON.parse(response.bodyText).result;
        this.recommend.page = 1;
      }.bind(this)).catch(function (response) {
        console.log(response);
      });
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped>
  .el-card{
    /*background: rgba(0,0,0,0.75);*/
  }
  .card-text{
    padding: 14px 30px;
    /*color: #fff;*/
  }
  .salesprice{
    font-size: 24px;
  }
  .el-card .image {
    overflow: hidden;
    max-height: 360px;
    max-width: 580px;
    vertical-align: top;
    position: relative;
  }

  .el-card img {
    width: 100%;
    transition: 10s all;
  }
  .el-card img:hover{
    transform: scale(1.1);
  }
  .el-col {
    padding: 10px;
  }

  .el-tag--success {
    background: none;
    color: #324157;
    padding: 20px 0 10px;
  }


</style>

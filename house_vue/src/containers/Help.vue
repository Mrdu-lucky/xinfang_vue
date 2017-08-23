<template>
  <div id="help">
    <div class="content">
      <div class="banner"></div>
      <div class="content_div clearFix">
        <div class="inner">
          <h3>我们的优势</h3>
          <div class="box">
            <div class="icon"></div>
            <p>优质项目，一站式服务</p>
          </div>
          <div class="box">
            <div class="icon"></div>
            <p>优惠升级，置业首选</p>
          </div>
          <div class="box">
            <div class="icon"></div>
            <p>参与设计，梦想庄园</p>
          </div>
          <div class="box">
            <div class="icon"></div>
            <p>精装定制，多种风格</p>
          </div>
        </div>
      </div>
      <div class="content_div content_white">
        <h3>我们的产品模式</h3>
      </div>
      <div class="two_color">
        <div class="half fl"></div>
        <div class="half fr"></div>
        <div class="pic"></div>
      </div>
      <div class="content_div how_buy">
        <h3>如何购买优惠</h3>
      </div>
      <div class="content_inner">

        <el-steps :space="200" :active="stepactive" finish-status="success" style="padding-left: 40px;padding-bottom: 40px">
          <el-step title="注册"></el-step>
          <el-step title="登录"></el-step>
          <el-step title="购买优惠"></el-step>
          <el-step title="参与设计"></el-step>
        </el-steps>

        <div class="block">
          <el-carousel trigger="click" height="450px" @change="changeslider" :interval="5000" indicator-position="outside">
            <el-carousel-item v-for="item in sliders" :key="item">
              <div class="pic"><img :src="item" style="width: 100%;height: 100%;"></div>
            </el-carousel-item>
          </el-carousel>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

  export default {
    props: [],
    data() {
      return {
        sliders:["http://omjbzg6gs.bkt.clouddn.com/house_vue/images/help/slider_1.jpg",
          "http://omjbzg6gs.bkt.clouddn.com/house_vue/images/help/slider_2.jpg",
          "http://omjbzg6gs.bkt.clouddn.com/house_vue/images/help/slider_3.jpg",
          "http://omjbzg6gs.bkt.clouddn.com/house_vue/images/help/slider_4.jpg"
        ],
        stepactive:1
      }
    },
    computed: {},
    components: {},
    methods: {
      changeslider(n){
        this.stepactive = n+1;
      }
    }
  }
</script>
<style scoped>

  .content_inner .pic{
    height:100%;
  }
  .content .banner{
    width: 100%;
    background: url("http://omjbzg6gs.bkt.clouddn.com/house_vue/images/help/pro_model_banner.jpg") no-repeat center top;
    height: 420px;
  }
  .content .content_div{
    background: #f5f8fb;
    padding-bottom: 60px;
  }
  .content .content_div h3{
    font-size: 36px;
    line-height: 130px;
    width: 728px;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }
  .content .content_div h3:after, .content .content_div h3:before{
    position: absolute;
    content: "";
    left: 0;
    top: 50%;
    width: 200px;
    height: 1px;
    background: #e1e2e6;
  }
  .content .content_div h3:after{
    right: 0;
    left:auto;
  }
  .content_div .inner{
    width:1200px;
    margin: 0 auto;
    padding-top: 33px;
  }
  .content_div .box{
    float: left;
    width: 25%;
    text-align: center;
  }
  .content_div .box .icon{
    display: inline-block;
    width: 90px;
    height: 90px;
    background: url("http://omjbzg6gs.bkt.clouddn.com/house_vue/images/personal-icon.png") no-repeat -115px -151px;
  }
  .content_div .box:nth-child(3) .icon{
    background-position: -13px -151px;
  }
  .content_div .box:nth-child(4) .icon{
    background-position: -115px -46px;
  }
  .content_div .box:nth-child(5) .icon{
    background-position: -13px -46px;
  }
  .content_div .box p{
    font-size: 18px;
    line-height: 60px;
  }
  .content .content_div.content_white{
    background: #fff;
    padding-bottom: 0;
  }
  .content .content_div.content_white h3{
    line-height: 196px;
  }
  .two_color{
    height: 620px;
    position: relative;
  }
  .two_color .half{
    width: 50%;
    height: 100%;
    background: #fa7d00;
  }
  .two_color .half:nth-child(2){
    background: #29cc9e;
  }
  .two_color .pic{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 1088px;
    height: 100%;
    background: url("http://omjbzg6gs.bkt.clouddn.com/house_vue/images/help/twocolor.png") no-repeat left 80px;
  }
  .content .content_div.how_buy{
    padding-bottom: 0;
    background: none;
  }
  .content .content_div.how_buy h3{
    line-height: 193px;
  }
  .content .content_inner{
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 170px;
  }


  .content .content_inner .banner_slider .pic{
    width: 100%;
    height: 100%;
    position: relative;
    display: none;
  }



</style>


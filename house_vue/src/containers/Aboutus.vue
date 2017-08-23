<template>
  <div>
    <div class="aboutUs">
      <div class="aboutUs-banner"></div>
      <div class="aboutUs-content">
        <div class="aboutUs-content-1" id="gsjj">
          <div class="aboutUs-content-div">
            <div class="content-div-title">
              <p class="content-div-big-title">
                <img class="big-title-img"
                     src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-title-1.png" alt="">
              </p>
              <p class="content-div-small-title">星河新房：互联网新型房产</p>
            </div>
            <div class="content-div-content">
              <p class="content-div-p"><span class="content-div-span content-div-span-1"></span>星河新房依托星河互联下的星河空间集团，将互联网引入房地产住宅领域。
              </p>
              <p class="content-div-p"><span class="content-div-span content-div-span-2"></span>星河新房是用互联网重构房地产住宅的产业链和业务链，提高产业效率。
              </p>
              <p class="content-div-p"><span class="content-div-span content-div-span-3"></span>整合全国各地各种类型房地产住宅资源，线上平台+线下项目管理结合打造新型住宅开发、销售模式。
              </p>
            </div>
          </div>
          <div class="aboutUs-content-div">
            <div class="content-div-title">
              <p class="content-div-big-title">
                <img class="big-title-img"
                     src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-title-2.png" alt="">
              </p>
              <p class="content-div-small-title">星河空间：互联网众创空间</p>
            </div>
            <div class="content-div-content">
              <p class="content-div-p"><span class="content-div-span content-div-span-1"></span>星河空间是新型的互联网孵化基地。为互联网企业提供一个创业、成长、社交三位一体的超级友好的办公社区。
              </p>
              <p class="content-div-p"><span class="content-div-span content-div-span-2"></span>致力于实现房地产住宅领域的互联网化，将分享经济的创新模式引入房地产领域。
              </p>
              <p class="content-div-p"><span class="content-div-span content-div-span-3"></span>星河空间总部坐落于北京中关村核心区，面积约两万平米，是全国最大的单体孵化基地。
              </p>
            </div>
          </div>
        </div>
        <div class="aboutUs-content-2" id="lxwm">
          <div class="aboutUs-content-2-title">
            <p class="aboutUs-content-2-p">
              <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-title-3.png" class="aboutUs--content-2-img">
            </p>
          </div>
          <div class="aboutUs-content-div">

            <el-popover
              ref="popover5"
              placement="top"
              title="新河新房"
              width="1200"
              visible-arrow="false" @show="initmap = true">
                <baidumap :zoom="{'nowZoom': 18}" v-if="initmap"></baidumap>
            </el-popover>

            <p class="tra-map">
              <img class="map-img"
                   src="https://api.map.baidu.com/staticimage/v2?ak=Ep6PzMQy7ActmQkphOC8Ia6gtM0rfBC3&scale=1&width=900&height=500&copyright=1&zoom=18&center=116.316577,40.045025"/>
              <el-tooltip class="item" effect="dark" content="星河新房" placement="top">
                <el-button v-popover:popover5 class="maplogo">
                  <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-logo.png" >
                </el-button>
              </el-tooltip>
            </p>



            <p class="aboutUs-content-2-address">公司地址：北京市海淀区上地信息路18号；网址：www.galaxyhouse.cn。</p>
          </div>
        </div>
        <div class="aboutUs-content-3">
          <div class="aboutUs-content-3-title">
            <p class="aboutUs-content-3-p">
              <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-title-4.png" alt=""
                   class="aboutUs--content-3-img">
            </p>
          </div>
          <div class="aboutUs-content-photos">
            <ul class="aboutUs-photos-ul">
              <li class="aboutUs-photos-li"><img
                src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-photo-1.jpg" alt=""
                class="aboutUs-photos-img"></li>
              <li class="aboutUs-photos-li"><img
                src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-photo-2.jpg" alt=""
                class="aboutUs-photos-img"></li>
              <li class="aboutUs-photos-li"><img
                src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-photo-3.jpg" alt=""
                class="aboutUs-photos-img"></li>
              <li class="aboutUs-photos-li"><img
                src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-photo-4.jpg" alt=""
                class="aboutUs-photos-img"></li>
              <li class="aboutUs-photos-li"><img
                src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-photo-5.jpg" alt=""
                class="aboutUs-photos-img"></li>
              <li class="aboutUs-photos-li"><img
                src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-photo-6.jpg" alt=""
                class="aboutUs-photos-img"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Baidumap from "../components/Baidumap.vue"

  export default {
    props: [],
    data() {
      return {
        initmap:false
      }
    },
    computed: {},
    components: {Baidumap},
    methods: {}
  }
</script>
<style scoped>
.tra-map .maplogo{
  width: 60px;
  height: 68px;
}
  .aboutUs {
    width: 100%;
    overflow: hidden;
  }

  .aboutUs .aboutUs-banner {
    /*width: 1920px;*/
    height: 420px;
    background: url('http://omjbzg6gs.bkt.clouddn.com/house_vue/images/aboutus/aboutUs-banner.jpg') no-repeat center top;
  }

  .aboutUs .aboutUs-content {
    width: 100%;
    background-color: #fff;
    overflow: hidden;
  }

  .aboutUs-content .aboutUs-content-1 {
    width: 100%;
    height: 666px;
    background-color: #f5f5f5;
    overflow: hidden;
  }

  .aboutUs-content-1 .aboutUs-content-div {
    width: 904px;
    height: 220px;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 75px;
  }

  .aboutUs-content-div .content-div-title {
    width: 904px;
    text-align: center;
    margin-bottom: 50px;
  }

  .content-div-title .content-div-big-title {
    width: 565px;
    height: 28px;
    margin: 0 auto;
  }

  .big-title-img {
    width: 565px;
    height: 28px;
  }

  .content-div-title .content-div-small-title {
    height: 16px;
    line-height: 16px;
    color: #999;
    margin-top: 18px;
  }

  .content-div .content-div-content {
    height: 138px;
    margin-top: -30px;
  }

  .content-div-content .content-div-p {
    height: 16px;
    line-height: 16px;
    margin-top: 28px;
  }

  .content-div-p .content-div-span {
    width: 10px;
    height: 10px;
    margin-right: 20px;
    margin-bottom: 1px;
    /*float: left;*/
  }

  .content-div-p .content-div-span-1 {
    background-color: #ffa415;
  }

  .content-div-p .content-div-span-2 {
    background-color: #29cc9e;
  }

  .content-div-p .content-div-span-3 {
    background-color: #e8380d;
  }

  .aboutUs-content .aboutUs-content-2 {
    height: 690px;
  }

  .aboutUs-content-2 .aboutUs-content-2-title {
    width: 565px;
    height: 28px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 50px;
  }

  .aboutUs-content-2-title .aboutUs--content-2-img {
    width: 565px;
    height: 28px;
  }

  .aboutUs-content-2 .aboutUs-content-div {
    width: 900px;
    margin: 0 auto;
  }

  .aboutUs-content-div .aboutUs-content-2-map {
    width: 900px;
    height: 500px;
    margin: 0 auto;
    position: relative;
  }

  .aboutUs-content-2-map .content-2-map-img {
    width: 900px;
    height: 500px;
  }

  .aboutUs-content-2-map .content-2-logo-img {
    width: 60px;
    height: 68px;
    position: absolute;
    top: 205px;
    left: 448px;
  }

  .aboutUs-content-div .aboutUs-content-2-address {
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 20px;
  }

  .aboutUs-content .aboutUs-content-3 {
    height: 680px;
    overflow: hidden;
    background-color: #f5f5f5;
  }

  .aboutUs-content-3 .aboutUs-content-3-title {
    width: 565px;
    height: 28px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 50px;
  }

  .aboutUs-content-3-title .aboutUs--content-3-img {
    width: 565px;
    height: 28px;
  }

  .aboutUs-content-3 .aboutUs-content-photos {
    width: 900px;
    height: 380px;
    margin: 0 auto;
    overflow: hidden;
  }

  .aboutUs-content-photos .aboutUs-photos-ul {
    width: 930px;
    height: 410px;
    margin-top: -30px;
    margin-left: -30px;
  }

  .aboutUs-photos-ul .aboutUs-photos-li {
    width: 280px;
    height: 175px;
    float: left;
    margin-left: 30px;
    margin-top: 30px;
  }

  .aboutUs-photos-img {
    width: 280px;
    height: 175px;
  }

  .hl-title a:hover {
    color: #e8340c;
  }

  .hl-title span {
    position: absolute;
    bottom: 3px;
    left: 33px;
    font-size: 36px;
  }

  .hlcrb-t b {
    font-size: 36px;
  }

  .hdjmfc-title li {
    float: left;
    color: #e8340c;
    font-size: 18px;
    line-height: 56px;
    text-align: center;
    margin-right: 10px;
  }

  .hdjmfc-li p {
    position: relative;
    float: left;
    color: #333;
    font-size: 18px;
    line-height: 24px;
    /*padding: 10px 5px;*/
    margin-right: 10px;
  }

  .hdjmfc-li p:nth-child(1) {
    width: 60px;
    text-align: center;
  }

  .hdjmfc-li p:nth-child(2) {
    text-align: center;
    width: 130px;
  }

  .hdjmfc-li p:nth-child(3) {
    width: 254px;
    padding: 0 8px;
  }

  .hdjmfc-li p:nth-child(4) {
    width: 164px;
    padding: 0 8px;
  }

  .hdjmfc-li p:nth-child(5) {
    width: 130px;
    text-align: center;
  }

  .hdjmfc-li p:nth-child(6) {
    width: 120px;
    text-align: center;
  }

  .hdjmfc-li p:nth-child(7) {
    width: 234px;
    margin-right: 0;
    padding: 0 8px;
  }

  .hl-title a {
    color: #333;
  }

  .hlcr-top a {
    color: #fff;
  }

  .hdjmfc-li p a {
    color: #333;
  }

  .hdjmfc-li p a:hover {
    color: #e8340c;
  }
</style>

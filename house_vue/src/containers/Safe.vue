<template>
  <div class="insurance">
    <div class="Ovideobar">
      <div class="Ovideo-bac">
        <video id="vvideo" width="100%" loop="loop" autoplay="autoplay"
               src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/safe/v.mp4"></video>
        <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/safe/bac.png">
      </div>
    </div>
    <div class="videotext">
      <h1>星河新房：互联网新型房产</h1>
      <p class="Ovideo-cont-info">让设备、个人、企业、场所、市场、产业和资本之间的互联、互通、互操作更智能、更具价值</p>
      <el-button>
        <router-link :to="{ name: 'Aboutus'}">关于星河新房</router-link>
      </el-button>
    </div>
    <div class="insurance-common project-insurance" id="aqbz">
      <div class="insurance-common-content insurance-project-content">
        <div class="insurance-common-title">
          <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/safe/insurance-title-1.png" alt=""
               class="insurance-common-title-img"/>
        </div>
        <div class="insurance-common-text">
          <div class="insurance-common-text-left insurance-project-text-left"></div>
          <div class="insurance-common-text-right insurance-project-text-right">
            <ul class="insurance-common-text-right-ul project-text-right-ul">
              <li class="insurance-common-text-right-li project-text-right-li">
                <p class="insurance-common-right-title">优质项目</p>
                <p class="insurance-common-right-content">平台房产项目均为星河新房科技有限公司经过审核后选定的优质项目。</p>
              </li>
              <li class="insurance-common-text-right-li project-text-right-li">
                <p class="insurance-common-right-title">一站式服务</p>
                <p class="insurance-common-right-content">
                  每个项目平台均提供一站式服务，从项目最初的开发阶段到后期的交房时间，都会有我们专业的服务人员进行跟进，确保中间每个环节的顺利进行。</p>
              </li>
              <li class="insurance-common-text-right-li project-text-right-li">
                <p class="insurance-common-right-title">最新情况</p>
                <p class="insurance-common-right-content">平台会将项目信息及进度公示在网站上，用户可以通过网站更好的了解项目的最新情况。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="insurance-common funds-insurance" id="zjaq">
      <div class="insurance-common-content insurance-funds-content">
        <div class="insurance-common-title">
          <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/safe/insurance-title-2.png" alt=""
               class="insurance-common-title-img"/>
        </div>
        <div class="insurance-common-text">
          <div class="insurance-common-text-right ">
            <ul class="insurance-common-text-right-ul funds-text-right-ul">
              <li class="insurance-common-text-right-li funds-text-right-li">
                <p class="insurance-funds-right-title">资金存管</p>
                <p class="insurance-funds-right-content">项目资金将支付于第三方星河财富进行监管，第三方资金监管机构不仅有资金传递功能，还能够对交易进行约束和监督。</p>
              </li>
              <li class="insurance-common-text-right-li funds-text-right-li">
                <p class="insurance-funds-right-title">资产风控</p>
                <p class="insurance-funds-right-content">第三方银行将全方位监管资金，确保资金的安全，用于房屋建设。</p>
              </li>
              <li class="insurance-common-text-right-li funds-text-right-li">
                <p class="insurance-funds-right-title">资产抵押</p>
                <p class="insurance-funds-right-content">
                  用户中途退出可享受银行同等利率利息，项目方将一次性支付用户的本息收益。用户也可转让自身所持有的股份给他人，接受人所享优惠不变。</p>
              </li>
              <li class="insurance-common-text-right-li funds-text-right-li">
                <p class="insurance-funds-right-title">风险保障</p>
                <p class="insurance-funds-right-content">
                  注册用户在平台提交选房定单后，支付时与项目方线下一对一对接。用户的资金流转不会经过平台，平台对用户的资金支付没有任何干预。</p>
              </li>
            </ul>
          </div>
          <div class="insurance-common-text-left insurance-funds-text-left"></div>
        </div>
      </div>
    </div>
    <div class="insurance-common information-insurance" id="xxaq">
      <div class="insurance-common-content insurance-information-content">
        <div class="insurance-common-title">
          <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/safe/insurance-title-3.png" alt=""
               class="insurance-common-title-img"/>
        </div>
        <div class="insurance-common-text">
          <div class="insurance-common-text-left insurance-project-text-left insurance-project-text-left-1"></div>
          <div class="insurance-common-text-right insurance-project-text-right">
            <ul class="insurance-common-text-right-ul information-text-right-ul">
              <li class="insurance-common-text-right-li project-text-right-li">
                <p class="insurance-common-right-title">专用的高端数据库服务器安全</p>
                <p class="insurance-common-right-content">星河房产平台数据被妥善存放在专用的高端数据库服务器中，并采取各种合适的物理、电子和管理方面的措施来保护数据。</p>
              </li>
              <li class="insurance-common-text-right-li project-text-right-li">
                <p class="insurance-common-right-title">技术团队自主研发</p>
                <p class="insurance-common-right-content">星河房产是星河新房科技自主研发,技术团队由专业工程师组成。<br/>在测试环境里经过了极大量试运行与调试对于数据计算准确性及网站自身安全性有足够自信做到让客户放心。
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: [],
    data() {
      return {}
    },
    computed: {},
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'playvideo'
    },
    components: {},
    methods: {
      playvideo() {
        let vvideo = document.querySelector('#vvideo');
        if (vvideo) {
          vvideo.play();
        }
      }
    }
  }
</script>
<style scoped>

  .insurance .videotext {
    position: absolute;
    left: 0;
    top: 200px;
    right: 0;
    margin: auto;
    width: 830px;
    height: 100px;
    color: #fff;
    line-height: 2;
  }

  .videotext .el-button {
    background: none;
    font-size: 20px;
  }

  .videotext .el-button a {
    color: #fff;
  }

  .videotext .Ovideo-cont-info {
    font-size: 20px;
    line-height: 3;
  }

  .Ovideobar {
    height: 490px
  }

  .Ovideo-bac img {
    width: 100%;
  }

  .Ovideo-bac {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 550px;
    overflow: hidden;
  }

  .insurance {
    width: 100%;
    /*position: relative;*/
  }

  .insurance .insurance-common {
    width: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
  }

  .insurance .insurance-common-content {
    width: 930px;
    margin: 0 auto;
    overflow: hidden;
  }

  .insurance .project-insurance {
    height: 600px;
  }

  .insurance .funds-insurance {
    height: 610px;
    background-color: #fff;
  }

  .insurance .information-insurance {
    height: 590px;
  }

  .project-insurance .insurance-project-content {
    height: 600px;
  }

  .funds-insurance .insurance-funds-content {
    height: 610px;
  }

  .information-insurance .insurance-information-content {
    height: 590px;
  }

  .insurance-common-content .insurance-common-title {
    width: 590px;
    height: 50px;
    margin: 50px auto 0;
  }

  .insurance-common-title .insurance-common-title-img {
    width: 590px;
    height: 50px;
  }

  .insurance-common-content .insurance-common-text {
    width: 935px;
    height: 310px;
    margin-top: 70px;

  }

  .insurance-common-text .insurance-common-text-left {
    width: 295px;
    height: 306px;
    margin-right: 60px;
    float: left;
    background: url('http://omjbzg6gs.bkt.clouddn.com/house_vue/images/safe-bg.png') no-repeat;
  }

  .insurance-common-text .insurance-project-text-left {
    background-position: -33px 0;
  }

  .insurance-common-text .insurance-project-text-left-1 {
    background-position: -637px -1px;
  }

  .insurance-common-text .insurance-common-text-right {
    width: 580px;
    float: left;
  }

  .insurance-common-text .insurance-project-text-right {
    height: 270px;
    margin-top: 20px;
  }

  .insurance-project-text-right .project-text-right-ul {
  }

  .insurance-common-text-right-ul .project-text-right-li {
    width: 580px;
    margin-bottom: 44px;
  }

  .insurance-common-right-title {
    line-height: 18px;
    font-size: 18px;
    color: #333;
    margin-bottom: 15px;
  }

  .insurance-common-right-content {
    line-height: 22px;
    font-size: 14px;
    color: #666;
    text-align: left;
  }

  .insurance-project-text-right .funds-text-right-ul {
  }

  .funds-text-right-ul .funds-text-right-li {
    width: 580px;
    height: 40px;
    margin-bottom: 48px;
  }

  .insurance-funds-right-title {
    width: 75px;
    line-height: 27px;
    font-size: 18px;
    color: #333;
    margin-right: 45px;
    float: left;
  }

  .insurance-funds-right-content {
    width: 450px;
    line-height: 23px;
    font-size: 14px;
    color: #666;
    float: left;
    text-align: left;
  }

  .insurance-common-text .insurance-funds-text-left {
    background-position: -335px 0;
    margin-left: 55px;
    margin-right: 0;
  }

  .insurance-common-text-right .information-text-right-ul {
    margin-top: 40px;
  }
</style>

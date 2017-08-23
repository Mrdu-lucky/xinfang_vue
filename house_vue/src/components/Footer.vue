<template>
  <footer>
    <el-popover
      ref="popover1"
      placement="top"
      width="150">
      <div class="wrap hide"><img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/footer/appcode.png"/></div>
    </el-popover>
    <el-popover
      ref="popover2"
      placement="top"
      width="150">
      <div class="wrap hide"><img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/footer/appcode.png"/></div>
    </el-popover>

    <div class="foot">
      <div class="foot-wrap">
        <div class="foot-content">
          <ul class="foot-1">
            <h3>网站导航</h3>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">新手指南</a></li>
            <li><a href="#">安全保障</a></li>
            <li>用户协议</li>
          </ul>
          <div class="foot-2"></div>
          <div class="foot-1">
            <h3>微信服务号</h3>
            <p><img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/footer/appcode.png" alt=""/></p>
            <p>关注服务号获取优惠资讯</p>
          </div>
          <div class="foot-2"></div>
          <div class="foot-1">
            <h3>APP下载</h3>
            <p><img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/footer/app.png" alt=""/></p>
            <p>
              <el-button class="android" v-popover:popover1>Android</el-button><el-button class="ios" v-popover:popover2>IOS</el-button>
            </p>

          </div>
          <div class="foot-2"></div>
          <div class="foot-3">
            <h3>联系我们</h3>
            <h4>服务热线</h4>
            <h2><b>010-58037333</b></h2>
            <h4>服务时间：9:00-17:00（工作日）</h4>
          </div>
        </div>
      </div>

    </div>
    <div class="footer-icp clearFix">
      <ul class="footer-icp-ul">
        <span>Copyright 2017　 星河新房科技有限责任公司</span>
        <a href="http://www.miitbeian.gov.cn/" target="_blank" class="footer-a">京ICP备16060028号</a>
        <a href="http://www.cnzz.com/stat/website.php?web_id=1260809982" target="_blank" class="footer-a-1">
          <img class="footer-img" src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/footer/cnzz.jpg" alt=""/>
        </a>
        <img src="http://omjbzg6gs.bkt.clouddn.com/house_vue/images/footer/copy.png" alt=""/>
      </ul>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: [],
    computed: {
      author() {
//				return this.$store.state.author
      }
    }
  }
</script>
<style scoped>
  .el-popover img{
    width: 100%;
    height:100%;
  }
  body>span{
    display: none;
  }

  .footer-icp{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #21203C;
    font-size: 12px;
    color:#999;
    text-align: center;
  }
  .footer-icp .footer-icp-ul{
    width: 479px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  .footer-icp-ul span{
    margin-right: 19px;
    float: left;

  }
  .footer-icp-ul .footer-a{
    color:#999;
    cursor: pointer;
    float: left;
    margin-right: 20px;

  }

  .footer-icp-ul .footer-a-1{

  }
  .footer-icp-ul>img{
    position: absolute;
    left: 88px;
    top:14px;
  }
  .footer-a-1 .footer-img{
    /*display: inline-block;*/
    width: 67px;
    height: 19px;
    cursor: pointer;
    float: left;
    text-align: center;
    position: absolute;
    top: 10px;
    right: 0;
  }
  .foot{
    width: 100%;
    height: 240px;
    background-color: #324157;
    color: #ccc;
    text-align: center;
  }
  .foot .foot-wrap{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .foot-wrap .foot-content{
    width: 990px;
    margin-left: 160px;
    display: flex;
    justify-content: space-between;
  }
  .foot-content .foot-1{
    margin-top: 15px;
    position: relative;
  }
  .foot-1 h3{
    font-size: 16px;
    color: #fff;
    line-height: 46px;
  }
  .foot-1 li{
    font-size: 12px;
    line-height: 41px;
  }
  .foot-1 li a{
    color: #ccc;
  }
  .foot-1 li a:hover{
    color: #e8380d;
  }
  .foot-content .foot-2{
    margin-top: 40px;
    width: 1px;
    height: 160px;
    background-color: #333;
  }
  .foot-1 p:nth-child(2){
    margin-top: 15px;
  }
  .foot-1 p:nth-child(3){
    line-height: 52px;
  }
  .foot-1 p span{
    color: #00b6f2;
    cursor: pointer;
  }
  .foot-1 p b{
    color: #666;
    font-weight: normal;
  }
  .foot-1 .wrap{
    width: 90px;
    height: 90px;
    background-color: #00b6f2;
    padding: 4px;
    position: absolute;
    top:75px;
    left: -22px;
  }
  .foot-1 .wrap-1{
    width: 90px;
    height: 90px;
    background-color: #00b6f2;
    padding: 4px;
    position: absolute;
    top: 75px;
    left: 35px;
  }
  .foot-1 .wrap:after{
    border-top:solid 6px #00b6f2;
    border-left:solid 6px transparent;
    border-right:solid 6px transparent;
    transform: translate(-50%,-50%);
    position: absolute;
    content: "";
    bottom: -8px;
    left: 50%;
    margin-left: 0px;
  }
  .foot-1 .wrap-1:after{
    border-top:solid 6px #00b6f2;
    border-left:solid 6px transparent;
    border-right:solid 6px transparent;
    transform: translate(-50%,-50%);
    position: absolute;
    content: "";
    bottom: -8px;
    left: 50%;
    margin-left: 0px;
  }
  .foot-1 .hide{
    display: none;
  }
  .foot-content .foot-3{
    margin-top: 20px;
    text-align: left;
  }
  .foot-3 h3{
    font-size: 16px;
    color: #fff;
    line-height: 36px;
    margin-bottom: 9px;

  }
  .foot-3 h4{
    font-size: 12px;
    line-height: 30px;
    font-weight: normal;
  }
  .foot-3 h2{
    font-size: 20px;
    line-height: 36px;
    color: #e8380d;
  }
</style>

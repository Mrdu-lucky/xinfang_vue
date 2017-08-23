<template>
  <div>


    <el-card class="box-card basemsg">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">小区规划</span>
      </div>
      <ul class="text item">
        <li>
          <h4>占地面积</h4>
          <p>{{rdata.base.landarea}}</p>
        </li>
        <li>
          <h4>建筑面积</h4>
          <p>{{rdata.base.builtuparea}}</p>
        </li>
        <li>
          <h4>容积率</h4>
          <p>{{rdata.base.floorarearatio}}</p>
        </li>
        <li>
          <h4>绿化率</h4>
          <p>{{rdata.base.greeningrate}}%</p>
        </li>
        <li>
          <h4>得房率</h4>
          <p>{{rdata.base.roomrate}}</p>
        </li>
        <li>
          <h4>楼栋总数</h4>
          <p>{{rdata.base.ordernum}}</p>
        </li>
        <li>
          <h4>总户数</h4>
          <p>{{rdata.base.currenthouseholds}}</p>
        </li>
        <li>
          <h4>物业公司</h4>
          <p>{{rdata.base.parkinglotrent}}</p>
        </li>
        <li>
          <h4>物业费</h4>
          <p>{{rdata.base.parkinglotprice}}</p>
        </li>
        <li>
          <h4>车位描述</h4>
          <p>{{rdata.base.parkinglotdesc}}</p>
        </li>
      </ul>
    </el-card>

    <el-card class="box-card around">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">交通状况</span>
      </div>
      <div v-for="(o,index) in rdata.trafficList" :key="index" class="text item">
        <h4>{{o.name}}</h4>
        <p>{{o.context}}</p>
      </div>
    </el-card>


    <el-card class="box-card around">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">周边配套</span>
      </div>
      <div v-for="(o,index) in rdata.aroundList" :key="index" class="text item">
        <h4>{{o.name}}</h4>
        <p>{{o.context}}</p>
      </div>
    </el-card>

    <el-card class="box-card around sandmap" v-if="rdata.base.sandmap!=''">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">沙盘图</span>
      </div>
      <div class="text item" id="sandimgdiv">
        <img :src="rdata.base.sandmap.replace('-indexthumb','')" id="sandimg">
      </div>
    </el-card>

  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ["rdata"],
    computed: {},
    mounted(){
      this.show_center(document.getElementById("sandimg"))
    },
    methods: {

      show_center(elm) {
        elm.onload=function () {
          elm.style.display = 'block';		//先显示出来 才能有offset
          let l = (1198 - elm.offsetWidth) / 2;
          let t = (600 - elm.offsetHeight) / 2;
          elm.style.left = l + 'px';
          elm.style.top = t + 'px';
          this.drag(elm);
        }.bind(this)
      },
      drag(box, main) {				//drag(box,有title就拖title)
        let handle = main || box;
        /*	title.onmousedown=function(ev){		//title不拖拽
                  let oEv=ev || window.event;
                  oEv.cancelBubble=true;
                  }*/
        handle.onmousedown = function (ev) {			//handle触发down时 拖拽
          handle.style.cursor='url("http://api.map.baidu.com/images/closedhand.cur") 8 8, move';
          let oEv = ev || window.event;
          let boxparentL = document.getElementById("sandimgdiv").offsetLeft;
          let boxparentT = document.getElementById("sandimgdiv").offsetTop;
          let disX = oEv.clientX - box.offsetLeft - boxparentL; 		//点击的位置距离div边缘=鼠标点坐标-div此时的距离top和left;
          let disY = oEv.clientY - box.offsetTop - (boxparentT - document.documentElement.scrollTop);
          let w = box.offsetWidth - 1198;	//w -div宽度
          let h = box.offsetHeight - 600;	//w屏幕高度-div高度

          document.onmousemove = function (ev) {

            handle.style.cursor='url("http://api.map.baidu.com/images/closedhand.cur") 8 8, move';
            let oEv = ev || window.event;
            let l = oEv.clientX - disX - boxparentL;						//移动时 l=鼠标实时坐标-点击的位置距离div边缘
            let t = oEv.clientY - disY - (boxparentT - document.documentElement.scrollTop);
            if (l >= w) {
              l = w;
            } else if (l <= 0) {
              l = 0;
            }
            ;

            if (t >= 0) {
              t = 0;
            } else if (t <= -h) {
              t = -h;
            }
            ;
            box.style.left = l + 'px';
            box.style.top = t + 'px';

          }
          document.onmouseup = function () {
            handle.style.cursor='url("http://api.map.baidu.com/images/openhand.cur") 8 8, default';
            document.onmousemove = null;
          }
          return false;
        }
      }
    }
  }
</script>
<style scoped>

  .around {
    margin: 50px 0;
    padding: 0 20px;
  }

  .around .item {
    text-align: left;
    line-height: 2;
    position: relative;
    border-bottom: 1px #2c3e50 dashed;
    padding: 20px 20px 20px 120px;
  }

  .around .item h4 {
    padding: 18px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .around .item:last-child {
    border: none;
  }

  .sandmap .text {
    height: 600px;
    padding: 0;
    overflow: hidden;
  }

  .sandmap img {
    width: 100%;
    position: absolute;
  }


</style>

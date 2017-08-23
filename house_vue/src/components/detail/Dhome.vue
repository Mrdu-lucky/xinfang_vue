<template>
  <div>

    <el-card class="box-card mainmsg">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">项目简介</span>
      </div>
      <div class="text item">
        <p v-html="rdata.base.projectprofiles"></p>
      </div>
    </el-card>

    <el-card class="box-card mapdiv" v-if="rdata.base.mapNum!=''">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">楼盘地图</span>
      </div>
      <el-popover
        ref="popover5"
        placement="top"
        :title="rdata.base.buildingname"
        width="1200"
        visible-arrow="false" @show="initmap = true">
        <baidumap :zoom="{'nowZoom': 15}" :centername="rdata.base.buildingname" :centerpoint="mapNumFoo()" v-if="initmap"></baidumap>
      </el-popover>

      <p class="tra-map">
        <img class="map-img"
             :src='"https://api.map.baidu.com/staticimage/v2?ak=Ep6PzMQy7ActmQkphOC8Ia6gtM0rfBC3&scale=1&width=1024&height=500&copyright=1&zoom=17&center="+mapNumFoo()'/>
        <el-tooltip class="item" effect="dark" :content="rdata.base.buildingname" placement="top">
          <el-button v-popover:popover5 class="maplogo">{{rdata.base.buildingname}}</el-button>
        </el-tooltip>
      </p>
    </el-card>

    <el-card class="box-card mainmsg">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">楼栋信息</span>
      </div>
      <div class="text item">
        <p v-html="rdata.base.floorcondition"></p>
      </div>
    </el-card>

    <el-card class="box-card basemsg">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">基本信息</span>
      </div>
      <ul class="text item">
        <li>
          <h4>物业类别</h4>
          <p>{{rdata.base.decoratestatus}}</p>
        </li>
        <li>
          <h4>项目特色</h4>
          <p>{{rdata.base.featuretype}}</p>
        </li>
        <li>
          <h4>建筑类别</h4>
          <p>{{rdata.base.buildingcategories}}</p>
        </li>
        <li>
          <h4>装修状况</h4>
          <p>{{rdata.base.decoratestatus}}</p>
        </li>
        <li>
          <h4>产权年限</h4>
          <p>{{rdata.base.realestatelife}}</p>
        </li>
        <li>
          <h4>开发商</h4>
          <p>{{rdata.base.saleslicense}}</p>
        </li>
        <li>
          <h4>楼盘地址</h4>
          <p>{{rdata.base.salesaddr}}</p>
        </li>
      </ul>
    </el-card>

  </div>
</template>
<script>
  import Baidumap from "../../components/Baidumap.vue"

  export default {
    data() {
      return {
        initmap: false
      }
    },
    props: ["rdata"],
    computed: {},
    components: {Baidumap},
    methods: {
      mapNumFoo() {
        let maperror = this.rdata.base.mapNum;
        if(maperror){
          let maparr = maperror.split(",");
          let map = [maparr[1], maparr[0]].join(",");
          return map;
        }
      }
    }
  }
</script>
<style scoped>
  .box-card.mapdiv,
  .box-card.mapdiv .el-card__body{
    padding: 0;
  }
  .mainmsg p {
    text-indent: 2em;
  }
  .mapdiv .tra-map .maplogo{
    background: #324157;
    color: #fff;
    font-size: 16px;
    padding: 0 15px;
  }


</style>

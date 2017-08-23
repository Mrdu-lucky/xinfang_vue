<template>
  <div id="dnews">
    <el-card class="box-card news">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">楼盘动态</span>
      </div>
      <div v-for="(o,index) in rdata.dynamicnameMap.AllDynamic.slice(5*(nowPageNumber-1),5*nowPageNumber)" :key="index" class="text item">
        <h3>{{o.dynamicname}}</h3>
        <time>{{o.createDate}}</time>
        <p>{{o.remark}}</p>
      </div>
    </el-card>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync ="nowPageNumber"
      :page-size="5"
      layout="prev, pager, next"
      :total="rdata.dynamicnameMap.AllDynamic.length" v-if="rdata.dynamicnameMap.AllDynamic.length != 0">
    </el-pagination>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        nowPageNumber:1
      }
    },
    props: {
      rdata:{
        dynamicnameMap:{
          AllDynamic:[]
        }
      }
    },
    computed: {},
    methods:{
      handleCurrentChange(val) {
        this.nowPageNumber = val;
//        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style scoped>
  .news .item p {
    text-indent: 2em;
  }

  .news .item.text {
    line-height: 2;
  }
  #dnews .el-pagination{
    padding-bottom: 30px;
  }
</style>

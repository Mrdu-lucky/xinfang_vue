<template>
  <div class="dpiclist">
    <el-card class="box-card" :id="id">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">{{name}}</span>
      </div>
      <ul class="item clearFix">
        <li v-if="index<6" v-for="(o,index) in list" :key="index" class="fl">
          <img :data-original="o.imagepath+'-blogo'" v-lazy="o.imagepath+'-580_360'">
          <p class="imgloading"></p>
        </li>
      </ul>

      <el-collapse-transition>
        <ul class="item clearFix" v-show="show">
          <li v-if="index >= 6" v-for="(o,index) in list" :key="index" class="fl">
            <img :data-original="o.imagepath+'-blogo'" v-lazy="o.imagepath+'-580_360'">
            <p class="imgloading"></p>
          </li>
        </ul>
      </el-collapse-transition>
      <button type="button" class="el-button el-button--primary" v-if="list.length > 6" @click="show = !show">
        <i :class="!show?'el-icon-caret-bottom':'el-icon-caret-top'"></i><span v-html="!show?'展开':'收起'"></span>
      </button>

    </el-card>
  </div>
</template>
<script>
  import Viewer from 'viewerjs'

  export default {
    props: ['list', 'id', 'name'],
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.showpiclist();
    },
    computed: {},
    components: {},
    methods: {
      showpiclist() {
        new Viewer(document.getElementById(this.id), {
          url: 'data-original'
        });
      }
    }
  }
</script>
<style scoped>
  .dpiclist ul li {
    position: relative;
    width: calc(100% / 3);
    height: 251px;
    padding: 4px;
  }

  .dpiclist ul li img {
    width: 100%;
    cursor: pointer;
  }

  .dpiclist .el-button {
    margin: 10px;
  }

</style>

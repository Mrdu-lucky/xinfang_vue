<template>
  <div id="dpic">
    <div v-if="rspdata.huxingList">

      <dpic-one v-if="rspdata.huxingList.length!=0" :list="rspdata.huxingList" :id="'huxingList'"
                :name="'户型图'"></dpic-one>
      <dpic-one v-if="rspdata.xiaoguoList.length!=0" :list="rspdata.xiaoguoList" :id="'xiaoguoList'"
                :name="'效果图'"></dpic-one>
      <dpic-one v-if="rspdata.shigongList.length!=0" :list="rspdata.shigongList" :id="'shigongList'"
                :name="'施工图'"></dpic-one>
      <dpic-one v-if="rspdata.waijingList.length!=0" :list="rspdata.waijingList" :id="'waijingList'"
                :name="'外景图'"></dpic-one>
    </div>
  </div>
</template>
<script>
  import DpicOne from './DpicOne.vue'

  export default {
    data() {
      return {
        rspdata: {}
      }
    },
    props: ["rdata"],
    computed: {},
    components: {DpicOne},
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        let detailId = this.rdata.base.id;
        this.$http.jsonp('http://wxtest1.galaxyhouse.cn/wechat/rest/webApi.do?wxShowImage&domain=Y', {
          params: {
            baseid: detailId
          },
          jsonpCallback: "success_jsonpCallback"
        }).then(function (response) {

          this.rspdata = JSON.parse(response.bodyText).attributes;

        }.bind(this)).catch(function (response) {
          console.log(response);
        });
      }
    }
  }
</script>
<style scoped>


</style>

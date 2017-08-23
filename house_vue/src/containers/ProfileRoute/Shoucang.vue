<template>
  <div id="shoucang">
    <h2>我的收藏</h2>
    <div class="cardlist">

      <el-card v-for="(item,index) in collection.slice(6*(nowPageNumber-1),6*nowPageNumber)" :key="index">
        <div class="image">
          <img :src="item.imgPath+'-266_190'">
        </div>
        <div class="card-text tleft">
          <p class="title">{{item.buildingname}}</p>
          <p>均价： {{item.remark}}</p>
          <div class="addr">
            <span>{{item.province}}</span>
            <span>{{item.region}}</span>
          </div>
          <el-button type="text">
            <router-link :to="{ name: 'Detail', params: { id: item.id }}">查看详情</router-link>
          </el-button>
          <el-button type="text" icon="close" class="delete" @click="deletestar(item.id)"></el-button>
        </div>
      </el-card>
    </div>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="nowPageNumber"
      :page-size="6"
      layout="prev, pager, next"
      :total="collection.length" v-if="collection.length != 0">
    </el-pagination>
  </div>
</template>
<script>

  import {DelCollect} from '../../api/index'
  import {mapState, mapMutations} from 'vuex'
  import * as Types from '../../store/mutation-types'

  export default {
    props: [],
    data() {
      return {
        nowPageNumber: 1
      }
    },
    computed: {
      ...mapState(['user']),
      collection(){
        return this.user.collection.reverse();
      }
    },
    components: {},
    methods: {
      ...mapMutations([Types.UPDATA_INFO]),
      handleCurrentChange(val) {
        this.nowPageNumber = val;
//        console.log(`当前页: ${val}`);
      },
      deletestar(id) {

        let testCollect = {
          id: this.user.id,
          collection: {
            id: id,
          }
        };

        this.$confirm('确认取消收藏？').then(_ => {
          DelCollect(JSON.stringify(testCollect)).then(res => {
            let {msg, userData} = res.data;
            setTimeout(_=>{
              this.$message(msg);
            },300)
            this[Types.UPDATA_INFO](userData);
            sessionStorage.setItem('user', JSON.stringify(userData));
          });
        }).catch(_ => {
        });

      }

    }
  }
</script>
<style lang="scss">

  #shoucang {
    padding-bottom: 100px;
    position: relative;
    .el-pagination {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 20px;
    }
    .tleft {
      text-align: left;
      position: relative;

      .title {
        font-weight: bolder;
        line-height: 1.5;
        margin: 15px 0 10px;
      }
      .addr {
        font-size: 13px;
        line-height: 3;
      }
      a {
        color: #00b6f2;
      }
      .el-button {
        position: absolute;
        width: 100%;
        text-align: center;
        left: 0;
        bottom: 10px;
      }
      .delete {
        position: absolute;
        top: 0;
        right: 8px;
        left: auto;
        width: 20px;
        height: 20px;
        font-size: 12px;
      }
    }
    .card-text {
      padding: 20px 10px 0;
      width: 140px;
    }

    .el-card__body {
      padding: 0;
      display: flex;
    }

    .el-card .image {
      overflow: hidden;
      width: 266px;
      height: 190px;
      vertical-align: top;
      position: relative;
    }

    .el-card img {
      width: 100%;
      transition: 10s all;
    }

    .el-card img:hover {
      transform: scale(1.1);
    }

    .cardlist {
      display: flex;
      flex-wrap: wrap;
    }

    .cardlist > .el-card {
      width: 48%;
      margin: 1%;
    }

    h2 {
      line-height: 3;
    }
  }

</style>

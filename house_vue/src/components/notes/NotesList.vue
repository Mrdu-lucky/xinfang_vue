<template>
  <div id="notes-list">
    <div id="list-header">
      <el-button-group style="margin-top: 30px">
        <el-button @click="show = 'all'" :class="{active: show === 'all'}" type="primary" icon="edit">All Notes
        </el-button>
        <el-button @click="show = 'favorites'" :class="{active: show === 'favorites'}" type="primary" icon="star-on">
          Favorites
        </el-button>
      </el-button-group>
    </div>

    <el-menu class="el-menu-vertical-demo">
      <el-menu-item v-for="(note,index) in filteredNotes.slice(10*(nowPageNumber-1),10*nowPageNumber)" :key="index" index="{index}" :class="{active: activeNote === note}" @click="updateActiveNote(note)">
        {{note.text.trim().substring(0, 20)}}
      </el-menu-item>
    </el-menu>
    <h4 v-if="filteredNotes.length == 0">暂无数据</h4>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync ="nowPageNumber"
      :page-size="10"
      layout="prev, pager, next"
      :total="filteredNotes.length" v-if="filteredNotes.length != 0">
    </el-pagination>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';
  import * as Types from '../../store/mutation-types';

  export default {
    data() {
      return {
        show: 'all',
        nowPageNumber:1
      }
    },
    computed: {
      ...mapState(['notes']),
      ...mapState(['activeNote']),
      filteredNotes() {
        this.nowPageNumber = Math.ceil(this.notes.length/10);
        if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favorites') {
          return this.notes.filter(note => note.favorite)
        };
      },
      showpage(){

      }
    },
    methods: {
      ...mapMutations([Types.SET_ACTIVE_NOTE]),
      updateActiveNote(note) {
        this[Types.SET_ACTIVE_NOTE](note);
      },
      handleCurrentChange(val) {
        this.nowPageNumber = val;
//        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style scoped>
  .list-group-item-heading {
    font-weight: 300;
    font-size: 15px;
  }

  .el-pagination{
    position: absolute;
    bottom:10px;
    width: 100%;
  }
  #list-header {
    padding: 5px 25px 25px 25px;
  }

  #list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }

  #notes-list .container {
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }

  #notes-list .container .list-group-item {
    border: 0;
    border-radius: 0;
  }
  #notes-list {
    float: left;
    width: 300px;
    height: 100%;
    background-color: #F5F5F5;
    font-weight: 400;
    position: relative;
  }
  .el-menu li{
    line-height: 44px;
    height:44px;
  }
  .el-button.active,
  .el-menu-item.active{
    color: #fff;
    border-bottom: 5px solid #20a0ff;
    background: #324157;
  }
  .el-button.active{
    border-bottom-width: 1px;
    border-color: #20a0ff;
  }
</style>

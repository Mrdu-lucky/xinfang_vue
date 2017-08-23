<template>
	<div id="toolbar">
		<i @click="addNote" class="el-icon-plus"></i>
		<i @click="toggleFavorite" class="el-icon-star-off" :class="{'starred el-icon-star-on': activeNote.favorite}"></i>
		<i @click="deleteNote" class="el-icon-close"></i>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	import * as Types from '../../store/mutation-types'
	export default {
		data() {
			return {}
		},
		computed: {
			...mapState(['activeNote'])
		},
		methods: {
			...mapMutations([Types.ADD_NOTE]),
			...mapMutations([Types.DELETE_NOTE]),
			...mapMutations([Types.TOGGLE_FAVORITE]),
			addNote() {
				this[Types.ADD_NOTE]();
			},
			deleteNote() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this[Types.DELETE_NOTE]();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
			},
			toggleFavorite(id) {
        if(this.$store.state.activeNote.favorite){
          this.$message({
            showClose: true,
            message: '已取消收藏！'
          });
        }else{
          this.$message({
            message: '收藏成功！',
            type: 'success'
          });
        }
				this[Types.TOGGLE_FAVORITE](id);
			}
		}
	}
</script>
<style scoped>
  #toolbar {
    float: left;
    width: 80px;
    height: 100%;
    background-color: #324157;
    color: #fff;
    padding-top: 50px;
    box-sizing: border-box;
  }

  #toolbar i {
    display: block;
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  #toolbar i:hover {
    opacity: 1;
  }

  .starred {
    color: #F7AE4F;
  }
</style>

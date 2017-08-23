<template>
  <div id="filter"  @click="cancelLogin">

      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
               class="demo-ruleForm login-container">
        <h3 class="title">用户登录</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autoComplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录
          </el-button>
        </el-form-item>
      </el-form>

  </div>
</template>

<script>
  import {postUser} from '../api/index';
  import {mapState, mapMutations} from 'vuex';
  import * as Types from '../store/mutation-types'

  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'},
          ],
          checkPass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ]
        },
        checked: true
      };
    },
    methods: {
      ...mapMutations([[Types.CAL_LOGIN], [Types.TAB_BT], [Types.UPDATA_IMG], [Types.UPDATA_INFO],[Types.TRU_STA],[Types.FAL_STA]]),
      cancelLogin(event) {
        if (event.target.id === 'filter') {
          this[Types.CAL_LOGIN]()
        }
      },
      handleReset2() {
        this.$refs.ruleForm2.resetFields();  //表单重置
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate((valid) => { //验证
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            let loginParams = {id: this.ruleForm2.account, passWord: this.ruleForm2.checkPass};
            postUser(JSON.stringify(loginParams)).then(res => {
              this.logining = false;
              let {msg, code, userData} = res.data;

              if (code == 0) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
                this.handleReset2();
              } else {
                this.$message({
                  message: msg,
                  type: 'success'
                });

                this[Types.CAL_LOGIN]();
                this[Types.TAB_BT]();
                if(userData.headImg){
                  this[Types.UPDATA_IMG](userData.headImg);
                }else {
                  this[Types.UPDATA_IMG]();
                }
                this[Types.UPDATA_INFO](userData);
                sessionStorage.setItem('user', JSON.stringify(userData));

                let testStarred = userData.collection;
                let routeid = this.$route.params.id;
                if(testStarred && routeid){
                  let collect=testStarred.some(item=>item.id==routeid);
                  if (collect) {
                    this[Types.TRU_STA]();
                  } else {
                    this[Types.FAL_STA]();
                  }
                }
              }
            });
          } else {

            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    computed: {
      ...mapState(['tabBt', 'tabUser'])

    }
  }
</script>

<style lang="scss" scoped>
  #filter {
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
  }

  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 5px #cac6c6;
    .title {
      margin: 0 auto 40px;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0 0 35px;
    }
  }
</style>

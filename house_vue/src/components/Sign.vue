<template>
  <div id="filter" @click="cancelSign">

    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">注册用户</h3>
      <el-form-item prop="phoneNum">
        <el-input type="text" v-model="ruleForm2.phoneNum" auto-complete="off" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="userName">
        <el-input type="text" v-model="ruleForm2.userName" auto-complete="off" placeholder="昵称"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input type="password" v-model="ruleForm2.passWord" auto-complete="off"
                  placeholder="请输入密码（不能少于8位，有数字和字母组成）"></el-input>
      </el-form-item>
      <el-form-item prop="rePass">
        <el-input type="password" v-model="ruleForm2.rePass" auto-complete="off" placeholder="请确认新密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">我已阅读并同意相关协议</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="success" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">立即注册
        </el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  import {addUser, checkUserName} from '../api/index';
  import {mapMutations} from 'vuex';
  import * as Types from '../store/mutation-types'

  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          phoneNum: '',
          userName: '',
          passWord: '',
          rePass: '',
        },
        rules2: { //prop添加的验证属性
          phoneNum: [
            {required: true, message: '手机号不能为空', trigger: 'blur'},
            {min: 11, max: 11, message: "请输入正确的手机号", trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (/^1[3|4|5|7|8][0-9]\d{8}$/.test(value) == false) {
                  callback(new Error("请输入正确的手机号"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ],
          userName: [
            {required: true, message: '昵称不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                let name = {userName: value};
                checkUserName(name).then(res => {
                  let {code, msg} = res.data;
                  if (code === 0) {
                    callback(new Error(msg));
                  } else {
                    callback();
                  }
                });

              }, trigger: 'blur'
            }
          ],
          passWord: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {min: 8, max: 20, message: "密码不少于8位", trigger: 'blur'}, {
              validator: (rule, value, callback) => {
                if (/^([0-9]+[a-zA-Z]+)|([a-zA-Z]+[0-9]+)$/.test(value) == false) {
                  callback(new Error("密码需包含数组和字母"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ],
          rePass: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value !== this.ruleForm2.passWord) {
                  callback(new Error("两次密码输入不一致"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ]
        },
        checked: true
      };
    },
    methods: {
      ...mapMutations([[Types.CAL_SIGN], [Types.TAB_BT]]),
      cancelSign(event) {
        if (event.target.id === 'filter') {
          this[Types.CAL_SIGN]()
        }
      },
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {   //验证成功
            this.logining = true;
            let signParams = {
              id: this.ruleForm2.phoneNum,
              passWord: this.ruleForm2.passWord,
              userName: this.ruleForm2.userName
            };

            addUser(JSON.stringify(signParams)).then(res => {
              this.logining = false;
              let {msg, code} = res.data;
              if (code === 0) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                this.$message({
                  message: msg,
                  type: 'success'
                });
                this[Types.CAL_SIGN]();
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
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
    top: 50%;
    transform: translate(-50%, -50%);
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

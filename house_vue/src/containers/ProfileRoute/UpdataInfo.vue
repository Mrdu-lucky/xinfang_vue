<template>
  <div id="myinfo">
    <h2>我的账户信息</h2>
    <el-collapse v-model="activeName" accordion>

      <el-collapse-item title="手机号" name="-1">
        <p>{{user.id.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}}</p>
      </el-collapse-item>

      <el-collapse-item title="邮箱" name="0">
        <p>无</p>
      </el-collapse-item>

      <el-collapse-item title="个人资料" name="1">
        <el-form :model="ruleForm3" :rules="rule3" ref="ruleForm3" class="norm">

          <el-form-item prop="updataNam">
            <label for="updataNam">修改用户名</label>
            <el-input type="text" id="updataNam" v-model="ruleForm3.updataNam" :placeholder="user.userName"></el-input>
          </el-form-item>

          <el-form-item>
            <label>性别</label>
            <el-radio-group v-model="sex" style="display: block">
              <el-radio-button label="先生"></el-radio-button>
              <el-radio-button label="女士"></el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <label>修改城市</label>
            <cityselect @cityselected="cityselected" :cityName="city"></cityselect>
          </el-form-item>
          <el-form-item style="width:100%;">
            <el-button type="info" style="width:100%;" @click.native.prevent="handleSubmit3">保存修改</el-button>
          </el-form-item>

        </el-form>
      </el-collapse-item>
      <el-collapse-item title="修改密码" name="2">

        <el-form :model="ruleForm1" :rules="rule1" ref="ruleForm1" class="norm">
          <el-form-item prop="updataPas1">
            <label for="updataPas1">输入旧密码</label>
            <el-input type="password" id="updataPas1" v-model="ruleForm1.updataPas1" placeholder="请输入旧密码"></el-input>
          </el-form-item>
          <el-form-item prop="updataPas2">
            <label for="updataPas2">设置新密码</label>

            <el-input type="password" id="updataPas2" v-model="ruleForm1.updataPas2" placeholder="请输入新密码"></el-input>
          </el-form-item>
          <el-form-item prop="updataPas3">

            <label for="updataPas3">确认新密码</label>

            <el-input type="password" id="updataPas3" v-model="ruleForm1.updataPas3" placeholder="请再次输入新密码"></el-input>
          </el-form-item>
          <el-form-item style="width:100%;">
            <el-button type="info" style="width:100%;" @click.native.prevent="handleSubmit1">保存修改</el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import Cityselect from '../../components/Cityselect.vue'
  import {updataPas, updataNam} from '../../api';
  import {mapState, mapMutations} from 'vuex';
  import * as Types from '../../store/mutation-types'

  export default {
    data() {
      return {
        city: "",
        sex: "",
        imageUrl: '',
        activeName: '',
        ruleForm1: {
          updataPas1: '',
          updataPas2: '',
          updataPas3: ''
        },
        rule1: {
          updataPas1: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value !== this.user.passWord) {
                  callback(new Error("请输入正确的密码"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            },
          ],
          updataPas2: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value === this.ruleForm1.updataPas1) {
                  callback(new Error("新密码不能和旧密码相同"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            },
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
          updataPas3: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value !== this.ruleForm1.updataPas2) {
                  callback(new Error("两次密码输入不一致"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ],
        },
        ruleForm3: {updataNam: ''},
        rule3: {
          updataNam: [
            {required: false, message: '用户名不能为空', trigger: 'blur'},
            {
              validator: (rule, value, callback) => {
                if (value === this.user.userName) {
                  callback(new Error("不能输入和之前相同用户名"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            },
          ]
        }
      }
    },
    computed: {
      ...mapState(['tabBt', 'tabUser', 'userImg', 'user'])
    },
    created() {
      this.sex = this.user.sex;
      this.city = this.user.city || "0,全国,全省";
    },
    components: {Cityselect},
    methods: {
      ...mapMutations([Types.UPDATA_INFO]),
      cityselected(msg) {
        this.city = msg;
      },
      handleSubmit1(ev) {
        this.$refs.ruleForm1.validate((valid) => {
          if (valid) {   //验证成功
            let updataParams = {id: this.user.id, newPas: this.ruleForm1.updataPas2};

            updataPas(JSON.stringify(updataParams)).then(res => {

              console.log(res.data);
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
                this.$refs.ruleForm1.resetFields();
//                this.$router.push({path: '/profile'});
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSubmit3(ev) {
        this.$refs.ruleForm3.validate((valid) => {
          if (valid) {   //验证成功
            let updataParams = {city: this.city, sex: this.sex, id: this.user.id, newNam: this.ruleForm3.updataNam};
            if (updataParams.city == this.user.city && updataParams.sex == this.user.sex && updataParams.newNam == "") {
              this.$message({
                message: "您没有改动！",
                type: 'info'
              });
              return;
            }

            updataNam(JSON.stringify(updataParams)).then(res => {
              let {msg, code, userData} = res.data;
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
                this.$refs.ruleForm3.resetFields();
                this[Types.UPDATA_INFO](userData);
                sessionStorage.setItem('user', JSON.stringify(userData));
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  h2 {
    line-height: 3;
    text-align: center;
  }

  .norm {
    width: 300px;
    margin: 0 auto;
    line-height: 3;
  }

  .iamge {
    margin: 80px;
  }

  .norm label, input {
    display: inline-block;
  }

  .avatar {
    width: 100%;
    height: 100%;
  }

  #myinfo {
    text-align: left;
  }
</style>

<template>
  <div>
      <!-- 导航栏 -->
      <van-nav-bar border>
            <van-icon name="cross" slot="left" color="#7f8c8d" />
            <span slot="right">帮助</span>
      </van-nav-bar>

      <!-- logo -->
      <div class="img">
          <img src="~assets/logo.png" alt="">
          <div><span>正品低价有保障，好物好货上V购</span></div>
      </div>

      <!-- 账号密码输入 -->
      <div class="login-info">
          <van-cell-group>
            <van-field v-model="username" placeholder="用户名/邮箱/手机号" />
            <van-field v-model="password" placeholder="请输入密码" :type="fieldType" ref="passwordInput">
                <div class="field-right" slot="right-icon">
                    
                    <div v-if="!isOpen" @click="changeEye" class="icon-left">
                        <van-icon name="closed-eye"  />
                    </div>
                    <div v-else @click="changeEye" class="icon-left">
                        <van-icon name="eye-o"  />
                    </div>
                    <span class="span">|</span>
                    <span @click="forgetPwd">忘记密码</span>
                </div>
            </van-field>
          </van-cell-group>
      </div>

      <!-- 登录 -->
      <div class="loginBtn">
          <van-button round block type="info" 
            @click="submit"
            color="linear-gradient(to right, #e74c3c, #e67e22)"
            size="small">
            登录
          </van-button>
      </div>

      <!-- 其他方式登录 及 注册 -->
      <div class="register">
          <div>
              <span>短信验证码登录</span>
          </div>
          <div>
              <span>新用户注册</span>
          </div>
      </div>

      <!-- 其他方式登录 -->
      <div class="others">
          <span class="left"></span>
          <span class="title">其他登录方式</span>
          <span class="right"></span>
      </div>

  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            username: '',
            password: '',
            isOpen: false,
            fieldType: 'password'
        }
    },
    methods: {
        forgetPwd() {

        },
        changeEye() {
            this.isOpen = !this.isOpen
            if(this.isOpen) {
                this.fieldType= 'text'
            }else if(!this.isOpen) {
                this.fieldType = 'password'
            }
        },
        submit() {

        }
    }
}
</script>

<style scoped>
.img {
    margin: 20px auto;
    font-size: 13px;
    color: #485460;
    text-align: center;
}

.img img{
    width: 100px;
}

.login-info {
    padding: 0 10px;
}

.icon-left {
    display: inline-block;
    padding-bottom: 3px;
}

.span {
    margin: 0 10px;
}

.loginBtn {
    margin: 30px 16px 16px 16px;
}

.register {
    display: flex;
    margin: 16px;
    font-size: 14px;
    color: #84817a;
    justify-content: space-between;
}

.others {
    color: #aaa69d;
    font-size: 13px;
    display: flex;
    margin: 30px 16px 16px 20px;
}

.left {
    flex: 1;
    display: inline-block;
    width: 110px;
    border-bottom: 1px solid #f7f1e3;
    position: relative;
    bottom: 7px;
}

.title {
    margin-left: 20px;
    margin-right: 20px;
}

.right {
    flex: 1;
    display: inline-block;
    width: 110px;
    border-bottom: 1px solid #f7f1e3;
    position: relative;
    bottom: 7px;
}


</style>
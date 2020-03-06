<template>
  <div>
      <!-- 导航栏 -->
      <van-nav-bar border fixed>
            <span slot="right">设置</span>
      </van-nav-bar>
      <div class="header-bg"><img src="~assets/img/headbg.jpg" alt=""></div>
      <!-- 头部 -->
      <div class="header">
        
          <div class="header-logo">
              <div class="logo"><img src="~assets/logo.png" alt=""></div>
              <div class="login-register">
                  <span>登录/注册</span>
                  <span class="icon"><van-icon name="arrow" /></span>
              </div>
          </div>

          <van-grid :border="false">
            
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            
          </van-grid>
      </div>

  </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style scoped>
.header {
    border: 1px solid black;
    margin: 47px 16px 16px 16px;
    background-color: #1abc9c;
    
}

.header-logo {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
    color: #fff;
    font-size: 13px;
}

.logo {
    background-color: #fff;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    text-align: center;
    position: relative;
    box-shadow: 0 0 10px #ccc;
    border: 2px solid #fff;
    margin-right: 10px;
}

.logo img {
    width: 60px;
    border-radius: 50%;
    vertical-align: middle;
}

.icon {
    position: relative;
    top: 2.5px;
}

.van-grid-item{
    background-color: transparent;
    opacity: 0;
    position: absolute;
    
}

.header-bg img{ 
    z-index: 0;
}

.van-nav-bar {
    position: absolute;
}

</style>
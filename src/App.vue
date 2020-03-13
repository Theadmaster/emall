<template>
  <div id="app">
    <router-view></router-view>

    <van-tabbar class="tabbar"
      route
      active-color="#e74c3c"
      inactive-color="#000"
    >
      <van-tabbar-item to="/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">标签</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">标签</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="contact">标签</van-tabbar-item>
    </van-tabbar> 
  </div>

  
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.tabbar {
  box-shadow: 0 -5px 7px rgba(177, 173, 173, .3);
}

</style>

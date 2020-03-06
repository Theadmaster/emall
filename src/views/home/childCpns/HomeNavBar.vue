<template>
  <div>
      <nav-bar class="nav-bar">
          <van-icon name="scan" slot="left" color="white" size="25px" />
          <div class="search" slot="center">
              <div class="search-icon"><van-icon name="search" /></div>
              <div class="input"><input type="text" /></div>
          </div>
          <div slot="right">
              <van-icon name="more-o" class="icon-right" color="white" size="23px" />
          </div>
      </nav-bar>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
export default {
    name:"HomeNavBar",
    components: {
        NavBar
    }
}
</script>

<style scoped>
.nav-bar {
    background-color: #e74c3c;
}

.input {
    line-height: 44px;
    
}

.search {
    position: relative;
}

.search-icon {
    position: absolute;
    left: 8px;
    top: 3px;
}

.input input {
    padding-left: 30px;
    height: 25px;
    border-radius: 20px;
    border: none;
    outline:none;
    width: 200px;
    padding-right: 20px;
    caret-color:#74b9ff;
    font-size: 13px;
}

</style>
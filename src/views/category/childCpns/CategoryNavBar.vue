<template>
  <div>
      <nav-bar class="nav-bar">
          <van-icon name="arrow-left"
            slot="left"
            color="#7f8c8d"
            size="21px"
            @click="back"
          />
          <div class="search" slot="center">
              <div class="search-icon"><van-icon name="search" /></div>
              <div class="input"><input type="text" placeholder="扫地机器人 智能" /></div>
          </div>
          <div slot="right">
              <van-icon name="chat-o" class="icon-right" color="#7f8c8d" size="23px" />
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
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.nav-bar {
    background-color: #fff;
    border-bottom: 1px solid #eee;
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
    width: 210px;
    padding-right: 20px;
    caret-color:#74b9ff;
    font-size: 13px;
    background-color: #f7f7f7;
}

</style>
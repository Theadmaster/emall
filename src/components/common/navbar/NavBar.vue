<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
.nav-bar {
    height: 44px;
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    position: relative;
}
.left {
    width: 60px;
    position: absolute;
    top: 5.5px;
}
.right {
    width: 60px;
    position: absolute;
    top: 5.5px;
    right: 0;
}

.center {
    flex: 1.5;
    position: absolute;
    
    left: 60px;
}

</style>
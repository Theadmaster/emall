<template>
  <div id="area-list">
      <van-area
  :area-list="areaList"
  :columns-placeholder="['请选择', '请选择', '请选择']"
  title="标题"
/>
  </div>
</template>

<script>
export default {
    name: "AreaList",
    data() {
        return {

        }
    },
    props: {
        areaList: {

        }
    }
}
</script>

<style scoped>

</style>
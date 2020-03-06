<template>
  <div>
    <van-cell-group>
      <van-cell class="cell-address-list" :label="label">
        <div slot="title" class="title">
          <div class="van-cell-text">
            <span class="title-first">{{title}}</span>
            <span>{{phone}}</span>
          </div>
          <div class="van-cell-tag" v-for="item in tag">
            <van-tag type="primary">{{item}}</van-tag>
          </div>
        </div>
        <van-icon name="edit" class="icon-edit" />
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "AddressListItem",
  props: {
      
  }
};
</script>

<style scoped>
</style>
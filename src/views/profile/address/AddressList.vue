<template>
  <div class="address-list">
    <!-- 导航栏 -->
    <van-nav-bar title="地址管理" border>
      <van-icon name="arrow-left" slot="left" color="#7f8c8d" />
    </van-nav-bar>

    <!-- 地址列表 -->
    <div class="list" v-for="(addressItem, index) in addressList">
      <van-cell-group >
        <van-cell class="cell-address-list">
            <div slot="label">
                {{addressItem.address}}
            </div>
            <div slot="title" class="title">
                <div class="van-cell-text">
                    <span class="title-first">{{addressItem.addresssee}}</span>
                    <span>{{addressItem.telephone | phoneFormat}}</span>
                </div>
                <div class="van-cell-tag">
                    <van-tag type="danger" v-if="addressItem.default_status==1">默认</van-tag>
                    <van-tag type="primary" v-if="addressItem.label" >{{addressItem.label}}</van-tag>
                </div>
            </div>
            <van-icon name="edit" class="icon-edit" @click="addressEdit(index)"/>
        </van-cell>
      </van-cell-group>
    </div>

    <!-- 按钮 -->
    <div class="btn" @click="addAddressItem">
        <van-button round block type="info" 
            color="linear-gradient(to right, #e74c3c, #e67e22)"
            size="small">
            + 新增收货地址
        </van-button>
    </div>
    
 
  </div>
</template>

<script>
import {request} from 'network/request.js'

export default {
  name: "AddressList",
  data() {
      return {
          addressList: [],
          b_s_id: 0,
      }
  },
  created() {
      request({
          url: '/get_address_list',     
      }).then(res => {
        //   console.log(res)
          this.addressList = res
          this.b_s_id = res[0].b_s_id
          
      })
  },
  filters: {
      phoneFormat(value) {
        //   console.log(value)
        //   let value = value.toString()
          return value.slice(0,3) + '****' + value.slice(-4, 11)
      }
  },
  methods: {
      addressEdit(index) {
          this.$router.push('/addresschange/' + this.addressList[index].address_id)
      },
      addAddressItem() {
          this.$router.push('/address/' + this.b_s_id)
      }
  }
};
</script>

<style scoped>
.icon-edit {
    margin-top: 30px;
    font-weight: 500;
}

.title {
    width: 250px;
}

.title-first {
    margin-right: 10px;
}

.van-cell-tag {
    display: inline;
    margin-right: 5px;
}

.van-cell-text {
    display: inline-block;
    margin-right: 10px;
    font-weight: 600;
}

.van-cell-tag .van-tag {
    margin-right: 5px;
}

.btn {
    margin: 16px;
}
</style>
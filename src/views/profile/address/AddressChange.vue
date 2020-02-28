<template>
  <div id="address">
    <van-nav-bar title="编辑收货人"
     border>
        <van-icon name="arrow-left" slot="left" color="#7f8c8d" />
        
    </van-nav-bar>
    <van-form @submit="onSubmit">
        <!-- 收货人姓名填写 -->
        <van-field
        v-model="buyername"
        name="收货人"
        label="收货人"
        placeholder="请填写收货人姓名"
        right-icon="manager-o"
        />

        <!-- 手机号码填写 -->
        <van-field
        v-model="phone"
        name="手机号码"
        label="手机号码"
        placeholder="请填写收货人手机号码"
        />

        <!-- 地区选择器 -->
        <van-field
        readonly
        clickable
        name="area"
        :value="value"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="showArea = true"
        right-icon="location-o"
        @click-right-icon="positioning"
        v-model="area"
        >

        </van-field>
        <van-popup v-model="showArea" position="bottom">
        <van-area
            :area-list="areaList"
            title="请选择地区"
            @confirm="onConfirm"
            @cancel="showArea = false"
        />
        </van-popup>

        <!-- 详细地址填写 -->
        <van-field
        v-model="detailAddress"
        type="textarea"
        name="详细地址"
        label="详细地址"
        placeholder="街道、楼牌号等"
        />

        <!-- 地址粘贴板 -->
        <!-- <van-row type="flex" justify="center">
            <van-col span="8">span: 8</van-col>
        </van-row> -->

        <!-- 分隔行 -->
        <div class="border"></div>
        
        <!-- 标签 -->
        <van-field
        v-model="label"
        type="textarea"
        name="label"
        label="标签"
        >
        
            
        </van-field>

        <!-- 是否设置默认地址 -->
        <van-field name="switch" label="设置默认地址" 
        input-align="right"
        fontSize="10px">
        <template #input >
            <van-switch size="20" v-model="isDefault" 
            active-color="#e74c3c"/>
        </template>
        </van-field>

        <!-- 按钮 -->
        <div style="margin: 16px;" class="btn">
            <van-button round block type="info" 
            native-type="submit" 
            color="linear-gradient(to right, #e74c3c, #e67e22)"
            size="small">
            保存
            </van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
import { Button } from "vant";
import { Toast } from "vant";
import {Form} from 'vant';
import Area from 'assets/js/area.js'
import { Radio } from 'vant'

import {request} from 'network/request.js'
export default {
  name: "Address",
  components: {},
  data() {
      return {
          buyername: '',
          phone: '',
          detailAddress: '',
          value: '',
          showArea: false,
          area:'',
          areaList: Area, // 数据格式见 Area 组件文档
          label: '',
          radio: '',
          isDefault: ''
      }
  },
  created() {
      request({
          url: '/get_buyer_list',
          params: {
              status: 1
          }
      }).then(res => {
        //   console.log(res);
          this.buyername = res[0].b_s_name;
          this.phone = res[0].telephone;
          this.area = res[0].home;
          this.detailAddress = res[0].home_detail;
          
      })
  },
  methods: {
      onSubmit(value) {
          console.log('submit', value);
          
      },
      onConfirm(values) {
        this.value = values.map(item => item.name).join('/');
        this.showArea = false;
      },
      positioning(){

      }
  }
  
};
</script>

<style scoped>
.btn{
    
    bottom: 12px;
    
}
.border {
    border: 5px solid rgba(210, 218, 226,.5);
}
</style>
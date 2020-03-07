<template>
  <div id="address">
    <van-nav-bar title="新建收货人"
     border>
        <van-icon name="arrow-left" slot="left" color="#7f8c8d" @click="back" />
    </van-nav-bar>

    <van-form @submit="onSubmit">
        <!-- 收货人姓名填写 -->
        <van-field
        v-model="buyername"
        name="addresssee"
        label="收货人"
        placeholder="请填写收货人姓名"
        right-icon="manager-o"
        />

        <!-- 手机号码填写 -->
        <van-field
        v-model="phone"
        name="telephone"
        label="手机号码"
        placeholder="请填写收货人手机号码"
        />

        <!-- 地区选择器 -->
        <van-field
        readonly
        clickable
        name="address"
        :value="value"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="showArea = true"
        right-icon="location-o"
        @click-right-icon="positioning"
        >

        </van-field>
        <van-popup v-model="showArea" position="bottom">
        <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showArea = false"
        />
        </van-popup>

        <!-- 详细地址填写 -->
        <van-field
        v-model="detailAddress"
        type="textarea"
        name="address_detail"
        label="详细地址"
        placeholder="街道、楼牌号等"
        />

        <!-- 地址粘贴板 -->
        <!-- <van-row type="flex" justify="center">
            <van-col span="8">span: 8</van-col>
        </van-row> -->

        <!-- 邮政编码 -->
        <van-field 
        label="邮政编码"
        name="postcode"
        v-model="postcode"
        >
        </van-field>


        <!-- 分隔行 -->
        <div class="border"></div>
        
        <!-- 标签 -->
        <!-- 标签 -->
        <van-field
        name = "label"
        >
        <van-cell slot="input">
        <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
                <span class="custom-title">标签</span>
                <div class="tag-items">
                    <van-tag class="tag" v-for="(item, index) in tag" :key="index"
                    type="primary" 
                    round 
                    size="medium"
                    :plain="!(index == currentIndex)"
                    @click="tagSelect(index)">
                    {{item}}
                    </van-tag>
                </div>
            </template>
        </van-cell>
        </van-field>

        <!-- 是否设置默认地址 -->
        <van-field name="switch" label="设置默认地址" 
        input-align="right"
        
        fontSize="10px">
        <template #input >
            <van-switch v-model="isDefault" size="20" 
            active-color="#e74c3c"/>
        </template>
        </van-field>

        <!-- 按钮 -->
        <div style="margin: 16px;" class="btn">
            <van-button round block type="info" 
            native-type="submit" 
            color="linear-gradient(to right, #e74c3c, #e67e22)"
            size="small">
            提交
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
          isDefault: false,
          value: '',
          showArea: false,
          areaList: Area, // 数据格式见 Area 组件文档
          label: '',
          postcode: '',
          tag: ['学校', '公司', '家'],
          currentIndex: 0,
      }
  },
  methods: {
      back() {
          this.$router.go(-1);
      },
      onSubmit(value) {
        //   console.log(value);
          const b_s_id = this.$route.params.b_s_id;
        //   console.log(b_s_id);
          
          let default_status = 0
          if (this.isDefault){
              default_status = 1
          }else{
              default_status = 0
          }

          //   判断标签
          let nowTag = ''
          switch(this.currentIndex){
              case 0:
                  nowTag = '学校';
                  break;
              case 1:
                  nowTag = '公司';
                  break;
              case 2:
                  nowTag = '家';
                  break;
          }
          request({
              url: '/insert_address',
              params: {
                  b_s_id: b_s_id,
                  address: value.address,
                  address_detail: value.address_detail,
                  addresssee: value.addresssee,
                  telephone: value.telephone,
                  default_status: default_status,
                  postcode: value.postcode,
                  label: nowTag
              }
          }).then(res => {
            //   console.log(res);
              if(res == 200){
                Toast.success('添加成功！')
                this.back()
              }else if(res == -1){
                  Toast.fail('您的收货地址已满！')
              }else if(res == 400){
                  Toast.fail('添加失败！')
              }
          }).catch(err => {
              console.log(err);
          })
      },
      onConfirm(values) {
        this.value = values.map(item => item.name).join('/');
        this.showArea = false;
      },
      positioning(){

      },
      tagSelect(index) {
          this.currentIndex = index
      }
  },
  created() {
      
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

.custom-title {
    position:absolute;
    left: 0;
}

.tag {
    
    margin-right: 8px;
}

.tag-other{
    margin-right: 8px;
}

.tag-items {
    margin-left: 75px;
}
</style>
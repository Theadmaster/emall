<template>
  <div id="address">
    <van-nav-bar title="编辑收货人"
     border>
        <van-icon name="arrow-left" slot="left" color="#7f8c8d" @click="goBack" />
        <span slot="right" @click="deleteConfirm" >删除</span>
    </van-nav-bar>

    <!-- 展示删除上拉菜单 -->
    <van-action-sheet
    v-model="show"
    :actions="actions"
    cancel-text="取消"
    description="是否确认删除该地址？"
    @select="addressDelete"
    />

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
        name="address_detail"
        label="详细地址"
        placeholder="街道、楼牌号等"
        />

        <!-- 邮政编码 -->
        <van-field 
        label="邮政编码"
        name="postcode"
        v-model="postcode"
        >
        </van-field>

        <!-- 地址粘贴板 -->
        <!-- <van-row type="flex" justify="center">
            <van-col span="8">span: 8</van-col>
        </van-row> -->

        <!-- 分隔行 -->
        <div class="border"></div>
        
        <!-- 标签 -->
        <van-field
        name = "label"
        v-model="tag"
        >
        <van-cell slot="input">
        <!-- 使用 title 插槽来自定义标题 -->
            <template slot="title">
                <span class="custom-title">标签</span>
                <van-tag class="tag" type="primary" round @click="">{{tag}}</van-tag>
            </template>
        </van-cell>
        
            
        </van-field>

        <!-- 是否设置默认地址 -->
        <van-field name="default_status" label="设置默认地址" 
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
          show: false,
          actions: [
              { name: '删除', color: 'red'}
          ],
          buyername: '',
          phone: '',
          detailAddress: '',
          value: '',
          showArea: false,
          area:'',
          areaList: Area, // 数据格式见 Area 组件文档
          label: '',
          isDefault: false,
          tag: '',
          nowTag: '',
          postcode: '',
          address_id: 0
      }
  },
  created() {
    //   console.log(this.$route.params.address_id);
      
      request({
          url: '/get_address_item',
          params: {
              address_id: this.$route.params.address_id
          }
      }).then(res => {
        //   console.log(res);
          this.buyername = res[0].addresssee;
          this.phone = res[0].telephone;
          this.area = res[0].address;
          this.detailAddress = res[0].address_detail;
          this.postcode = res[0].postcode;
          if(res[0].default_status==1){
              this.isDefault = true
          }else{
              this.isDefault = false
          }
          this.tag = res[0].label
          this.address_id = res[0].address_id
        
      })
  },
  methods: {
      onSubmit(value) {
        //   console.log(value);
          const address_id = this.address_id
        //   console.log(address_id);
          let default_status = 0
          if (value.default_status){
              default_status = 1
          }else{
              default_status = 0
          }
          
          request({
              url: '/edit_address_info',
              params: {
                  address_id: address_id,
                  address: value.address,
                  address_detail: value.address_detail,
                  addresssee: value.addresssee,
                  telephone: value.telephone,
                  default_status: default_status,
                  postcode: value.postcode,
                  label: value.label
              }
              
          }).then(res => {
              console.log(res);
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
      goBack() {
          this.$router.go(-1);
      },
      deleteConfirm() {
          this.show = true
      },
      addressDelete(item) {
          this.show = false;
          const address_id = this.address_id
          request({
              url: '/delete_address_item',
              params: {
                  address_id: address_id
              }
          }).then(res => {
              console.log(res);
              this.$router.go(-1)
              Toast.success('删除成功！')
          }).catch(err => {
              console.log(err);
          })
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

.custom-title {
    position:absolute;
    left: 0;
}

.tag {
    margin-left: 75px;
    margin-right: 5px;
}
</style>
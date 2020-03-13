<template>
  <div class="home">
      <!-- 导航栏 -->
      <home-nav-bar class="nav-bar" />

      <!-- 轮播 -->
      <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
            <!-- <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item> -->
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>

      <!-- 选项 -->
      <van-grid square :border="false" >
        <van-grid-item
            v-for="(value,index) in 8"
            :key="value"
            icon="photo-o"
            :text="text[index]"
        />
      </van-grid>

      <!-- 控制栏 -->
      <tab-control 
      :titles="titles"
      @tabClick="tabClick" />

      <!-- 商品展示 -->
      <goods-list />
  </div>
</template>

<script>
import HomeNavBar from "./childCpns/HomeNavBar";
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from "components/content/goods/GoodsList"

export default {
    name: "Home",
    components: {
        HomeNavBar,
        TabControl,
        GoodsList
    },
    data() {
        return {
            value: '',
            images: [],
            text: ["家电超市","数码电器","潮流服饰","生鲜超市","充值缴费",
            "领券中心","今日拍卖","吃货来袭"],
            titles: ['全部', '精选', '直播', '进口', '特惠']
        }
    },
    methods: {
        tabClick() {

        }
    }
}
</script>

<style scoped>

.home {
    background-color: #f5f6fa;
}

.home::-webkit-scrollbar{
    display: none;
}

.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99; 
}

.swiper {
    margin-top: 44px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #fab1a0;
}

</style>
<template>
  <div>
      <!-- navbar -->
      
      <category-nav-bar />
      

      <!-- 分类明细 -->
      <div class="cate-all">
          <ul>
            <li v-for="(item, index) in list" 
            :class="{ischeck: currentIndex === index}"
            @click="liClick(index)"
            >
                <span></span>
                <a href="javascript:;">{{item}}</a>
            </li>
          </ul>

        <!-- 分类内容 -->
          <category-content />
      </div>

    
  </div>
</template>

<script>
import CategoryNavBar from './childCpns/CategoryNavBar'
import CategoryContent from './childCpns/CategoryContent'

export default {
    name: "Category",
    components: {
        CategoryNavBar,
        CategoryContent
    },
    data() {
        return {
            list: [
                '热门推荐', '手机数码', '家用电器', '电脑办公', 
                '计生情趣', '美妆护肤', '个护清洁', '汽车生活', 
                '母婴童装', '图书音像', '运动户外', '食品生鲜', 
                '酒水饮料', '家居家装', '玩具乐器', '箱包手袋'
            ],
            currentIndex: 0,
            ischeck: true
        };
    },
    methods: {
        liClick(index) {
            this.currentIndex = index
        }
    }
}
</script>

<style scoped>
ul {
    width: 96px;
    overflow: auto;
    /* overflow-y: hidden; */
    /* -webkit-overflow-scrolling: touch; */
    height: calc(100vh - 93px);
    /* overflow: hidden; */
    /* background-color: #1abc9c; */
    background-color: rgba(230, 230, 230, .6);
    
    /* float: left; */
}

ul::-webkit-scrollbar{
    display: none;
}

li {
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    position: relative;
}

.ischeck span {
    position: absolute;
    height: 14px;
    width: 5px;
    left: 0;
    top: 18.2px;
    background-color: #e74c3c;
}

li a {
    text-decoration: none;
    color: #666;
    /* background-color: red; */
}

.ischeck {
    background-color: rgb(247, 247, 247) !important;
}

.ischeck a {
    color: black !important;
    font-size: 16px;
    font-weight: 500;
}

.cate-all {
    display: flex;
}

</style>
<template>
    <div class="goods-list-item" @click="itemClick">
        <!-- <img v-lazy="showImage" alt="" @load="imageLoad"> -->
        <img src="~assets/img/home/2.jpg" alt="">
        <div class="goods-info">
            <!-- <p class="desc">{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span> -->
            <p class="desc">2020春季新款宽松chic假两件针织拼接衬衫女</p>
            <span class="price">￥155</span>
            <span class="collect">4人付款</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
        
      },
      itemClick() {
        // console.log('跳转详情页');
        // console.log(this.goodsItem);
        
        // this.$router.push('/detail/'+ this.goodsItem.iid)
      }
    }
}
</script>

<style scoped>
  .goods-list-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 8px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: #e74c3c;
    margin-right: 20px;
    font-size: 15px;
  }

  .goods-info .collect {
    position: relative;
  }

  /* .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  } */
</style>
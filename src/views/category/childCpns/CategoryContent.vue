<template>
  <div class="content">
      <div class="items" v-for="item in 3">
          <div class="title">
              休闲零食
          </div>
          <div class="details">
            <div class="detail-item" v-for="item1 in 6">
                <img src="~assets/img/home/supermarket.png" alt="" >
                <span>坚果炒货</span>
            </div>
            
          </div>
      </div>   
  </div>
</template>

<script>
export default {
    name: 'CategoryContent'
}
</script>

<style scoped>
  .content {
    width: calc(100% - 96px);
    height: calc(100vh - 93px);
    
    background-color: rgb(247, 247, 247);
    overflow: auto;
  }

  .content::-webkit-scrollbar{
    display: none;
  }

  .items {
      margin: 10px;
      background-color: #fff;
  }

  .title {
      font-size: 13px;
      margin: 5px;
      font-weight: 700;
  }

  .details{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
  }

  .detail-item{
      width: 75px;
      height: 80px;
      /* background-color: #f1c40f; */
      margin: 5px;
      text-align: center;

  }

  .detail-item img {
      display: block;
      margin: 5px auto;
  }

  .detail-item span {
      font-size: 13px;
      color: black;
  }

</style>
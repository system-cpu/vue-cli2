<template>
  <div id="Business_details">
    <!-- 商家活动 -->
        <div class="tou">
              <img class="tou_img" v-show="inshow"  @click="$router.go(-1)"  src="../assets/top.png" alt="">
              <p class="tou_">{{head_name}}</p>
              <p class="tou_per" v-show="right_inshow">{{right_name}}1</p>
        </div>
       <!-- <div class="tou_div" >sdf</div> -->
  </div>
</template>

<script>
export default {
  name: 'Business_details',
   props: ["inshow","head_name","right_inshow","right_name"],
    data(){
      return{

      }
  },
}
</script>
<style  scoped>
   .tou{
      width: 100%;
      height: 0.9rem;
      background-color: #EBA900;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-items: center;
      align-content: center;
      position: fixed;
      left: 0rem;
      top:0rem;
      z-index: 10000;
    }
    .tou_div{
        width: 100%;
        /* height: 0.9rem; */
         background-color: #EBA900;
    }
    .tou p{
      font-size: 0.32rem;
      color: white;
    }
    .tou_img{
      position: absolute;
      left: 0.2667rem;
      width: 0.2rem;
      height: 0.35rem;
    }
   .tou_per{
     position: absolute;
     right: 0.469rem;
     color: #fff;
     font-size: 0.427rem;
     top:0rem;
   }
</style>


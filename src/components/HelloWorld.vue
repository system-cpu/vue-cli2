<template>
<!-- https://lanhuapp.com/url/xyO6Y-pG1FQ -->
  <div>
    <!-- <div class="butt"></div> -->
    <div class="tabs">
      <div v-for="(item,index) of items" :class="[item.cls,{on:index === idx}]" @click="$router.push(item.push)" :key="index">
        <div :class="[item.cls1,{on:index === idx}]">  
          <img :src="index==idx?item.icon:item.iconSelect">
        </div>
        <div class="zhong"></div>
        <div>
          <p :class="['colorChange',{on:index===idx}]">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["idx"],
  data() {
    return {
      items: [
        {
          cls: "home",
          cls1: "home1",
          name: "首页",
          push: "/",
          icon: require("../assets/tab1_.png"),
          iconSelect: require("../assets/tab1.png")
        },
        {
          cls: "shop",
          cls1: "shop1",
          name: "线上商城",
          push: "/shop",
          icon: require("../assets/tab2_.png"),
          iconSelect: require("../assets/tab2.png")
        },
        {
          cls: "community",
          cls1: "community1",
          name: "艳姐留言",
          push: "/community",
          icon: require("../assets/tab3.png"),
          iconSelect: require("../assets/tab3.png")
        },
        {
          cls: "friend",
          cls1: "friend1",
          name: "购物车",
          push: "/friend",
          icon: require("../assets/tab4_.png"),
          iconSelect: require("../assets/tab4.png")
        },
        {
          cls: "me",
          cls1: "me1",
          name: "我的",
          push: "/me",
          icon: require("../assets/tab5_.png"),
          iconSelect: require("../assets/tab5.png")
        }
      ]
    };
  },
  methods:{
  }
};
</script>

<style>
.tabs {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 1rem;
  width: 100%;
  background:#FFFFFF;
  /* padding-top: 0.33rem; */
  justify-content: space-around;
  border-top: 1px solid #dedede; 
}
.tabs div div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home div img{
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.1334rem;
}
.shop div img{
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.1334rem;
}
.me div img{
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.1334rem;
}
.friend div img{
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.1334rem;
}
.tabs div div p {
  font-size: 0.267rem;
  margin-top: 0;
  color: #8E8E93;
}
.tabs .on{
  color: #EBA900;
}
.community{
    position: relative;
    bottom: 0.64rem;
}
.community1{
 width:1rem;
  height :1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#FFFFFF;
  justify-content: center;
  border-radius: 50%;
  border-top: 1px solid #dedede; 
  border-top: 1px solid #dedede; 
 border-top: 1px solid #dedede; 
 margin-bottom: 0.13rem;
}
.community img{
  width: 0.8rem;
  height :0.8rem;
}

    .butt{
      width: 100%;
      height: 1rem;
      background-color: #f2f2f2;
    }
</style>
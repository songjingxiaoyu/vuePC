<template>
  <!-- <div class="swiper-container" id="swiper"> -->
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: {
    carouselList: Array,
    autoplay:{
      type:Boolean,
      default:true
    }
  },
  watch: {
    //监视carouselList的变化的回调函数，在carouselList数据变化才调用
    carouselList:{
          handler(value){
            if(value.length>0){
            // this.initSwiper()//此时列表数据还没有显示，没有轮播效果
            this.$nextTick(() => {
              //数据更新之后，界面更新之前调用
              this.initSwiper();
            });
          }
        },
        immediate:true,
    }
  },
  methods: {
    //分发action请求获取carouselList数据到state中
    initSwiper() {
      //放Home组件也可以，切换就执行
      //放App组件，只执行一次
      // this.$store.dispatch('getBanners')

      //创建swiper实例对象，在列表显示之后创建才有效
      // new Swiper ('.swiper-container', {//类名
      // new Swiper ('#swiper', {//id选择器
      new Swiper(this.$refs.swiper, {
        // direction: 'horizontal', // 水平切换选项，
        loop: true, // 循环模式选项
        autoplay:this.autoplay,//自动轮播
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  },
};
</script>

<style lang='less' scoped>
</style>
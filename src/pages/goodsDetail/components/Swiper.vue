<template>
  <div class="swiper-detail">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperImgs" :key="item">
        <img :src="item" alt="">
      </swiper-slide>

      <template v-slot:pagination>
        <div class="swiper-pagination"></div>
      </template>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name:'swiper-detail',
  components:{
    swiper,
    swiperSlide
  },
  props:{
    swiperImgs:{
      type:Array
    }
  },
  data(){
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        pagination: {
          // 分页器对应的 html 元素
          el: '.swiper-pagination',
          // 分页器的样式
          type: 'fraction'
        }
      },
    }
  }
}
</script>

<style lang="scss">
  @import '@css/style.scss';
  .swiper-detail{
    .swiper-container{
      height:px2rem(364);
      img{
        width:100%;
        height:100%;
      }
      .swiper-pagination-fraction{
        left:auto;
        right:0;
        width:auto;
        font-size:$infoSize;
        background-color:rgba(0, 0, 0, .3);
        padding:px2rem(6) px2rem(18);
        border-top-left-radius: px2rem(16);
        border-bottom-left-radius: px2rem(16);
        bottom:px2rem(32);
        color:#fff;

        .swiper-pagination{
          font-size:$titleSize;
          font-weight:bold;
        }
      }
    }
  }
</style>
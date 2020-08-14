<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in imgList" :key="item.id">
        <img :src="item.imgLink" alt="">
      </swiper-slide>

      <!-- Optional controls -->
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
  name:'my-swiper',
  components:{
    swiper,
    swiperSlide
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
          type: 'bullets'
        }
      },
      imgList:[
        {
          id:'1',
          imgLink:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/130108/33/5940/81363/5f280642Edd68debb/5c52e3d6b25c3973.jpg!q70.jpg.dpg'
        },
        {
          id:'2',
          imgLink:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/132672/3/5928/57730/5f23b874E80e2441f/8b5dc466e4800f51.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          id:'3',
          imgLink:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/142748/2/4533/117517/5f281118E3050412d/bd9b240e03a20e03.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          id:'4',
          imgLink:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/128902/32/8705/86293/5f27e0d4E9fc2c5c7/48fa3e56a0cebcbf.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          id:'5',
          imgLink:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/126731/8/8569/133381/5f28be6eE53c48dce/579e90e2bc9c9fa0.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          id:'6',
          imgLink:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/133138/16/5803/150273/5f23738bEf0f62b1b/b16ba803cc4a562a.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          id:'7',
          imgLink:'//m.360buyimg.com/mobilecms/s700x280_jfs/t1/123624/24/2195/99979/5ec3a165E12b276e2/2e5b8a2606fbabfe.jpg!q70.jpg.dpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import '@css/style.scss';
  .swiper-wrap{
    background:url('./../../../assets/img/home-img.jpg') no-repeat;
    background-size:100% px2rem(205);
    .swiper-container{
      padding-top:px2rem(50);
      width:100%;
      height:px2rem(155);
      img{
        display:block;
        width:95%;
        height:100%;
        margin:0 auto;
        border-radius:px2rem(7);
      }
      .swiper-pagination{
        bottom:px2rem(3);
      }
      .swiper-pagination-bullet{
        width:6px;
        height:6px;
      }
      .swiper-pagination-bullet-active{
        background-color:red;
      }
    }
  }
</style>
<template>
  <div class="home" @scroll="onScrollChange" ref="home">
    <home-header :class="{isRed:isShow}"></home-header>
    <home-swiper></home-swiper>
    <home-activity></home-activity>
    <icon-list></icon-list>
    <banner></banner>
    <goods :layoutType="'3'" :isScroll="false"></goods>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeActivity from './components/Activity'
import IconList from './components/IconList'
import Banner from './components/Banner'
import Goods from '@c/Goods'

export default {
  name:'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeActivity,
    IconList,
    Banner,
    Goods,
  },
  data(){
    return {
      isShow: false,
      homeScrollTopValue:0
    }
  },
  activated(){
    this.$refs.home.scrollTop = this.homeScrollTopValue;
  },
  methods:{
    // 监听滚动条
    onScrollChange($event){
      // 页面滚动距离
      let scrollTopValue = $event.target.scrollTop;
      this.homeScrollTopValue = scrollTopValue;
      
      if(scrollTopValue > 90){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .home{
    width:100%;
    height:100%;
    overflow:hidden;
    overflow-y:auto;
    background-color:$bgColor;
    .isRed{
      background-color:red;
    }
  }
</style>
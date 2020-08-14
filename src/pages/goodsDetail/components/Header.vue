<template>
  <div class="detail-header" :class="{'isRed':isShow}">
    <detail-navbar>
      <template v-slot:left>
        <img src="@img/back-2.svg" class="icon-black" @click="onBackClick" v-show="!isShow">
        <img src="@img/back-white.svg" class="icon-white" @click="onBackClick" v-show="isShow">
      </template>
      <template v-slot:center>
        <p class="title" v-show="isShow">商品详情</p>
      </template>
      <template v-slot:right>
        <div class="icon-white"></div>
      </template>
    </detail-navbar>
  </div>
</template>

<script>
import DetailNavbar from '@c/NavBar'
export default {
  name:'detailHeader',
  components:{
    DetailNavbar
  },
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    onBackClick(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .detail-header{
    width:100%;
    padding-top:15px;
    background-color:transparent;
    position:fixed;
    top:0;
    left:0;
    transition:all .5s;
    z-index:5;
    &.isRed{
      background-color:red;
      color:#fff;
      transition:all .5s
    }
    .icon-black{
      width: 29px;
      height:29px;
      display:inline-block;
    }
    .title{
      font-size:px2rem(16);
      text-align:center;
    }
    .icon-white{
      width:29px;
      height:29px;
    }
  }
</style>
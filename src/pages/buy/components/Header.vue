<template>
  <div class="buy-header">
    <detail-navbar>
      <template v-slot:left>
        <img src="@img/back.svg" class="icon-arrow" @click="onBackClick" >
      </template>
      <template v-slot:center>
        <p class="title">立即购买</p>
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
  name:'buyHeader',
  components:{
    DetailNavbar
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
  .buy-header{
    background-color:#fff;
    padding-top:15px;
    border-bottom:1px solid $lineColor;
    .icon-arrow{
      width: 29px;
      height:29px;
      display:inline-block;
    }
    .title{
      text-align:center;
      font-size:px2rem(16);
    }
    .icon-white{
      width: 29px;
      height:29px;
      display:inline-block;
    }
  }
</style>
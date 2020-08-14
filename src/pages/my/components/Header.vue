<template>
  <div class="my-header">
    <my-navbar>
      <template v-slot:left>
        <div class="icon-white"></div>
      </template>
      <template v-slot:center>
        <p class="title">我的京东</p>
      </template>
      <template v-slot:right>
        <div class="icon-white"></div>
      </template>
    </my-navbar>
  </div>
</template>

<script>
import MyNavbar from '@c/NavBar'
export default {
  name:'myHeader',
  components:{
    MyNavbar
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .my-header{
    background-color:#fff;
    border-bottom:1px solid $lineColor;
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
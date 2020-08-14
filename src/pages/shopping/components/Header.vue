<template>
  <div class="shopping-header">
    <shopping-navbar>
      <template v-slot:left>
        <div class="icon-white"></div>
      </template>
      <template v-slot:center>
        <p class="title">购物车</p>
      </template>
      <template v-slot:right>
        <div class="icon-white"></div>
      </template>
    </shopping-navbar>
  </div>
</template>

<script>
import ShoppingNavbar from '@c/NavBar'
export default {
  name:'shoppingHeader',
  components:{
    ShoppingNavbar
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
  .shopping-header{
    background-color:#fff;
    padding-top:15px;
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
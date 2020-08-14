<template>
  <div class="header">
    <home-navbar>
      <template v-slot:left>
        <img src="@img/more-white.svg" alt="" class="header-left">
      </template>
      <template v-slot:center>
        <input type="text" placeholder="篮球">
      </template>
      <template v-slot:right>
        <p>登录</p>
      </template>
    </home-navbar>
  </div>
</template>

<script>
import HomeNavbar from '@c/NavBar';
export default {
  name:'home-header',
  components:{
    HomeNavbar
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .header{
    width:100%;
    position:fixed;
    left:0;
    top:0;
    z-index:10;
    background-color:transparent;
  

    img{
      width:px2rem(24);
      height:px2rem(20);
      margin-bottom:px2rem(5);
    }

    input{
      display:block;
      width:100%;
      height:px2rem(26);
      border-radius:px2rem(15);
      font-size:px2rem(12);
      padding-left:px2rem(15);
      box-sizing:border-box;
    }
    p{
      font-size:px2rem(12);
      color:#fff;
    }
  }
</style>
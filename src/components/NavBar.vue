<template>
  <div class="navbar">
    <div class="navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center">
      <slot name="center"></slot>
    </div>
    <div class="navbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'Me-navbar'
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .navbar{
    @include flex-between();
    width:100%;
    height:50px;

    &-left{
      margin-left:px2rem(10);
    }

    &-center{
      flex:1;
      margin:0 px2rem(10);
    }

    &-right{
      margin-right:px2rem(10);
    }
  }
</style>
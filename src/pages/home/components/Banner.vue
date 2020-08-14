<template>
  <div class="banner">
    <div class="banner-box clearfix">
      <div class="left-box fl">
        <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg" alt="">
      </div>
      <div class="right-box fr">
        <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg" alt="">
      </div>
    </div>
    <div class="banner-cards">
      <img src="//m.360buyimg.com/mobilecms/s750x100_jfs/t1/111655/4/10853/142323/5ef22455Eb86abfc1/2bf122bb2e87d6e3.png.webp" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'home-banner'
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .banner{
    margin-top:px2rem(2);
    .banner-box{
      width:95%;
      margin:0 auto;
      .left-box,.right-box{
        width:50%;
        height:100%;
      }
      img{
        width:100%;
        height:100%;
      }
    }
    .banner-cards{
      margin-top:px2rem(5);
      height:px2rem(50);
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
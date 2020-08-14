<template>
  <div class="my-wrap">
    <my-header></my-header>
    <div class="my-content">
      <div class="person">
        <img src="@img/my-person.png" alt="">
      </div>
      <div class="address">
        <img src="@img/my-address.png" alt="">
      </div>
      <div class="assets">
        <img src="@img/my-assets.png" alt="">
      </div>
      <div class="coolect">
        <img src="@img/my-coolect.png" alt="">
      </div>
      <div class="activity">
        <img src="@img/my-activity.png" alt="">
      </div>
      <div class="clients">
        <img src="@img/my-clients.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from './components/Header'
export default {
  name:'my',
  components:{
    myHeader,
  },
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .my-wrap{
    height: 100%;
    overflow: hidden;
    overflow-y:auto;
    display: flex;
    flex-flow: column;
    background-color:#f7f7f7;
    .my-content{
      
      .person{
        img{
          width:100%;
          height:px2rem(150);
        }
      }
      .address{
        img{
          width:100%;
          height:px2rem(70);
        }
      }
      .assets{
        margin-top:px2rem(11);
        img{
          width:100%;
          height:px2rem(70);
        }
      }
      .coolect{
        margin-top:px2rem(11);
        img{
          width:100%;
          height:px2rem(70)
        }
      }
      .activity{
        margin-top:px2rem(11);
        img{
          width:100%;
          height:px2rem(130);
        }
      }
      .clients{
        margin-top:px2rem(11);
        img{
          width:100%;
          height:px2rem(45);
        }
      }
    }
  }
</style>
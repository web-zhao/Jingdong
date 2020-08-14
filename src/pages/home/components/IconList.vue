<template>
  <div class="home-icon">
    <div class="icon-list">
      <div class="icon-item" v-for="item in iconList" :key="item.id" @click="goGoodsList(item)">
        <a href="javascript:;">
          <img :src="item.imgLink" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'iconList',
  data(){
    return {
      iconList:[
        {
          id:'1',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp',
          title:'京东超市'
        },
        {
          id:'2',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp',
          title:'数码电器'
        },
        {
          id:'3',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png.webp',
          title:'京东服饰'
        },
        {
          id:'4',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp',
          title:'京东生鲜'
        },
        {
          id:'5',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp',
          title:'京东到家'
        },
        {
          id:'6',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp',
          title:'充值缴费'
        },
        {
          id:'7',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp',
          title:'9.9元拼'
        },
        {
          id:'8',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp',
          title:'领券'
        },
        {
          id:'9',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png.webp',
          title:'领金贴'
        },
        {
          id:'10',
          imgLink:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp',
          title:'PLUS会员'
        }
      ]
    }
  },
  methods:{
    goGoodsList(){
      this.$router.push({
        name:'goodsList',
        params:{
          routerType: 'push'
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .home-icon{
    width:100%;
    height:px2rem(180);
    background:url('./../../../assets/img/icon-back.png') no-repeat top;
    background-size:100% 96%;
    .icon-list{
      display:flex;
      flex-wrap:wrap;
      .icon-item{
        width:20%;
        height:px2rem(81);
        text-align:center;
        
        a{
          display:block;
        }
        img{
          width:px2rem(44);
          height:px2rem(44);
          margin-top:px2rem(12);
        }
        p{
          font-size:px2rem(11);
          margin-top:px2rem(5);
          color:#333;
        }
      }
    }
      
    
  }
</style>
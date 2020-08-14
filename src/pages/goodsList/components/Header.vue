<template>
  <div class="goods-header">
    <goods-navbar>
       <template v-slot:left>
          <img src="@img/back.svg" alt="" class="icon-arrow" @click="onBackClick">
       </template>
       <template v-slot:center>
         <p class="title">商品列表</p>
       </template>
       <template v-slot:right>
         <img :src="layoutType.icon" @click="onChangeLayoutTypeClick" class="icon-right"> 
       </template>
    </goods-navbar>
  </div>
</template>

<script>
import GoodsNavbar from '@c/NavBar'
export default {
  name:'goodsHeader',
  components:{
    GoodsNavbar
  },
  data(){
    return {
      // goods 展示数据源
      layoutTypeDatas:[
        {
          type:'1',
          icon:require('@img/list-type.svg')
        },
        {
          type:'2',
          icon:require('@img/grid-type.svg')
        },
        {
          type:'3',
          icon:require('@img/waterfall-type.svg')
        }
      ],
      //展示形式
      layoutType:{}
    }
  },
  created(){
    this.layoutType = this.layoutTypeDatas[0];
    // this.$emit('layoutType',this.layoutType.type);
  },
  methods:{
    // 返回上一页
    onBackClick(){
      this.$router.go(-1);
    },
    // 右侧展示形式
    onChangeLayoutTypeClick(){
      if(this.layoutType.type === '1'){
        this.layoutType = this.layoutTypeDatas[1];
      }else if(this.layoutType.type === '2'){
        this.layoutType = this.layoutTypeDatas[2];
      }else{
        this.layoutType = this.layoutTypeDatas[0];
      }
      this.$emit('layoutType',this.layoutType.type);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods-header{
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
    .icon-right{
      width: 32px;
      height:32px;
      display:inline-block;
    }
  }
</style>
<template>
  <div class="goods-list-page">
    <goods-header @layoutType="onlayoutType"></goods-header>
    <div class="goods-list-page-content">
      <goods-options @optionsChange="onGoodsOptionsChange"></goods-options>
      <goods :layoutType="goodsListType" :sort="sortType"></goods>
    </div>
  </div>
</template>

<script>
import GoodsHeader from './components/Header'
import GoodsOptions from './components/Options'
import Goods from '@c/Goods'

export default {
  name:'goodsList',
  components:{
    GoodsHeader,
    GoodsOptions,
    Goods
  },
  data(){
    return {
      goodsListType:'',
      sortType:'1'
    }
  },
  methods:{
    onlayoutType(type){
      this.goodsListType = type;
    },
    onGoodsOptionsChange(sortType){
      this.sortType = sortType;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods-list-page{
    position:absolute;
    height:100%;
    width:100%;
    background-color:$bgColor;
    font-size:px2rem(16);
    display:flex;
    flex-direction:column;

    &-content{
      height:100%;
      overflow-y:auto;
      display:flex;
      flex-direction:column;
    }
  }
</style>
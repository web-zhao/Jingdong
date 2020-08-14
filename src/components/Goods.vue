<template>
  <div class="goods" :class="[layoutClass, {'goods-scroll':isScroll}]" :style="{height: goodsViewHeight}" ref="goods" @scroll="onScrollChange">
    <div 
      class="goods-item"
      :class="layoutItemClass"
      v-for="(item, index) in sortGoodsData" :key="index"
      :style="goodsItemStyles[index]"
      ref="goodsItem"
      @click="onItemClick(item)"
    >
      <!-- 图片 -->
      <img class="goods-item-img" :src="item.img" alt="" :style="imgStyles[index]" />
      <!-- 描述 -->
      <div class="goods-item-desc">
        <p class="goods-item-desc-name text-line-2" :class="{'goods-item-desc-name-hint':!item.isHave}">
          <!-- 直营 -->
          <span class="goods-item-name-direct" v-if="item.isDirect">直营</span>
          <!-- 库存 -->
          <span class="goods-item-name-no-have" v-if="!item.isHave">缺货</span>
          {{item.name}}
        </p>
        <!-- 满减 -->
        <p class="goods-item-desc-activity" v-if="item.isDirect">满300减30</p>
        <div class="goods-item-desc-data">
          <p class="goods-item-desc-data-price">￥{{item.price}}</p>
          <p class="goods-item-desc-data-volume">销量{{item.volume}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'goods',
  data(){
    return {
      dataSource:[],     // 数据源
      sortGoodsData:[],     // 排序数据
      MAX_IMG_HEIGHT: 198,  // 最大高度
      MIN_IMG_HEIGHT: 178,  // 最小高度
      imgStyles: [],      // 图片样式集合
      ITEM_MARGIN_SIZE: 8,  // margin高度
      goodsItemStyles: [],  // item样式集合
      goodsViewHeight:"100%",    // goods组件高度
      layoutClass:'goods-list',
      layoutItemClass:'goods-list-item',
      goodsScrollTopValue:0
    }
  },
  props:{
    // 指定展示形式
    layoutType:{
      type:String,
      default:'1'
    },
    isScroll:{
      type:Boolean,
      default:true
    },
    // 排序规则：1.默认 、 1-2:价格、1-3：销量  2.有货  3.直营
    sort:{
      type:String,
      default:'1'
    }
  },
  created(){
    this.initData();
  },
  activated(){
    this.$refs.goods.scrollTop = this.goodsScrollTopValue;
  },
  methods:{
    // 获取数据
    initData(){
      this.$http.get('/goods').then((data) => {
        this.dataSource = data.list;
        // 数据排序
        this.setSortGoodsData();
        // 设置布局
        this.initLayout();
      })
    },
    // 生成随机图片高度
    imgHeight(){
      let result = Math.floor(Math.random() * (this.MAX_IMG_HEIGHT - this.MIN_IMG_HEIGHT) + this.MIN_IMG_HEIGHT);
      return result;
    },
    // 根据随机图片高度，生成对应的图片样式数据
    initImgStyles(){
      this.dataSource.forEach(() => {
        let imgHeight = this.imgHeight() + 'px';
        this.imgStyles.push({
          height: imgHeight
        })
      })
    },
    // 瀑布流布局
    initWaterfall(){
      let $goodsItems = this.$refs.goodsItem;
      if(!$goodsItems) return;
      // 左右两侧顶部初始化高度
      let leftHeightTotal = 0, rightHeightTotal = 0;
      // 遍历 item元素，得到高度+margin
      $goodsItems.forEach(($el) => {
        // item样式,用于绝对定位
        let goodsItemStyle = {};
        let elHeight = $el.clientHeight + this.ITEM_MARGIN_SIZE;
        // 对比左右高度
        if(leftHeightTotal <= rightHeightTotal){
          goodsItemStyle = {
            left: '0px',
            top: leftHeightTotal + 'px'
          };
          // 更新左侧高度
          leftHeightTotal += elHeight;
        }else{
          goodsItemStyle = {
            right: '0px',
            top: rightHeightTotal + 'px'
          };
          // 更新右侧高度
          rightHeightTotal += elHeight;
        }
        
        // 保存item所有样式，并配置
        this.goodsItemStyles.push(goodsItemStyle);
      });
      if(!this.isScroll){
        this.goodsViewHeight = (leftHeightTotal > rightHeightTotal ? leftHeightTotal : rightHeightTotal) + 'px';
      }
    },
    // 设置布局,初始化布局的数据
    initLayout(){
      this.goodsViewHeight = '100';
      this.goodsItemStyles = [];
      this.imgStyles = [];
      // layoutType 设置不同展示类
      switch (this.layoutType) {
        // 垂直布局
        case '1':
          (this.layoutClass = 'goods-list'), (this.layoutItemClass = 'goods-list-item');
          break;
        // 网格布局
        case '2':
          (this.layoutClass = 'goods-grid'), (this.layoutItemClass = 'goods-grid-item');
          break;
        // 瀑布流布局
        case '3':
          (this.layoutClass = 'goods-waterfall'), (this.layoutItemClass = 'goods-waterfall-item');
          this.initImgStyles();
          // 需要等到 Dom 创建完成之后
          this.$nextTick(() => {
            this.initWaterfall();
          });
          break;
      }
    },
    // 商品排序
    setSortGoodsData(){
      switch(this.sort){
        case '1':
          this.sortGoodsData = this.dataSource.slice(0);
          break;
        case '1-2':
          this.getSortGoodsDataFromKey('price');
          break;
        case '1-3':
          this.getSortGoodsDataFromKey('volume');
          break;
        case '2':
          this.getSortGoodsDataFromKey('isHave');
          break;
        case '3':
          this.getSortGoodsDataFromKey('isDirect');
          break;
      }
    },
    // 传入key进行排序
    getSortGoodsDataFromKey(key){
      this.sortGoodsData.sort((x, y) => {
        let v1 = x[key],
            v2 = y[key];
        if (typeof v1 === 'boolean'){
          if(v1){
            return -1;
          }
          if(v2){
            return 1;
          }
          return 0;
        }
        if(parseFloat(v1) >= parseFloat(v2)){
          return -1;
        }
        return 1;
      })
    },
    // 商品点击事件
    onItemClick(item){
      if(!item.isHave){
        alert('该商品无库存');
        return;
      }
      this.$router.push({
        name:'goodsDetail',
        params:{
          routerType:'push',
        },
        query:{
          goodsId: item.id
        }
      })
    },
    onScrollChange($event){
      this.goodsScrollTopValue = $event.target.scrollTop;
    }
  },
  watch:{
    layoutType(){
      this.initLayout();
    },
    sort(){
      this.setSortGoodsData();
    }

  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  // 基础布局
  .goods{
    background-color: $bgColor;

    &-scroll{
      overflow:hidden;
      overflow-y:auto;
    }
    &-item{
      background-color:#fff;
      padding:$marginSize;
      box-sizing:border-box;

      &-desc{
        width:100%;

        &-name{
          font-size:$infoSize;
          line-height:px2rem(18);
          
          &-hint{
            color:$hintColor;
          }
          .goods-item-name-direct{
            padding:0 px2rem(4);
            font-size:px2rem(11);
            color:#fff;
            background-color:$mainColor;
            border-radius:px2rem(2);
            margin-right:px2rem(2);
          }
          .goods-item-name-no-have{
            padding:0 px2rem(4);
            font-size:px2rem(11);
            color:#fff;
            background-color:$hintColor;
            border-radius:px2rem(2);
            margin-right:px2rem(2);
          }
        }

        &-activity{
          width:px2rem(68);
          text-align:center;
          padding:px2rem(1) 0;
          box-sizing:border-box;
          line-height:px2rem(11);
          font-size:px2rem(11);
          color:red;
          border:1px solid red;
          border-radius:px2rem(3);
          margin-top:px2rem(9);
        }

        &-data{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:$marginSize;

          &-price{
            font-size:$titleSize;
            color:$mainColor;
            font-weight:500;
          }
          &-volume{
            font-size:$infoSize;
            color:$hintColor;
          }
        }
      }
    }
  }

  // 垂直列表
  .goods-list{
    &-item{
      display:flex;
      border-bottom:1px solid $lineColor;

      .goods-item-img{
        width:px2rem(120);
        height:px2rem(120);
      }

      .goods-item-desc{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        padding:$marginSize;

        &-activity{
          margin-top:px2rem(-27);
        }
      }
    }
  }

  // 网格布局
  .goods-grid{
    padding:$marginSize;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    &-item{
      width:49%;
      border-radius:$radiusSize;
      margin-bottom:$marginSize;

      .goods-item-img{
        width:100%;
      }
    }
  }

  // 瀑布流
  .goods-waterfall{
    position:relative;
    margin:$marginSize;

    &-item{
      position:absolute;
      width:49%;
      border-radius:$radiusSize;

      .goods-item-img{
        width:100%;
      }
    }
  }
</style>
<template>
  <div class="shopping">
    <shopping-header></shopping-header>
    <div class="shopping-content">
      <div class="shopping-content-list">
        <!-- 商品 -->
        <div class="shopping-content-list-item" v-for="(item, index) in shoppingDatas" :key="index">
          <img :src="checkImg(item.isCheck)" class="shopping-content-list-item-check" @click="onGoodsCheckClick(item)" alt="">
          <img :src="item.img" class="shopping-content-list-item-img" alt="">
          <div class="shopping-content-list-item-desc">
            <p class="shopping-content-list-item-desc-name text-line-2">
              <span class="goods-item-name-direct" v-if="item.isDirect">直营</span>
              {{item.name}}
            </p>
            <div class="shopping-content-list-item-desc-data">
              <p class="shopping-content-list-item-desc-data-price">￥{{item.price}}</p>
              <!--控制组件-->
              <number-manager :defaultNumber="item.number" @onChangeNumber="onNumberChange(arguments, item, index)"></number-manager>
            </div>
          </div>
        </div>
      </div>
      <!-- 统计 -->
      <div class="shopping-content-total">
        <div class="shopping-content-total-check">
          <img :src="checkImg(totalData.isAll)" alt="" @click="onAllCheckClick">
          <p>全选</p>
        </div>
        <div class="shopping-content-total-price">
          <p class="shopping-content-total-price-total">合计：<span>￥{{totalData.totalPrice}}</span></p>
          <p class="shopping-content-total-price-all">总额：
            <span>￥{{totalData.totalPrice}}</span>
            &nbsp;&nbsp;
            立减<span>￥0.00</span>
          </p>
        </div>
        <!-- 结算 -->
        <div class="shopping-content-total-commit">
          去结算({{totalData.goodsNumber}})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingHeader from './components/Header'
import NumberManager from '@c/NumberManager'
export default {
  name:'shopping',
  components:{
    ShoppingHeader,
    NumberManager
  },
  data(){
    return {
      // 购物车商品
      shoppingDatas:this.$store.state.shoppingDatas,
      // 总计
      totalData:{
        isAll: false,
        totalPrice: 0,
        goodsNumber: 0
      }
    }
  },
  methods:{
    onNumberChange($arguments, item, index){
      let number = $arguments[0];
      this.$store.commit('changeShoppingDataNumber', {
        index: index,
        number: number
      });

      if(item.isCheck){
        this.computeGoodsTotal();
      }
    },
    // 单选 check按钮事件
    onGoodsCheckClick(item){
      item.isCheck = !item.isCheck;

      this.computeGoodsTotal();

    },
    // 全选 check
    onAllCheckClick(){
      this.totalData.isAll = !this.totalData.isAll;

      this.shoppingDatas.forEach(item => (item.isCheck = this.totalData.isAll));

      this.computeGoodsTotal();
    },
    // check图标
    checkImg(isCheck){
      return isCheck ? require('@img/check.svg') : require('@img/no-check.svg');
    },
    computeGoodsTotal(){
      this.totalData = {
        isAll: true,
        totalPrice: 0,
        goodsNumber: 0
      };
      this.shoppingDatas.forEach(item => {
        if(item.isCheck){
          this.totalData.totalPrice += parseInt(item.price) * parseInt(item.number);
          this.totalData.goodsNumber += parseInt(item.number);
        }else{
          this.totalData.isAll = false;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .shopping {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: column;

    .shopping-content {
      background-color: $bgColor;
      border-top: px2rem(1) solid $lineColor;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

      &-list {
        height: 100%;
        overflow: hidden;
        overflow-y: auto;

        &-item {
          background-color: white;
          padding: $marginSize;
          display: flex;
          border-bottom: px2rem(1) solid $lineColor;

          &-check {
            width: $checkSize;
            align-self: center;
            padding: px2rem(6);
          }

          &-img {
            width: px2rem(100);
            height: px2rem(100);
          }

          &-desc {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 $marginSize;

            &-name {
              font-size: $infoSize;
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-word;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              line-height: px2rem(18);

              &-hint {
                color: $textHintColor;
              }
            }

            &-data {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: $marginSize;

              &-price {
                font-size: $titleSize;
                color: $mainColor;
                font-weight: 500;
              }
            }
          }
        }
      }

      &-total {
        height: px2rem(56);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: white;
        border-top: px2rem(1) solid $lineColor;

        &-check {
          display: flex;
          align-items: center;
          margin-left: $marginSize;
          margin-right: $marginSize;
          img {
            width: $checkSize;
            height: $checkSize;
            padding: px2rem(6);
          }

          p {
            font-size: $infoSize;
          }
        }

        &-price {
          flex-grow: 2;
          display: flex;
          flex-direction: column;
          &-total {
            font-size: $titleSize;
            margin-bottom: px2rem(6);
            span {
              font-weight: bold;
            }
          }

          &-all {
            font-size: $minInfoSize;
            span {
              font-weight: bold;
            }
          }
        }

        &-commit {
          width: px2rem(120);
          height: 100%;
          font-size: $titleSize;
          background-color: $mainColor;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
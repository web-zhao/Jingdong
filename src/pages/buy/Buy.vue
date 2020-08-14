<template>
  <div class="buy-page">
    <buy-header></buy-header>
    <div class="buy-page-content">
      <!-- 商品 -->
      <div class="buy-page-content-goods">
        <img :src="goodsData.img" class="buy-page-content-goods-img" alt="">
        <div class="buy-page-content-goods-desc">
          <!-- 商品名称 -->
          <p class="buy-page-content-goods-desc-name">{{goodsData.name}}</p>
          <!-- 商品价格 -->
          <p class="buy-page-content-goods-desc-price">￥{{goodsData.price}}</p>
        </div>
      </div>
      <!-- 支付方式 -->
      <ul class="buy-page-content-list">
        <li 
          class="buy-page-content-list-item" 
          v-for="(item, index) in paymentDatas" 
          :key="index"
          @click="onPaymentItemClick(item)"
        >
          <img :src="item.icon" class="buy-page-content-list-item-icon" alt="">
          <div class="buy-page-content-list-item-desc">
            <p class="buy-page-content-list-item-desc-name">{{item.name}}</p>
            <p class="buy-page-content-list-item-desc-desc">{{item.desc}}</p>
          </div>
          <!-- 支付方式标记 -->
          <img :src="getCheckIcon(selectPayment.id === item.id)" class="buy-page-content-list-item-check" alt="">
        </li> 
      </ul>
    </div>
    <!-- 立即购买 -->
    <div class="pay page-commit">
      立即购买
    </div>
  </div>
</template>

<script>
import BuyHeader from './components/Header'
export default {
  name:'buy',
  components:{
    BuyHeader
  },
  data(){
    return {
      goodsData:{},
      paymentDatas:[
        {
          id:'1',
          name:'支付宝支付',
          desc:'数亿用户都在用，安全可信多',
          icon:require('@img/alipay.svg')
        },
        {
          id:'2',
          name:'微信支付',
          desc:'亿万用户选择，更快更安全',
          icon:require('@img/weichat.png')
        }
      ],
      selectPayment:{}
    }
  },
  created(){
    this.selectPayment = this.paymentDatas[0];
    this.loadGoodsData();
  },
  methods:{
    // 根据商品id获取商品数据
    loadGoodsData() {
      this.$http.get('/goodsDetail', {
        params: {
          goodsId: this.$route.query.goodsId
        }
      }).then(data => {
        this.goodsData = data.goodsData;
      });
    },
    onPaymentItemClick(item){
      this.selectPayment = item;
    },
    getCheckIcon(isCheck){
      return isCheck ? require('@img/check.svg') : require('@img/no-check.svg');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .buy-page {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color:$bgColor;

    &-content {
      overflow:hidden;
      height: 100%;

      &-goods {
        background-color:#fff;
        padding: $marginSize;
        display: flex;
        border-bottom: px2rem(1) solid $lineColor;
        border-top: px2rem(1) solid $lineColor;
        margin-top: $marginSize;
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
            line-height: px2rem(18);
          }

          &-price {
            font-size: $titleSize;
            color: $mainColor;
            font-weight: 500;
          }
        }
      }

      &-list {
        margin-top: $marginSize;
        &-item {
          display: flex;
          background-color: white;
          border-bottom: 1px solid $lineColor;
          padding: $marginSize;
          align-items: center;
          &-icon {
            height: px2rem(30);
          }

          &-desc {
            margin-left: px2rem(12);
            flex-grow: 1;
            &-name {
              font-size: $infoSize;
            }

            &-desc {
              font-size: $minInfoSize;
              margin-top: px2rem(6);
              color: $textHintColor;
            }
          }

          &-check {
            width: px2rem(16);
            height: px2rem(16);
          }
        }
      }
    }

    .pay {
      position: absolute;
      bottom: px2rem(40);
    }
  }
</style>
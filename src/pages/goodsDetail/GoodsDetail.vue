<template>
  <div class="goods-detail">
    <detail-header :isShow="isShow"></detail-header>
    <div class="goods-detail-content">
      <parallax  @onScrollChange="onScrollChange">
        <!-- 缓慢 -->
        <template v-slot:parallax-slow>
          <detail-swiper :swiperImgs="goodsData.swiperImgs"></detail-swiper>
        </template>
        <!-- 正常 -->
        <template>
          <!-- 内容 -->
          <div class="goods-detail-content-desc">
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-price">￥{{ goodsData.price }}</p>
              <p class="goods-detail-content-desc-item-name">
                <!-- 直营 -->
                <span class="goods-item-name-direct" v-if="goodsData.isDirect">直营</span>
                {{ goodsData.name }}
              </p>
            </div>

            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-select">
                已选 <span class="single-row-text">{{ goodsData.name }}</span>
              </p>
              <div class="goods-detail-content-desc-item-support">
                <ul class="goods-detail-content-desc-item-support-list">
                  <li class="goods-detail-content-desc-item-support-list-item" v-for="(item, index) in attachDatas" :key="index">
                    <img src="@img/support.svg" alt="" srcset="" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="goods-detail-content-desc-detail">
              <img v-for="(item, index) in goodsData.detailImgs" :key="index" :src="item"/>
            </div>
          </div>
        </template>
      </parallax>
    </div>
    <div class="goods-detail-buy clearfix">
      <div class="goods-detail-buy-now fr" @click="onBuyClick">
        立即购买
      </div>
      <div class="goods-detail-buy-add fr" @click="onAddGoodsClick">
        加入购物车
      </div>
    </div>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailSwiper from './components/Swiper'
import Parallax from '@c/Parallax'
export default {
  name:'goodsDetail',
  components:{
    DetailHeader,
    DetailSwiper,
    Parallax
  },
  data(){
    return {
      goodsData:{},
      attachDatas:['可配送海外', '京东发货&售后', '京准达', '211限时达', '可自提', '不可使用优惠卷'],
      isShow:false
    }
  },
  created(){
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
    // 监听页面滚动
    onScrollChange(scrollTopValue){
      let scrollValue = scrollTopValue;
      if(scrollValue > 10){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    },
    // 立即购买
    onBuyClick(){
      this.$router.push({
        name:'buy',
        params:{
          routerType: 'push'
        },
        query:{
          goodsId:this.goodsData.id
        }
      })
    },
    // 加入购物车
    onAddGoodsClick(){
      // vuex
      this.$store.commit('addShoppingData', this.goodsData);
      alert('添加成功');
      this.$router.push({
        name:'jmain',
        params:{
          routerType:'push',
          componentIndex:1,        // 标记，数据下标
          clearTask:true,
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods-detail{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    flex-flow:column;

    &-content{
      overflow:hidden;
      height:100%;

      &-desc {
        width: 100%;
        background-color: $bgColor;
        box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
        &-item {
          background-color: white;
          padding: $marginSize;
          margin-bottom: $marginSize;

          &-price {
            font-size: px2rem(20);
            color: $mainColor;
            font-weight: 500;
          }

          &-name {
            margin-top: $marginSize;
            font-size: $titleSize;
            font-weight: 500;
            line-height: px2rem(20);

            &-hint {
              color: $textHintColor;
            }

            .goods-item-name-direct{
              padding:0 px2rem(4);
              font-size:px2rem(11);
              color:#fff;
              background-color:$mainColor;
              border-radius:px2rem(2);
              margin-right:px2rem(2);
            }
          }

          &-select {
            font-size: $infoSize;
            color: $textHintColor;
            height: px2rem(44);
            display: flex;
            align-items: center;
            border-bottom: px2rem(1) solid $lineColor;

            span {
              color: $textColor;
              font-size: $titleSize;
              font-weight: bolder;
              margin-left: px2rem(4);
              width: 80%;
            }
          }

          &-support {
            margin-top: $marginSize;

            &-list {
              display: flex;
              flex-wrap: wrap;

              &-item {
                display: flex;
                align-items: center;
                padding: px2rem(6) 0;
                margin-right: $marginSize;

                img {
                  width: px2rem(12);
                  margin-right: px2rem(4);
                }

                span {
                  font-size: $minInfoSize;
                  color: $textHintColor;
                }
              }
            }
          }
        }

        &-detail {
          img {
            display:block;
            width: 100%;
          }
        }
      }
    }

    &-buy {
      background-color: #fff;
      div {
        width: px2rem(100);
        height: px2rem(46);
        line-height: px2rem(46);
        text-align: center;
        font-size: $infoSize;
        color: white;
      }

      &-add {
        background-color: $mainColor;
      }

      &-now {
        background-color: darkgoldenrod;
      }
    }
  }
</style>
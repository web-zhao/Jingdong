<template>
  <div class="goods-options z-index-2">
    <!-- 一级筛选项 -->
    <ul class="goods-options-list">
      <li class="goods-options-list-item" v-for="(item, index) in optionsDatas" :key="index">
        <a class="goods-options-list-item-content" @click="onOptionsItemClick(item)">
          <span class="goods-options-list-item-content-name" :class="{'top-active':selectOption.id === item.id}">{{item.name}}</span>
          <span 
            class="goods-options-list-item-content-caret caret" 
            v-if="item.subs.length > 0"
            :class="[isShowSubContent && selectOption.id === item.id ? 'caret-open' : 'caret-close']"
          ></span>
        </a>
      </li>
    </ul>
    <!-- 子选项 -->
    <transition name="fold-height">
      <div class="options-sub-content z-index-2" v-show="isShowSubContent">
        <ul class="options-sub-content-list">
          <li 
            class="options-sub-content-list-item"
            v-for="(item, index) in selectOption.subs"
            :key="index" 
          >
            <a href="javascript:;" class="options-sub-content-list-item-content" @click="onSubOptionsItemClick(item)">
              <span class="options-sub-content-list-item-content-name" :class="{'bottom-active':selectOption.id === item.id}">{{item.name}}</span>
              <img class="options-sub-content-list-item-content-select" src="@img/options-select.svg" v-show="selectOption.id === item.id">
            </a>
          </li>
        </ul>
      </div>
    </transition>

    <!-- 遮盖层 -->
    <div class="cover" v-show="isShowSubContent" @click="isShowSubContent = false"></div>
  </div>
</template>

<script>
export default {
  name:'goodsOption',
  data(){
    return {
      // 筛选项数据源
      optionsDatas:[
        {
          id:'1',
          name:'默认',
          subs:[
            {
              id:'1',
              name:'默认'
            },
            {
              id:'1-2',
              name:'价格由高到底'
            },
            {
              id:'1-3',
              name:'销量由高到低'
            }
          ]
        },
        {
          id:'2',
          name:'有货优先',
          subs:[]
        },
        {
          id:'3',
          name:'直营优先',
          subs:[]
        }
      ],
      // 选中的筛选项
      selectOption:{},
      // 标记子选项是否处于展开状态
      isShowSubContent:false
    }
  },
  created(){
    this.selectOption = this.optionsDatas[0];
  },
  methods:{
    // 一级选项点击事件
    onOptionsItemClick(item){
      // 判断当子选项的展开是，点击一级选项可以让他关闭（其他的一级选项也可以）
      if(this.isShowSubContent){
        this.isShowSubContent = false;
        return;
      }
      // 判断如果一级选项中存在子选项，并且为选中状态，那么展开下拉子选项
      if(item.subs.length > 0 && this.selectOption.id === item.id){
        this.isShowSubContent = true;
      }
      // 设置选中项为用户点击的item
      this.selectOption = item;
    },
    // 子选项点击事件
    onSubOptionsItemClick(item){
      // 设置选中项为用户点击的选项 item
      this.selectOption = item;
      // 将选中项置顶到一级选项
      this.optionsDatas.forEach(options => {
        options.subs.forEach(subOptions => {
          if(subOptions.id == this.selectOption.id){        
            options.id = subOptions.id;
            options.name = subOptions.name
          }
        })
      });
      // 关闭子选项视图
      this.isShowSubContent = false;
    }
  },
  watch:{
    selectOption(newV){
      this.$emit('optionsChange',newV.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods-options{
    width:100%;
    border-bottom:1px solid $lineColor;
    // 一级选项
    &-list{
      display:flex;
      width:100%;
      height:px2rem(46);
      background-color:#fff;

      &-item{
        flex:1;

        &-content{
          height:100%;
          display:flex;
          justify-content: center;
          align-items:center;

          &-name{
            font-size:$infoSize;
            margin-right:$marginSize;
            
            &.top-active{
              color:$mainColor;
            }
          }

          // 子选项展开时，三角形的动画
          &-caret {
            &.caret-open {
              transform: rotate(-180deg);
              transition: all 0.3s;
            }

            &.caret-close {
              transform: rotate(0deg);
              transition: all 0.3s;
            }
          }
        }
      }
    }

    // 子选项
    .options-sub-content{
      position:absolute;
      width:100%;
      max-height:px2rem(180);
      overflow:hidden;
      overflow-y:auto;
      background-color:#fff;

      &-list{
        &-item{
          &-content{
            display:flex;
            align-items:center;
            padding:$marginSize;
            border-top:1px solid $lineColor;
            height:px2rem(44);
            box-sizing:border-box;

            &-name{
              font-size:$infoSize;
              display:inline-block;
              flex-grow:1;

              &.bottom-active{
                color:$mainColor;
              }
            }

            &-select{
              width:px2rem(18);
              height:px2rem(18);
            }
          }
        }
      }
    }

    // 拉下动画
    .fold-height-enter-active{
      animation-duration:.3s;
      animation-name:fold-height-open;

      @keyframes fold-height-open {
        0%{
          max-height:0;
        }
        100%{
          max-height:px2rem(180);
        }
      }
    }

    .fold-height-leave-active{
      animation-duration:.3s;
      animation-name:fold-height-close;

      @keyframes fold-height-close {
        0%{
          max-height:px2rem(180);
        }
        100%{
          max-height:0;
        }
      }
    }
  }
</style>
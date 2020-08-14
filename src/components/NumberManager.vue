<template>
  <div class="number-manager">
    <span class="number-manager-less" :class="{'number-manager-disabled': number === 1}" @click="onLessClick">-</span>
    <span class="number-manager-number">{{number}}</span>
    <span class="number-manager-add" @click="onAddClick">+</span>
    <span></span>
  </div>
</template>

<script>
export default {
  name:'numberManager',
  props:{
    defaultNumber:{
      type:Number,
      default:1
    }
  },
  data(){
    return {
      number: 1
    }
  },
  methods:{
    // 减号按钮事件
    onLessClick(){
      if(this.number === 1){
        return;
      }
      this.number -= 1;
    },
    // 加号按钮事件
    onAddClick(){
      this.number += 1;
    }
  },
  watch:{
    defaultNumber(newValue){
      this.number = newValue;
      // console.log(this.number);
    },
    // 监听数量
    number(newValue){
      this.$emit('onChangeNumber', newValue);
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .number-manager {
    display: flex;
    font-size: $infoSize;
    height: px2rem(20);
    line-height: px2rem(20);
    span {
      width: px2rem(30);
      text-align: center;
      display: inline-block;
      font-weight: 500;
    }

    &-number {
      background-color: $bgColor;
      padding: 0 px2rem(4);
    }

    &-disabled {
      color: $hintColor;
    }
  }
</style>
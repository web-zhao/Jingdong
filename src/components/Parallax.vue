<template>
  <div class="parallax" @scroll="onScrollChange">
    <!-- 慢 -->
    <div class="parallax-slow" :style="{top: slowTop}">
      <slot name="parallax-slow"></slot>
    </div>
    <!-- 正常 -->
    <div class="parallax-content z-index-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'parallax',
  data(){
    return {
      SPEED_DIFF: 2,
      parallaxScroll: 0,
    }
  },
  methods:{
    onScrollChange($event){
      this.parallaxScroll = $event.target.scrollTop;
      this.$emit('onScrollChange', this.parallaxScroll);
    }
  },
  computed:{
    slowTop(){
      return (this.parallaxScroll - (this.parallaxScroll / this.SPEED_DIFF)) + 'px';
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .parallax{
    width:100%;
    height:100%;
    overflow:hidden;
    overflow-y:auto;

    &-slow{
      width:100%;
      position:relative;
    }

    &-content{
      width:100%;
      position:relative;
    }
  }
</style>
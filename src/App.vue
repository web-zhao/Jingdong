<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :include="virtualTaskStack">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      transitionName: 'fold-left',
      virtualTaskStack:[
        'jmain'
      ]
    }
  },
  watch:{
    '$route' (to, from){
      const routerType = to.params.routerType;
      if(routerType === 'push'){
        this.virtualTaskStack.push(to.name);
        this.transitionName = 'fold-left';
      }else{
        this.virtualTaskStack.pop();
        this.transitionName = 'fold-right';
        console.log(from);
      }
      if(to.params.clearTask){
        this.virtualTaskStack = ['jmain']
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@css/style.scss';
  #app{
    width:100%;
    height:100%;

    // push页面时：新页面的进入动画
    .fold-left-enter-active {
      animation-name: fold-left-in;
      animation-duration: 0.4s;
    }
    // push页面时：老页面的退出动画
    .fold-left-leave-active {
      animation-name: fold-left-out;
      animation-duration: 0.4s;
    }
    // push页面时：新页面的进入动画
    @keyframes fold-left-in {
      0% {
        transform: translate(100%, 0);
        /* visibility: visible; */
      }
      100% {
        transform: translate(0, 0);
      }
    }
    // push页面时：老页面的退出动画
    @keyframes fold-left-out {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-100%, 0);
        /* visibility: hidden; */
      }
    }

    // 后退页面时：即将展示的页面动画
    .fold-right-enter-active {
      animation-name: fold-right-in;
      animation-duration: 0.4s;
    }
    // 后退页面时：后退的页面执行的动画
    .fold-right-leave-active {
      animation-name: fold-right-out;
      animation-duration: 0.4s;
    }
    // 后退页面时：即将展示的页面动画
    @keyframes fold-right-in {
      0% {
        width: 100%;
        transform: translate(-100%, 0);
        /* visibility: visible; */
      }
      100% {
        width: 100%;
        transform: translate(0, 0);
      }
    }
    // 后退页面时：后退的页面执行的动画
    @keyframes fold-right-out {
      0% {
        width: 100%;
        transform: translate(0, 0);
      }
      100% {
        width: 100%;
        transform: translate(100%, 0);
        /* visibility: hidden; */
      }
    }
  }
</style>

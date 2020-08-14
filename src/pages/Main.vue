<template>
  <div class="main">
    <keep-alive>
      <!-- 动态组件 -->
      <components :is="isComponent"></components>
    </keep-alive>
    <tool-bar ref="toolBar" @onChangeFragment="onChangeFragment"></tool-bar>
  </div>
</template>

<script>
import ToolBar from '@c/ToolBar';
// import Home from '@p/home/Home';
// import Shopping from '@p/shopping/Shopping';
// import My from '@p/my/My';
export default {
  name: 'jmain',
  components: {
    ToolBar,
    // home: Home,
    // shopping: Shopping,
    // my: My
    Home: () => import('@p/home/Home'),
    Shopping: () => import('@p/shopping/Shopping'),
    My: () => import('@p/my/My')
  },
  data(){
    return {
      // 默认为Home组件
      isComponent:'home'
    }
  },
  activated(){
    // keepalive激活调用指定加载页面方法
    this.pushFragment();
  },
  methods:{
    // 动态组件的切换
    onChangeFragment(componentName){
      this.isComponent = componentName;
    },
    // 指定加载页面组件
    pushFragment(){
      let componentIndex = this.$route.params.componentIndex;
      if(componentIndex === undefined) return;
      // 切换组件
      this.$refs.toolBar.pushFragment(componentIndex);
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    position:absolute;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
  }
</style>
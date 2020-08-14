import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    // 购物车
    shoppingDatas:[],
  },
  mutations:{
    addShoppingData(state, goods){
      // 判断商品重复性
      const isExist = state.shoppingDatas.some(item => {
        if(item.id === goods.id){
          item.number += 1;
          return true;
        }
      });
      if(!isExist){
        Vue.set(goods, 'isCheck', false);
        Vue.set(goods, 'number', 1);
        state.shoppingDatas.push(goods);
      }
    },
    changeShoppingDataNumber(state, data){
      state.shoppingDatas[data.index].number = data.number;
    }
  },
  actions:{}
})
// vuex/modules/goods.js
import {
  CHANGE_STYLE,
  CHANGE_PRICE,
  ADD_ITEM,
  REMOVE_ITEM
} from '../mutation-types'


// 该模块的初始状态
const state = {
  goods:{
    name:"婴儿背带腰凳结合体可拆卸3D网布透气款",
    price:'',
    isSelected:true,
    style:{
      '粉色':'',
      '黑色':'',
      '黄色':''
    },
    storage:{
      'S':100,
      'M':110,
      'L':120
    }
  },

  cart:[]
}
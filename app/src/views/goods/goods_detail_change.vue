<template>
    <div class="ui-dialog cart-change-dialog" :class="{show : cartchange.show}">
        <div class="cart-dialog-wrap">
            <ul class="ui-list ui-list-text">
                <li>
                    <i class="cart-dialog-close" @click="close"></i>
                    <div class="ui-avatar">
                        <img :src="goods" alt="" width="70px" height="70px">
                    </div>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap">{{goods.name}}</h4>
                        <p>库存<i>8</i>件</p>
                        <p>已选："<i>{{demo1}}</i>","<i>{{demo2}}</i>"</p>
                    </div>
                    <div class="ui-list-action">
                        <div class="cart-c">
                            <h4 class="ui-list-price">¥95.00</h4>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="cart-dialog-style">
                <h4>颜色</h4>
                <checker :value.sync="demo1" default-item-class="demo-item" selected-item-class="demo-item-selected" disabled-item-class="demo-item-disabled">
                      <checker-item value="粉色">粉色</checker-item>
                      <checker-item value="黄色">黄色</checker-item>
                      <checker-item value="黑色" disabled>黑色</checker-item>
                </checker>
                <h4>尺码</h4>
                <checker :value.sync="demo2" default-item-class="demo-item" selected-item-class="demo-item-selected" disabled-item-class="demo-item-disabled">
                      <checker-item value="S">S</checker-item>
                      <checker-item value="M">M</checker-item>
                      <checker-item value="L" disabled>L</checker-item>
                </checker>
                <h4>数量</h4>
                <div class="cart-quantity">
                    <x-number :value=1 :min=1 :max=10 @on-change="change"></x-number>
                </div>
            </div>
            
            <button class="ui-btn-lg ui-btn-red" type="submit" id="btn_sure" @click="postCartEvent">确定</button>

        </div>        
    </div>
    
    <!--提示组件-->
    <toast :show.sync="show" :text.sync="text" :time="1000" type="text"></toast>

</template>
<script>

    //加载公用小组件
    import Toast from '../../components/toast'
    import XNumber from '../../components/x-number'
    import { Checker, CheckerItem} from 'vux/src/components/checker'
    import { changePrice, changeStyle, addItem } from '../../vuex/actions'



    export default {
        props:{
          cartchange: {
            type: Object,
            default () {
              return {
                show:false,
              }
            }
          }
        },

        vuex:{
            getters:{
                goods:({index}) => index.goods
            },
            actions:{
                changePrice,
                changeStyle,
                addItem
            }
        },

        data () {
            return {
                show:false,
                text:'',
                //图片路径
                //goods:require('../../assets/images/goods-detail/goods.jpg'),
                //demo1: '粉色',
                //demo2:'S'
            };
        },
        components :{
            Toast,
            Checker,
            CheckerItem,
            XNumber,
        },
        methods : {
            close (){
                this.cartchange.show = false
            },
            createToast (text) {
              this.show = true
              this.text = text
            },
            postCartEvent (){
                this.createToast('添加购物车成功')
            },
            change (val) {
              console.log('change', val)
            }
        }
    };
</script>
<style scoped>
.checker-popup {
  background: rgba(255,255,255,0.5);
}
.demo-item {
  border: 1px solid #a8a8a8;
  padding: 5px 15px;
  margin-bottom: 5px;
}
.demo-item-selected {
  border: 1px solid #ff0066;
}
.demo-item-disabled {
  border: 1px solid #ccc;
  color: #ccc;
}
</style>
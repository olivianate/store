<template>
    <div class="ui-dialog cart-change-dialog" :class="{show : cartadd.show}">
        <div class="cart-dialog-wrap">
            <ul class="ui-list ui-list-text">
                <li>
                    <i class="cart-dialog-close" @click="close"></i>
                    <div class="ui-avatar">
                        <img :src="goods" alt="" width="70px" height="70px">
                    </div>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                        <p>库存<i>8</i>件</p>
                        <p>已选："<i>粉色</i>","<i>S</i>"</p>
                    </div>
                    <div class="ui-list-action">
                        <div class="cart-c">
                            <h4 class="ui-list-price">¥95.00</h4>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="cart-dialog-style">
                <h5>颜色</h5>
                <p><a class="ui-btn btn-ychose-active">粉色</a><a class="ui-btn btn-ychose-default">黄色</a><a class="ui-btn btn-ychose-disable">黑色</a></p>
                <h5>尺码</h5>
                <p><a class="ui-btn btn-ychose-active">S</a><a class="ui-btn btn-ychose-default">M</a></p>
            </div>
            
            <button class="ui-btn-lg ui-btn-red" type="submit" id="btn_sure" @click="postCart">确定</button>
        </div>        
    </div>
</template>
<script>
    export default {
        props:{
          cartadd: {
            type: Object,
            default () {
              return {
                show:false,
              }
            }
          }
        },
        data () {
            return {
                //图片路径
                goods:require('../../assets/images/goods-detail/goods.jpg'),
            };
        },
        methods : {
            close (){
                this.cartadd.show = false
            },
            postCart (){
                
            }
        }
    };
</script>

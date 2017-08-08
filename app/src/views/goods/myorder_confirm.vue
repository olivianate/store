<template>
    <header class="ui-header">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>确认订单</h1>
    </header>
    
    <section class="ui-container myorder myorder_confirm">
        <ul class="ui-list ui-list-link myorder_address" id="myorder_address">
            <li v-link="{name:'address'}">
                <div class="ui-avatar">
                    <h4 class="ui-nowrap">李小小</h4>
                    <p>[默认]</p>
                </div>
                <div class="ui-list-info ui-border-t">
                    <h4 class="ui-nowrap">12345678901</h4>
                    <p class="ui-nowrap">杭州市滨江区</p>
                </div>
            </li>
        </ul>
        <div class="list-item">
                <h4 class="list-item-title"><i class="ui-icon ui-icon-house"></i>购物商城商城</h4>
                <ul class="ui-list ui-list-text ui-border-tb">
                    <li>
                        <div class="ui-avatar">
                            <img :src="goods" alt="" width="70px" height="70px">
                        </div>
                        <div class="ui-list-info">
                            <h4 class="ui-nowrap-multi ui-nowrap-mar10">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                            <p class="ui-nowrap">颜色：粉红  尺码：M</p>
                        </div>
                        
                        <div class="ui-list-action">
                            <h2 class="ui-list-price ui-txt-default">¥95.00</h2>
                            <a class="y-servie-link"></a>
                            <p class="ui-nowrap text-right">×1</p>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="ui-form">
            <div class="ui-form-item">
                <label>优惠信息</label>
                <div class="ui-select">
                    <select>
                        <option>省8元：双十一</option>
                        <option selected="">省8元：双十一</option>
                        <option>省8元：双十一</option>
                    </select>
                </div>
            </div>
            <ul class="ui-list ui-list-text">
                <li>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap">商品总价：</h4>
                    </div>
                    <span class="ui-txt-default">¥95</span>
                </li>
                <li>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap">优惠金额：</h4>
                    </div>
                    <span class="ui-txt-default">-¥8</span>
                </li>
                <li>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap">运费：</h4>
                    </div>
                    <span class="ui-txt-default">¥6</span>
                </li>
                <li>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap">税费：</h4>
                    </div>
                    <span class="ui-txt-default">¥18</span>
                </li>
                <li>
                    <div class="ui-list-info">
                        <h4 class="ui-nowrap">应付金额：</h4>
                    </div>
                    <span class="ui-txt-default">¥111</span>
                </li>
            </ul>
        </div>
        <div class="ui-form-item ui-form-item-switch position-fixed">
            <p>您一共有2000麻豆，可用600麻豆抵扣6元</p>
            <label class="ui-switch">
                <input type="checkbox">
            </label>
        </div>
    </section><!-- /.ui-container-->
    <footer class="ui-footer">
        <div class="ui-list-info">
            <h4 class="text-left">合计：<span class="title-id">¥<i>105</i></span> <span class="">共<i>1</i>件</span></h4>
        </div>
        <div class="ui-nowrap"><a class="btn-footer-default btn-b-red" v-link="{ name:'myorderPay'}">提交订单</a></div>
    </footer>
</template>
<script>
    export default {
        data(){
            return {
                //图片路径
               goods:require('../../assets/images/goods-detail/goods.jpg')
            }
        },
        ready () {
        },
        methods :{
            getAjax () {
            }
        }
    }
</script>


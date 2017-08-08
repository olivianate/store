<template>
    <header class="ui-header">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>订单详情</h1>
    </header>
    <section class="ui-container myorder myorder_confirm">
        <div class="myorder-status-ban">
            <img :src="orderPay">
            <p>等待买家付款<br>剩余23小时自动关闭</p>
        </div>
        <div class="list-item">
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
            <h4 class="list-item-title">备注：要生产日期新鲜的</h4>
        </div>
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
                        <p><del>¥115.00</del></p>
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
        <div class="list-item">
            <p class="list-item-title">麻豆：返麻豆28个</p>
            <ul class="ui-list ui-list-text ui-tiled ui-border-tb">
                <li>
                    <h6 class="btn-copy">微信：13666666666</h6>
                    <h6 class="btn-copy">手机：13666666666<a>拨打</a></h6>
                </li>
            </ul>
        </div>
        <div class="list-item ui-form">
            <ul class="ui-list ui-list-text">
                <li class="ui-border-t">
                    <p>订单编号：2016712456789</p>
                </li>
                <li class="ui-border-t">
                    <p>创建时间：<span class="date">2016-07-14 20:18:50</span></p>
                </li>
            </ul>
        </div>
    </section>
    <footer class="ui-footer">
            <div class="ui-row-flex text-center">
                <div class="ui-col ui-col ui-nowrap-flex order-price">合计：<span class="red">¥10005</span></div>
                <div class="ui-col ui-col"><a class="btn-group-default" v-link="{name:'myorder'}">取消订单</a></div>
                <div class="ui-col ui-col"><a class="btn-group-default btn-group-red" v-link="{name:'myorderPay'}">立即支付</a></div>
            </div>
    </footer>
</template>
<script>
    export default {
        data () {
            return {
                //图片路径
               goods:require('../../assets/images/goods.jpg'),
               orderPay:require('../../assets/images/order-pay.png'),
            };
        },
        ready (){
        }
    };
</script>
<style scoped>
    .order-price {
        height: 100%;
        vertical-align: middle;
        display: block;
        line-height: 50px;
        text-align: left;
        margin-left: 5px;
    }
</style>

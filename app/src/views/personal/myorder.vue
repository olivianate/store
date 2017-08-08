<template>
    <header class="ui-header">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>我的订单</h1>
    </header>
    <section class="ui-container myorder">
        <ul class="ui-tab-nav ui-border-b ui-tab-fixed">
            <li class="current">全部</li>
            <li class="">待付款</li>
            <li class="">待发货</li>
            <li class="">待收货</li>
            <li class="">已取消</li>
        </ul>
        <div class="list-item">
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-list-info">
                        <h4>订单号：<span class="title-id">18234568747</span></h4>
                    </div>
                    <div class="red">等待买家付款</div>
                </li>
            </ul>
                <ul class="ui-list ui-list-text ui-border-tb">
                    <li>
                        <div class="ui-avatar" v-link="{ name :'myorderStatusPay'}">
                            <img :src="goods" alt="" width="70px" height="70px">
                        </div>
                        <div class="ui-list-info" v-link="{ name :'myorderStatusPay'}">
                            <h4 class="ui-nowrap-multi">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                            <p class="ui-nowrap">颜色：粉红  尺码：M</p>
                        </div>
                        
                        <div class="ui-list-action">
                            <h4 class="ui-list-price">¥95.00</h4>
                            <a class="y-servie-link"></a>
                            <p class="ui-nowrap">×1</p>
                        </div>
                    </li>
                    <li><h4 class="text-right">共1件商品  合计：¥100.00（含运费¥5.00）</h4></li>
                    <li>
                        <div class="text-right">
                            <a class="btn-b-default">取消订单</a><a class="btn-b-default btn-b-red" v-link="{name :'myorderPay'}">去付款</a>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="list-item">
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-list-info">
                        <h4>订单号：<span class="title-id">18234568747</span></h4>
                    </div>
                    <div class="ui-nowrap"><h4>等待卖家发货</h4></div>
                </li>
            </ul>
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-avatar" v-link="{ name :'myorderStatus'}">
                        <img :src="goods" alt="" width="70px" height="70px">
                    </div>
                    <div class="ui-list-info" v-link="{ name :'myorderStatus'}">
                        <h4 class="ui-nowrap-multi">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                        <p class="ui-nowrap">颜色：粉红  尺码：M</p>
                    </div>
                    <div class="ui-list-action">
                        <h4 class="ui-list-price">¥95.00</h4>
                        <a class="y-servie-link"></a>
                        <p class="ui-nowrap">×1</p>
                    </div>
                </li>
                <li><h4 class="text-right">共1件商品  合计：¥100.00（含运费¥5.00）</h4></li>
            </ul>
        </div>
        <div class="list-item">
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-list-info">
                        <h4>订单号：<span class="title-id">18234568747</span></h4>
                    </div>
                    <div class="ui-nowrap"><h4>卖家已发货</h4></div>
                </li>
            </ul>
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-avatar" v-link="{ name :'myorderStatusTake'}">
                        <img :src="goods" alt="" width="70px" height="70px">
                    </div>
                    <div class="ui-list-info" v-link="{ name :'myorderStatusTake'}">
                        <h4 class="ui-nowrap-multi">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                        <p class="ui-nowrap">颜色：粉红  尺码：M</p>
                    </div>
                    
                    <div class="ui-list-action">
                        <h4 class="ui-list-price">¥95.00</h4>
                        <a class="y-servie-link" v-link="{ name:'service'}">申请售后</a>
                        <p class="ui-nowrap">×1</p>
                    </div>
                </li>
                <li><h4 class="text-right">共1件商品  合计：¥100.00（含运费¥5.00）</h4></li>
                <li>
                    <div class="text-right">
                        <a class="btn-b-default" v-link="{name:'logistical'}">查看物流</a><a class="btn-b-default btn-b-red">确认收货</a>
                    </div>
                </li>
            </ul>
        </div>

        <div class="list-item">
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-list-info">
                        <h4>订单号：<span class="title-id">18234568747</span></h4>
                    </div>
                    <div class="ui-nowrap"><h4>交易成功</h4></div>
                </li>
            </ul>
                <ul class="ui-list ui-list-text ui-border-tb">
                    <li>
                        <div class="ui-avatar">
                            <img :src="goods" alt="" width="70px" height="70px">
                        </div>
                        <div class="ui-list-info">
                            <h4 class="ui-nowrap-multi">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                            <p class="ui-nowrap">颜色：粉红  尺码：M</p>
                        </div>
                        
                        <div class="ui-list-action">
                            <h4 class="ui-list-price">¥95.00</h4>
                            <a class="y-servie-link"></a>
                            <p class="ui-nowrap">×1</p>
                        </div>
                    </li>
                    <li><h4 class="text-right">共1件商品  合计：¥100.00（含运费¥5.00）</h4></li>
                </ul>
        </div>
        <div class="list-item">
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-list-info">
                        <h4>订单号：<span class="title-id">18234568747</span></h4>
                    </div>
                    <div class="ui-nowrap"><h4>交易成功</h4></div>
                </li>
            </ul>
                <ul class="ui-list ui-list-text ui-border-tb">
                    <li>
                        <div class="ui-avatar">
                            <img :src="goods" alt="" width="70px" height="70px">
                        </div>
                        <div class="ui-list-info">
                            <h4 class="ui-nowrap-multi">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                            <p class="ui-nowrap">颜色：粉红  尺码：M</p>
                        </div>
                        
                        <div class="ui-list-action">
                            <h4 class="ui-list-price">¥95.00</h4>
                            <a class="y-servie-link"></a>
                            <p class="ui-nowrap">×1</p>
                        </div>
                    </li>
                    <li><h4 class="text-right">共1件商品  合计：¥100.00（含运费¥5.00）</h4></li>
                </ul>
        </div>
        
        <div class="list-item">
            <ul class="ui-list ui-list-text ui-border-tb">
                <li>
                    <div class="ui-list-info">
                        <h4>订单号：<span class="title-id">18234568747</span></h4>
                    </div>
                    <div class="ui-nowrap"><h4>交易关闭</h4></div>
                </li>
            </ul>
                <ul class="ui-list ui-list-text ui-border-tb">
                    <li>
                        <div class="ui-avatar">
                            <img :src="goods" alt="" width="70px" height="70px">
                        </div>
                        <div class="ui-list-info">
                            <h4 class="ui-nowrap-multi">嗨皮熊5合1婴儿背带腰凳结合体可拆卸3D网布透气款802</h4>
                            <p class="ui-nowrap">颜色：粉红  尺码：M</p>
                        </div>
                        
                        <div class="ui-list-action">
                            <h4 class="ui-list-price">¥95.00</h4>
                            <a class="y-servie-link"></a>
                            <p class="ui-nowrap">×1</p>
                        </div>
                    </li>
                    <li><h4 class="text-right">共1件商品  合计：¥100.00（含运费¥5.00）</h4></li>
                </ul>
        </div>
    </section>
</template>
<script>
    export default {
        data () {
            return {
                //图片路径
               goods:require('../../assets/images/goods.jpg'),
            };
        },
        ready () {
        },
        methods :{
        }
    };
</script>
<style scoped>
    .myorder{
        margin-top: 46px;
    }
</style>

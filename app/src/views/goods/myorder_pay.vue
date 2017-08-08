<template>  
    <div class="myorder_pay">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>支付方式</h1>
        </header>
        <section class="ui-container">
            <ul class="ui-list ui-list-text">
                <li class="ui-txt-default">
                    <div class="ui-list-info ui-border-t">
                        <h2 class="ui-nowrap">糯米妈妈母婴店</h2>
                    </div>
                    <h2>总计¥101</h2>
                </li>
            </ul>
            <div class="pay-list">
                <h5>支付方式</h5>
                <div class="pay-list-item selected">
                    <div class="ui-row-flex">
                        <div class="ui-col ui-col-1">
                            <img :src="iconpayzf" alt="" width="32" height="32">
                        </div>
                        <div class="ui-col ui-col-1"><h5>支付宝</h5></div>
                        <div class="ui-col ui-col-2"><h5>推荐有支付宝用户</h5></div>
                    </div>
                </div>
                <div class="pay-list-item">
                    <div class="ui-row-flex">
                        <div class="ui-col ui-col-1">
                            <img :src="iconpaywx" alt="" width="32" height="32">
                        </div>
                        <div class="ui-col ui-col-1"><h5>微信支付</h5></div>
                        <div class="ui-col ui-col-2"><h5>微信快捷支付</h5></div>
                    </div>
                </div>
            </div>
        </section><!-- /.ui-container-->
        <div class="footer">
            <button class="ui-btn-lg ui-btn-red" type="submit">确认支付</button>
        </div>
    </div>
</template>  
<script>
    export default {
        data(){
            return{
                //图片路径
               iconpayzf:require('../../assets/images/icon-pay-zf.png'),
               iconpaywx:require('../../assets/images/icon-pay-wx.png'),
            }
        }
    }
</script>
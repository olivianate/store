<template>
    <div class="service_body3">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>协商退货退款</h1>
        </header>
        <ul class="ser_list">
            <li>
                <h4>买家用户名</h4>
                <span class="ser_list_time">2016-09-10 10:20:20</span>
                <div class="ser_list_item_mai">
                    <span class="ser_arrow"></span>
                    <p class="ser_item_title">买家发起了申请</p>
                    <p class="ser_item_content">发起了退货退款申请，货物状态：已发货，原因：不想要，金额：186.00元。</p>
                </div>
            </li>
             <li>
                <h4>购物商城系统</h4>
                <span class="ser_list_time">2016-09-11 11:20:20</span>
                <div class="ser_list_item_mai ser_list_item_xitong">
                    <span class="ser_arrow"></span>
                    <p class="ser_item_title">同意退货</p>
                    <div class="ser_item_content ser_item_xitong">
                        退货地址：杭州滨江区长河路（xx 收）12345678910。<br>卖家说明：好吧，大家都不容易，那就给你退了吧。<br><br>温馨提示：未经卖家同意，请不要使用到付或平邮。<br><br>交易的钱款还在购物商城中间账户，确保您资金安全，退货完成后，请点击“退货”填写物流信息，逾期未填写，申请将关闭。
                    </div>
                    <p class="ser_item_num">编号：2016071615879625</p>
                </div>
            </li>
            <li>
                <h4>买家用户名</h4>
                <span class="ser_list_time">2016-09-14 11:20:20</span>
                <div class="ser_list_item_mai">
                    <span class="ser_arrow"></span>
                    <p class="ser_item_title">买家发起了申请</p>
                    <p class="ser_item_content">买家已经退货，物流公司：顺丰快递，退货单号：160000000000，退货说明：尺码不合适</p>
                </div>
            </li>
            <li>
                <h4>购物商城系统</h4>
                <span class="ser_list_time">2016-09-16 11:20:20</span>
                <div class="ser_list_item_mai ser_list_item_xitong">
                    <span class="ser_arrow"></span>
                    <p class="ser_item_title">退款成功</p>
                    <div class="ser_item_content ser_item_xitong">
                        系统已将186.00元退回至您的账户，请注意查收，感谢您对我们的支持，欢迎再次光临，谢谢
                    </div>
                    <div class="ser_item_content ser_item_xitong ser_item_price">
                        退款金额：186.00元
                    </div>
                    <p class="ser_item_num">编号：2016071615879625</p>
                </div>
            </li>
        </ul>
        <footer>
            <ul>
                <li>查看钱款</li>
            </ul>
        </footer>
    </div>
</template>
<script>

    export default {
        data (){
            return {
            }
        },
        ready (){
        },
        components :{
            
        },
        methods :{
        }
    }
</script>

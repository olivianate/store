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
                    <p class="ser_item_title">
                        请退货
                        <span class="ser_list_title_time">
                            剩
                            <span>03</span>天
                            <span>12</span>时
                            <span>25</span>分
                        </span>
                    </p>
                    <div class="ser_item_content ser_item_xitong">
                        退货地址：杭州滨江区（XX 收）12345678910。<br>卖家说明：好吧，大家都不容易，那就给你退了吧。<br><br>温馨提示：未经卖家同意，请不要使用到付或平邮。<br><br>交易的钱款还在购物商城中间账户，确保您资金安全，退货完成后，请点击“退货”填写物流信息，逾期未填写，申请将关闭。
                    </div>
                    <p class="ser_item_num">编号：2016071615879625</p>
                </div>
            </li>

            <!-- 客服介入 -->
            <negotiation-customer :show="customer.show"></negotiation-customer>

        </ul>
        <footer>
            <ul>
                <li v-link="{name:'logistics'}">退货</li>
                <li>撤销申请</li>
                <li class="ser_cus" @click="customerService" :class="{ 'disabled' : customer.show}">{{customer.text}}</li>
            </ul>
        </footer>
    </div>
</template>
<script>
    //加载局部业务组件
    import NegotiationCustomer from './negotiation_customer'

    export default {
        data (){
            return {
                customer:{
                    show:false,
                    text:'申请客服介入'
                }
            }
        },
        ready (){
        },
        components :{
            NegotiationCustomer
        },
        methods :{
            customerService (){
                if (!this.customer.show){
                    this.customer.show = !this.customer.show
                    this.customer.text = '已申请介入'
                }
                
            }
        }
    }
</script>

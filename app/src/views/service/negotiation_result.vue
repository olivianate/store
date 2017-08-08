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
                    <h5 class="ser_item_title">买家发起了申请</h5>
                    <p class="ser_item_content">发起了仅退款申请，货物状态：未发货，原因：不想要，金额：186.00元。</p>
                </div>
            </li>
            <li>
                <h4>购物商城系统</h4>
                <span class="ser_list_time">2016-09-10 10:20:21</span>
                <div class="ser_list_item_mai ser_list_item_xitong">
                    <span class="ser_arrow"></span>
                    <p class="ser_item_title">等待卖家处理</p>
                    <div class="ser_item_content ser_item_xitong">
                        买家发起了售后申请，需要卖家处理<br>
                        卖家在<span style="background-color:#962f52">06</span>天<span style="background-color:#962f52">23</span>时<span style="background-color:#962f52">59</span>分内未响应，退货申请将自动确认<br>
                    </div>
                    <p class="ser_item_num">编号：2016071615879625</p>
                </div>
            </li>

            <!-- 客服介入 -->
            <negotiation-customer :show="customer.show"></negotiation-customer>

        </ul>
        <footer>
            <ul>
                <li class="disabled">等待卖家处理</li>
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
                    this.customer.text = '客服已介入'
                }
                
            }
        }
    }
</script>

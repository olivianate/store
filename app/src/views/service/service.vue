<template>
    <div class="service_body">
    <header class="ui-header">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>服务选择</h1>
    </header>
    <ul class="libox">
        <a v-link="{ name: 'returnRefund' }">
            <li class="tuihuan">
                <i></i>
                <p class="ser-title">退货退款</p>
                <p>已收到货，需要退还已收到的货物</p>
            </li>
        </a>
        <a v-link="{ name: 'returnRefund' }">
            <li class="tui">
                <i></i>
                <p class="ser-title">仅退款</p>
                <p>未收到货，或与卖家达成退款协议</p>
            </li>
        </a>
        <a v-link="{ name: 'exchange', params: { dataId:0 } }">
            <li class="huan">
                <i></i>
                <p class="ser-title">换货</p>
                <p>对已收到的货不满意，联系卖家协商换货</p>
            </li>
        </a>
        <a v-link="{ name: 'exchange', params: { dataId:1 } }">
            <li class="xiu">
                <i></i>
                <p class="ser-title">维修</p>
                <p>商品存在质量问题，联系卖家协商维修</p>
            </li>
        </a>
    </ul>
    </div>
</template>
<script>
    export default {
        ready () {
        },
        methods : {
        }
    }
</script>


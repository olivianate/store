<template>
	<menu :count="count"></menu>
	<div class="personal_body">
		<div class="per-top">
	        <img :src="personTop">
	        <div class="per-head">
	            <div class="per-head-in">
	                <img :src="personHead">
	            </div>
	            <p class="per-username">用户名或Id</p>
	        </div>
	        <div class="setting">
	            <a><img :src="personIcon"></a>
	        </div>
	    </div>
	    <ul class="per-libox">
            <li class="per-ed"><i></i>已买到的货品<span v-link="{ name: 'myorder'}">全部订单</span></li>
            <li class="per-li-libox">
                <ul class="clearfix">
                    <li><p>待付款</p></li>
                    <li><p>待发货</p></li>
                    <li><p>待收货</p></li>
                    <li><p>退款/售后</p></li>
                </ul>
            </li>
            <li class="per-collection">
                <i></i>
                我的收藏
            </li>
            <li class="per-msg" v-link="{ name: 'coupon'}">
                <i></i>
                优惠信息
            </li>
            <li class="per-address" v-link="{ name: 'address'}">
                <i></i>
                收货地址
            </li>
            <li class="per-tj">
                <i></i>
                推荐有奖
            </li>
            <li class="per-service">
                <i></i>
                服务中心
            </li>
	    </ul>
	</div>
</template>
<script>
import menu from '../../components/menu'

    export default {
    	data () {
    		return {
    			//图片路径
    			personTop:require('../../assets/images/personal/top.jpg'),
    			personHead:require('../../assets/images/personal/head.jpg'),
    			personIcon:require('../../assets/images/personal/ico_sz@2x.png'),
    			count:3,
    		};
    	},
        components:{
        	menu
        },
        ready (){
        },
        methods :{
        }
    };
</script>


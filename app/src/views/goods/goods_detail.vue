<template>
    <div class="gd_body">
        <div class="top">

            <!--vux轮播组件-->
            <swiper :list="list" :aspect-ratio="1/1" dots-position="center"></swiper>

            <a onclick="history.back()"><img class="prev" :src="prev"></a>
            <a><img class="share" :src="share"></a>
        </div>

        <div class="content">
            <h3 class="ui-nowrap-multi">ESTĒE LAUDER 雅诗兰黛 密集修护肌透面膜 4片装雅诗兰黛 密集修护肌透面雅诗兰黛 密集修护肌透面雅诗兰黛 密集修护肌透面</h3>
            <p>单价低至：<span class='red'>419.00</span><span class="c_right">市场价：<span>680</span></span></p>
            <p>运费：10.00 <span class="c_mid">已售200件</span><span class="c_right">发货地：浙江杭州</span></p>
            <a><p class="pick" @click="cartChangeShow">选择 规格</p></a>
        </div>
        <div class="detail">
            <h3>宝贝详情</h3>
            <img :src="goods_detail">
        </div>
        <div class="gd_footer">
            <a><div class="collect" @click="contactShow">卖家</div></a>
            <div class="shopping_cart" v-link="{name:'cart'}">购物车<i>2</i></div>
            <a><div class="to_shoppoing" @click="cartChangeShow">加入购物车</div></a>
            <a v-link="{name:'myorderConfirm'}"><div class="buy">立即购买</div></a>
        </div>


        <!--猜你喜欢组件-->
        <goods-prefer-module></goods-prefer-module>
        
        <!--加入购物车组件-->
        <goods-detail-change-module :cartchange='cartchange'></goods-detail-change-module>

        <!--店主联系方式组件-->
        <contact-code-module :contact='contact'></contact-code-module>   
        
    </div>
</template>
<script>

    //加载公用小组件
    import Swiper from 'vux/src/components/swiper'

    //加载局部业务组件
    import GoodsPreferModule from './goods_prefer'
    import GoodsDetailChangeModule from './goods_detail_change'
    import ContactCodeModule from './contact_code'


    export default {
        data () {
            return {
                cartadd:{
                    show:false,
                },
                cartchange:{
                    show:false,
                },
                contact:{
                    show:false,
                },
                //图片路径
               goods:require('../../assets/images/goods-detail/goods.jpg'),
               goods_detail:require('../../assets/images/goods-detail/goods-detail.jpg'),
               prev:require('../../assets/images/goods-detail/prev.png'),
               share:require('../../assets/images/goods-detail/share.png'),
               list: []
            };
        },
        components:{
            Swiper,GoodsPreferModule,GoodsDetailChangeModule,ContactCodeModule
        },
        created () {
            this.getBanner ()
        },
        ready (){
        },
        methods : {
            cartChange (){
                this.cartadd.show = true
            },
            cartChangeShow (){
                this.cartchange.show = true
            },
            contactShow (){
                this.contact.show = true
            },
            getAjax (){
            },
            getBanner (){
                this.$http.get('banner.json')
                .then(response => {
                    let json = response.data
                    let result = json.data
                    this.list = result
                })
                .catch(err => {
                    console.log(err)
                })

            }
        }
    };
</script>

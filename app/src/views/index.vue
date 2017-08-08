<template>

    <!--导航组件-->
    <menu-module :count="count"></menu-module>

    <div class="index_body" id="index_body">
        <header>
            <img class="header_img" :src="header_img">
            <div class="header_msg">
                <h3>糯米妈妈母婴店</h3>
                <p>公告：首次消费顾客送20抵用券，全场通用。</p>
                <span class="header_line"></span>
                <div class="header_head">
                    <img :src="header_head"></div>
                <div class="collect" :class="{ active: isA }" @click="collect"></div>
            </div>
        </header>
        <!--首页活动组件-->
        <activity-module></activity-module>
        <!--商品列表组件-->
        <goodslist-module :show="show"></goodslist-module>
    </div>
</template>
<script>

    //加载局部业务组件
    import MenuModule from '../components/menu'
    import ActivityModule from './home/home_activity'//活动组件
    import GoodslistModule from './home/goodslist'//商品列表组件

    export default {
        data () {
            return {
                show:false,//是否出现tab
                //图片路径
                header_img:require('../assets/images/index/header.jpg'),
                header_head:require('../assets/images/index/head.jpg'),
                banner_img:require('../assets/images/index/top.jpg'),
                isA:false,
                count:0,//menu选中状态
            };
        },
        components:{
            MenuModule,ActivityModule,GoodslistModule
        },
        ready(){

            let self = this;
            window.onscroll = function(){
                self.onscrollWrap();
            };

        },
        created (){
            this.getAjax()
        },
        methods : {
            collect (){
                this.isA = !this.isA;
            },
            onscrollWrap (){//页面滚动到一定位置
                let tabTop=document.getElementById('wrap').offsetTop
                let winTop = document.body.scrollTop

                this.show = (tabTop<winTop+150) ?true:false

            },
            getAjax (){
                
            }
        },
        destroyed (){
            window.onscroll = null;
        }
    };
</script>
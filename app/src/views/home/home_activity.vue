<template>

    <!--轮播组件-->
    <swiper :list="list" :loop="true" dots-position="center" auto></swiper>
        
    <div class="banner" v-for="item in banner">
        <a v-link="{name:'activity'}"><img :src="item.img"></a>
    </div>

</template>
<script>
    //加载公用组件
    import Swiper from 'vux/src/components/swiper'

    export default {
        data () {
            return {
                list: [{
                    url: 'http://192.168.1.14:85/#!/activity',
                    img: require('../../assets/images/index/top.jpg'),
                  }, {
                    url: 'http://192.168.1.14:85/#!/activity',
                    img: require('../../assets/images/index/1.jpg'),
                  }, {
                    url: 'http://192.168.1.14:85/#!/activity',
                    img: require('../../assets/images/index/2.jpg'),
                  }],
                  banner:[{
                    url:'',
                    img:require('../../assets/images/index/1.jpg')
                  },{
                    url:'',
                    img:require('../../assets/images/index/2.jpg')
                  },{
                    url:'',
                    img:require('../../assets/images/index/3.jpg')
                  }]
            };
        },
        ready (){
            //$('.vux-indicator-right').css('right','46%')
        },
        components :{
            Swiper
        },
        methods :{
        }
    }
</script>

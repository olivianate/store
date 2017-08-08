<template>
    <div class="ui-slider" style="padding-top:50%;">
        <ul class="ui-slider-content" style="width: 300%">
            <li class="current"><a v-link="{name:'activity'}"><img :src="bannerList_img"></a></li>
            <li><a v-link="{name:'activity'}"><img :src="bannerList_img"></a></li>
            <li><a v-link="{name:'activity'}"><img :src="bannerList_img"></a></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                //图片路径
                bannerList_img:require('../assets/images/index/top.jpg'),
            };
        },
    };
</script>



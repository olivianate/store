<template>
    <div class="activity">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>夏童出游</h1>
        </header>
        <div class="ui-grid2">
            <img :src="activity1" alt="">
            <ul class="ui-grid-halve">
                <li v-link="{name:'goodsDetail'}">
                    <img :src="activity2">
                    <h4 class="ui-nowrap-multi">高级定制系列唇膏 Les Roses玫瑰霓采色Roses玫瑰霓采色系系 202#</h4>
                    <h5><span class="red">¥218</span><del>¥420</del></h5>
                </li>
                <li v-link="{name:'goodsDetail'}">
                    <img :src="activity2">
                    <h4 class="ui-nowrap-multi">高级定制系列唇膏 Les Roses玫瑰霓采色Roses玫瑰霓采色系系 202#</h4>
                    <h5><span class="red">¥218</span><del>¥420</del></h5>
                </li>
                <li v-link="{name:'goodsDetail'}">
                    <img :src="activity2">
                    <h4 class="ui-nowrap-multi">高级定制系列唇膏 Les Roses玫瑰霓采色Roses玫瑰霓采色系系 202#</h4>
                    <h5><span class="red">¥218</span><del>¥420</del></h5>
                </li>
                <li v-link="{name:'goodsDetail'}">
                    <img :src="activity2">
                    <h4 class="ui-nowrap-multi">高级定制系列唇膏 Les Roses玫瑰霓采色Roses玫瑰霓采色系系 202#</h4>
                    <h5><span class="red">¥218</span><del>¥420</del></h5>
                </li>
            </ul>
        </div>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                //图片路径
                activity1:require('../../assets/images/activity1.jpg'),
                activity2:require('../../assets/images/activity2.jpg'),
            };
        },
        components:{
        },
        ready (){
        },
        methods :{
        }
    };
</script>
<template>
    <div class="prefer">
        <h3 class="red prefer-title">猜你喜欢</h3>
        <div class="ui-grid2">
            <ul class="ui-grid-halve">
                <li>
                    <img :src="activity2">
                    <h4 class="ui-nowrap-multi">高级定制系列唇膏 Les Roses玫瑰霓采色Roses玫瑰霓采色系系 202#</h4>
                    <h5><span class="red">¥218</span><del>¥420</del></h5>
                </li>
                <li>
                    <img :src="activity2">
                    <h4 class="ui-nowrap-multi">高级定制系列唇膏 Les Roses玫瑰霓采色Roses玫瑰霓采色系系 202#</h4>
                    <h5><span class="red">¥218</span><del>¥420</del></h5>
                </li>
                <li>
                    <img :src="activity2">
                    <h4 class="ui-nowrap-multi">高级定制系列唇膏 Les Roses玫瑰霓采色Roses玫瑰霓采色系系 202#</h4>
                    <h5><span class="red">¥218</span><del>¥420</del></h5>
                </li>
                <li>
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
               activity2:require('../../assets/images/activity2.jpg'),
            };
        },
        methods : {
        }
    };
</script>

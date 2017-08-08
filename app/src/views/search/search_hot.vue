<!-- 热搜 -->
<template>
    <div class="hot-search ui-whitespace" :style="{ MinHeight : wrapheight +'px'}">
        <p><i class="ui-icon ui-icon-hot"></i>热门搜索：</p>
        <a class="search-key" v-for="item in hotSearch">{{item.name}}</a>
    </div>
</template>

<script>

    export default {
        //el : "#index_body",
        data () {
            return {
                wrapheight:'',
                count:1,
                //图片路径
                sorts1:'dist/images/sorts/1.jpg',
                hotSearch:[{
                    'name':'奶粉'
                },{
                    'name':'纸尿裤'
                },{
                    'name':'安全座椅'
                }],
            };
        },
        components:{
            
        },
        ready (){
            document.getElementById('searchinput').focus;
            let _height = window.innerHeight
            let _width = window.innerWidth
            this.wrapheight = _height - 96

        },
        init(){

        },
        methods : {
        }
    };
</script>


<template>
    <div>
        <div class="search-tab">
            <span v-for="item in searchTab" @click="searchTabChange($index,$event)" class="{{ $index == tabindex ? 'current' : ''}}">{{item.name}}</span>
        </div>
        <div id="wrapper" class="search-wrapper">
            <ul class="ui-row clearfix">
                <template v-for="item in goodslist | orderBy 'salesnum'">
                    <li class="ui-col ui-col-50" v-link="{name:'goodsDetail'}">
                        <img :src="item.pic">
                        <h5 class="default">{{item.title}}</h5>
                        <h5 class="price"><span class="red">¥{{item.price}}</span><small>¥{{item.oldprice}}</small></h5>
                    </li>
                </template>
            </ul>
        </div>

        <!--加载更多组件-->
        <infinite-loading :distance="distance" :on-infinite="onInfinite" v-if="goodslist.length < totalnum"></infinite-loading>

    </div>
</template>

<script>

    //加载公共组件
    import InfiniteLoading from '../../components/InfiniteLoading'

    export default {
        data () {
            return {
                searchTab:[{
                    'name':'综合',
                },{
                    'name':'价格',
                },{
                    'name':'销量'
                }],
                tabindex:0,//默认选中tab
                tabstatus:1,
                goodslist:'',
                distance:100,
                page:1,  //分页页数
                totalnum:500,
            };
        },
        ready (){
            //获取商品列表
            this.getGoodslist();
        },
        components: {
            InfiniteLoading
        },
        methods : {
            onInfinite () {
                const self = this;
                setTimeout(function () {
                    self.page++;
                    self.getGoodslist();

                  }.bind(self), 1000);
            },
            searchTabChange (index,e) {//tab选中效果
                this.$set('tabindex',index)
                if(index == 1){
                    //$(e.target).toggleClass('down')
                }

                //获取商品列表数据
                this.getGoodslist()

            },
            getGoodslist () {//请求列表全部数据
              let successCallback =(response) => {
                const data = response.data
                const json = data.data.goodslist
                
                if(data.code == 0){
                  if(this.goodslist.length == 0){
                        this.$set('goodslist',json);

                    }
                    else if(this.goodslist.length < this.totalnum){
                        this.goodslist = this.goodslist.concat(json);
                        this.$broadcast('$InfiniteLoading:loaded');
                    }

                }
              }
              
              let errorCallback = (json)=> {
                //console.log(json)
              }

              this.$http.get('goodslist.json').then(successCallback, errorCallback)
            },
            
        }
    };
</script>
<template>
    <div class="ui-tab-title" v-if="show">
        <ul class="ui-tab-nav ui-border-b" >
            <li v-for="item in category" class="{{ $index == tabindex ? 'current' : '' }}" v-on:click="getGoodslist($index)">{{item.title}}</li>
        </ul>
    </div>
    <ul class="ui-list ui-border-tb list-wrap" id="wrap">
        <li v-for="item in goodslist" class="ui-border-radius">
            <div class="ui-list-img">
                <img :src="item.pic" v-link="{name:'goodsDetail'}"></div>
            <div class="ui-list-info ui-whitespace">
                <h6 class="ui-nowrap-multi ">{{item.title}}</h6>
                <div class="ui-row-flex">
                    <div class="ui-col ui-col-1 red">
                        <h2>¥{{item.price}}.00</h2>
                    </div>
                    <div class="ui-col ui-col-1 text-right ui-txt-muted">¥{{item.oldprice}}.00</div>
                </div>
                <div class="ui-row-flex">
                    <div class="ui-col ui-col-1 ui-txt-muted">已售:{{item.sellnum}}</div>
                    <div class="ui-col ui-col-1 text-right">
                        <a class="s_toCart" v-link="{name:'goodsDetail'}">加入购物车</a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    
    <!--加载更多组件-->
    <infinite-loading :distance="distance" :on-infinite="onInfinite" v-if="goodslist.length < totalnum"></infinite-loading>

</template>
<script>

    //加载公共组件
    import InfiniteLoading from '../../components/InfiniteLoading'

    export default {
        data () {
            return {
                goodslist:'',
                category:'',
                tabindex: 0, // 默认分类初始值
                distance:100,
                page:1,  //分页页数
                totalnum:500,
            };
        },
        props :['show'],
        ready () {
            //获取分类
            this.getCategory()
            //获取商品列表
            this.postGoodslist()
        },
        components :{
            InfiniteLoading
        },
        methods :{
            onInfinite () {
                const self = this;
                setTimeout(function () {
                    self.page++;
                    self.postGoodslist();
                  }.bind(self), 1000);
            },
            getGoodslist (index){//设置默认数据
                const self = this
                self.$set('tabindex',index)
                self.postGoodslist();
            },
            postGoodslist () {//请求列表全部数据
                const self = this

                //正在加载
                if (self.page <= 2){
                    self.$route.router.app.loading.show = true
                }else {
                    self.$route.router.app.loading.show = false
                }

                let successCallback =(response) => {

                    const data = response.data
                    const json = data.data.goodslist
                    
                    if(data.code == 0){
                        //实时异步队列更新数据
                        if(self.goodslist.length == 0){
                            self.$set('goodslist',json);

                        }
                        else if(self.goodslist.length < self.totalnum){
                            self.goodslist = self.goodslist.concat(json);
                            self.$broadcast('$InfiniteLoading:loaded');
                        }
                    }

                    //加载完成
                    self.$route.router.app.loading.show = false

                }

                  let errorCallback = (json)=> {
                    //console.log(json)
                  }

                  self.$http.get('goodslist.json').then(successCallback, errorCallback)
            },
            getCategory () {//请求分类全部数据
              const self = this
              let successCallback =(response) => {

                const data = response.data
                const json = data.data.category

                if(data.code == 0){
                  //实时异步队列更新数据
                  self.category = json;
                }
              }

              let errorCallback = (json)=> {
                //console.log(json)
              }

              self.$http.get('category.json').then(successCallback, errorCallback)
            },
        }
    };
</script>
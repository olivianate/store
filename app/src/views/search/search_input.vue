<template>
    <div class="search-t">
        <div class="ui-searchbar-wrap ui-border-b focus">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <div class="ui-searchbar ui-border-radius">
                <i class="ui-icon-search"></i>
                <div class="ui-searchbar-text">搜索</div>
                <div class="ui-searchbar-input">
                    <input v-model="seachkeyvalue" id="searchinput" type="text" placeholder="搜索" autocapitalize="off" @click="linkSortsSearch">
                </div>
            </div>
            <button class="ui-searchbar-cancel" @click="searchBtn">搜索</button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                seachkeyvalue:''
            }
        },
        methods :{
            linkSortsSearch (){
                let self = this;
                self.$route.router.go({ path: '/searchIndex/goodsHot'});
            },
            searchBtn (){
                let self = this;
                
                if(self.seachkeyvalue != ''){
                    self.$route.router.go({path:'/searchIndex/goodsResult'});
                }else{
                    console.log('请输入搜索值');
                }
                
            },
        }
    }
</script>
            
            
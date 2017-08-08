<template>
	<div class="address">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>管理收货地址</h1>
        </header>
         <section class="ui-container">
            <div class="address-wrap">
                <div class="address-item" v-cloak v-for="item of addressList" id="row_{{item.id}}">
                     <ul class="ui-list">
                         <li>
                             <div class="ui-list-info">
                                 <h4 class="ui-nowrap">{{item.consignee}}</h4>
                             </div>
                             <div class="ui-list-action">{{item.mobile}}</div>
                         </li>
                         <li>
                             <h4 class="ui-nowrap-multi">{{item.province}}{{item.city}}{{item.district}}{{item.address}}</h4>
                         </li>
                     </ul>
                     <ul class="ui-list">
                         <li>
                             <div class="ui-list-info">
                                 <label class="ui-radio" for="radio">
                                     <input type="radio" name="radio" checked="" id="">设为默认地址
                                 </label>
                             </div>
                             <div class="ui-list-action"><span class="icon_edit" v-link="{ name: 'addressEdit',params: { id: item.id }}"><i class="icon-edit"></i>编辑</span><span class="icon_del" @click="showDialog(item.id)"><i class="icon-delout"></i>删除</span></div>
                         </li>
                     </ul>
                 </div>
            </div>
            <div class="address-nomsg">
                <img :src="iconAddressNo">
                <p>您还没有添加收货地址</p>
            </div>
            <div class="ui-dialog" @click="closeDialog">
                <div class="ui-dialog-cnt">
                    <div class="ui-dialog-bd">
                        <div>确认要删除该地址吗？</div>
                    </div>
                    <div class="ui-dialog-ft">
                        <button type="button" class="ui-dialog-btn" @click="closeDialogBtn">取消</button>
                        <button type="button" class="ui-dialog-btn ui-dialog-btnred" @click="delAddress">确定</button>
                       <!--  <a class="ui-dialog-btn" @click="closeDialogBtn">取消</a>
                        <a class="ui-dialog-btn ui-dialog-btnred" @click="delAddress(addressItem)">确定</a> -->
                    </div>
                </div>        
            </div>
            <div class="footer"><!-- v-link="{ name: 'addressadd' }" -->
                <a class="ui-btn-lg ui-btn-red" v-link="{ name: 'addressEdit',params: { id: 'null' }}">添加新的地址</a>
            </div>
        </section>   
    </div>
</template>
<script>
    export default {
        data () {
            return {
                //图片路径
                iconAddressNo:require('../../assets/images/icon-address-no.png'),
                addressList:[],
                totalCount:0,//总条数
                tempPush:[],
                delID:[],
                apiUrl:'v1/wap/address',
                editUrl:'./address_add.html?id=',
                addressItem:[],
                distance: 100,//加载更多距离
                page:1,//初始第一页
                pageCount:'',//总页数
                noMore:true//更多初始
            };
        },
        ready (){
            //获取总条数
             this.getPageCount();
            //获取地址
            this.getAddress();
        },
        components:{
        },
        methods:{
            getPageCount (){
                let self = this;
                self.$http.get(self.apiUrl, {}, {
                        emulateJSON: !0,
                        emulateHTTP: !0
                    }).then((response) => {
                        const jsondata = response.data
                        self.totalCount = jsondata._meta.totalCount;

                        if(self.page == 1 && jsondata.data == ''){
                            $('.address-nomsg').show();
                        }
                    }, (e) => {

                    });
            },  
            getAddress (page){

                let self = this;
                // 请求数据
                    self.$http.get(self.apiUrl+"?page="+self.page, {}, {
                        emulateJSON: !0,
                        emulateHTTP: !0
                    }).then((response) => {

                         const jsondata = response.data
                        self.pageCount = jsondata._meta.pageCount;
                            //判断有没有数据
                            
                                if(self.page > self.pageCount){
                                    self.noMore = false;

                                }else{
                                    self.addressList = self.addressList.concat(jsondata.data);
                                };

                            self.page++;

                    }, (e) => {
                         
                    });
            },
            showDialog (id){
                let self = this;
                //弹窗
                $('.ui-dialog').addClass('show');
                self.$set('delID',id);
            },
            closeDialog (e){
                //关闭弹窗
                let target = e.srcElement ? e.srcElement : e.target;
                    $(target).removeClass('show');
            },
            closeDialogBtn (e){
                $('.ui-dialog').removeClass('show');
            },
            editAddress (id){
                let self = this;
                window.location.href = self.editUrl+id;
            },
            delAddress (e){
                let self = this;
                self.$http.delete(self.apiUrl+'/'+self.delID,{
                        emulateJSON: !0,
                        emulateHTTP: !0
                    }).then((e) => {
                        //弹窗隐藏
                        $('.ui-dialog').removeClass('show');
                        //删掉缓存数据
                        self.addressList.$remove(self.addressList.find(t => t.id === self.delID));
                        //移出demo
                        $('#row_'+self.delID).remove();
                        //判断数据是否为空
                        if(self.addressList == ""){
                            $('.address-nomsg').show();
                        } 
                    }, (e) => {})
            }
        } 
    };
</script>
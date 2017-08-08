    <template>
        <div class="address address_add">
            <header class="ui-header">
                <i class="ui-icon-return" onclick="history.back()"></i>
                <h1>填写收货地址</h1>
            </header>
            <section class="ui-container" v-cloak>
                <div class="address-add-list">
                    <div class="ui-form-item ui-border-b">
                        <label>收货人</label>
                        <input type="text" v-model="address.consignee" id="consignee" value="{{address.consignee}}" placeholder="请输入收货人姓名">
                    </div>
                    <div class="ui-form-item ui-border-b">
                        <label>手机号码</label>
                        <input type="text" v-model="address.mobile" id="mobile" value="{{address.mobile}}" placeholder="请输入收货人手机号码">
                    </div>
                    <div class="ui-form-item ui-border-b">
                        <label>身份证号</label>
                        <input type="text" v-model="address.id_card" id="id_card" value="{{address.id_card}}" placeholder="购买保税仓商品需填写真实身份证信息">
                    </div>
                    <div class="ui-form-item ui-border-b">
                        <label>省、市、区</label>
                       <div class="ui-select-group">
                        </div>
                    </div>
                    <div class="ui-form-item ui-border-b">
                        <label>详细地址</label>
                        <input type="text" v-model="address.address" id="address" value="{{address.address}}" placeholder="请输入详细地址">
                    </div>
                </div>

                <div class="address-set">
                    <label class="ui-checkbox-s">
                        <input type="checkbox">
                    </label>
                    <span>设为默认地址</span>
                </div>
                <div class="footer">
                    <a class="ui-btn-lg ui-btn-red" id="btnSave">保存</a>
                </div>            
            </section><!-- /.ui-container-->
        </div>
    </template>
<script>

    export default {
        data () {
            return {
                apiUrl:'v1/wap/address',
                address:{
                    'user_id':'',
                    'consignee':'',
                    'province':'浙江省',// 默认初始值
                    'city':'杭州市',// 默认初始值
                    'district':'上城区',// 默认初始值
                    'address':'',
                    'mobile':''
                },
                addressID:this.$route.params.id,
                validTipMsg:'',
                title: '省、市、区',
                value: ['浙江省', '杭州市', '上城区'],
                status:0,//默认不出现tips
            }
        },
        ready (){
            //获取地址id
            this.getAddressDetail();
        },
        init (){

        },
        components: {
        },
        methods:{
            getAddressDetail (id){
                var self = this;
                if(self.addressID != '-1'){
                // 请求数据
                    self.$http.get(self.apiUrl+'/'+self.addressID, {}, {
                        emulateJSON: !0,
                        emulateHTTP: !0
                    }).then(function(e) {
                        var t = e.json();
                        self.$set('address',t);

                    }, function(e) {});
                }
                
            },
            postAddress () {
                let self = this;
                // 请求数据
                    self.$http.post(self.apiUrl, self.address).then((data) => {
                        self.$route.router.go({ name: 'address'});
                    }, (data) => {
                        //返回错误信息
                        let msg = data.data.message;
                    });
            },
        }
    }
</script>

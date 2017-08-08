<template>
    <div class="service_body2 tuihuotuikuan">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>{{title}}</h1>
        </header>
        <ul class="ser_list">
            <li>
                <h4>退款类型 <span class="red">*</span></h4>
                <div class="ser_list_item">
                    <!-- <p class="ser_type_active">我要退款(无需退货)</p>
                    <P>我要退货</P> -->
                    <p class="{{serviceType.isSelected?'ser_type_active':''}}" v-for="serviceType in serviceTypes" @click="chooseType($index)">
                        {{ serviceType.message }}
                    </p>
                </div>
            </li>
            <li v-show="serviceTypes[0].ok">
                <h4>收货状态 <span class="red">*</span></h4>
                <div class="ser_list_item">
                    <!-- <p class="ser_state_active">未收到货</p>
                    <P>已收到货</P> -->
                    <p class="{{ serviceState.isSelected?'ser_state_active':''}}" v-for="serviceState in serviceStates" @click="chooseState($index)">
                        {{ serviceState.message }}
                    </p>
                </div>
            </li>
            <li>
                <h4>{{serviceTypes[0].isSelected?'退款原因':'退货原因'}} <span class="red">*</span></h4>
                <div class="ser_list_item ">
                    <!-- <select>
                        <option>退款原因</option>
                        <option>我</option>
                        <option>2都是016</option>
                    </select> -->
                    <select v-model="selectedTuikuanTuihuo">
                        <option v-for="option in serviceTypes[0].isSelected?(serviceStates[0].isSelected?optionsTuikuanTuihuo1:optionsTuikuanTuihuo2):optionsTuikuanTuihuo3" v-bind:value="option.value">
                            {{option.text}}
                        </option>
                    </select>
                </div>
            </li>
            <li v-show="serviceTypes[0].ok">
                <h4>退款金额 <span class="red">*</span><span class="color_ccc">不可修改</span></h4>
                <div class="ser_list_item">
                    
                    <p>33.90</p>
                </div>
            </li>
            <li>
                <h4>{{serviceTypes[0].isSelected?'退款说明':'退货说明'}} <span class="color_ccc">(可不填)</span></h4>
                <div class="ser_list_item">
                    <input type="text" placeholder="请输入{{serviceTypes[0].isSelected?'退款说明':'退货说明'}}">
                </div>
            </li>
            <photos></photos>
        </ul>
        <input id="upload_img" type="file" accept="image/gif,image/jpeg,image/png" hidden/>
        <button class="ui-btn-lg ui-btn-red" @click="postServiceUrl">提交申请</button>
    </div>    
</template>

<script>
import photos from "../../components/photo";
    export default {
        //el : "#index_body",
        data () {
            return {
                title:'申请退款',
                serviceTypes: [
                    { message: '我要退款(无需退货)' ,isSelected:true ,ok:1},
                    { message: '我要退货' ,isSelected:false ,ok:0}
                ],
                serviceStates: [
                    { message: '未收到货' ,isSelected:true},
                    { message: '已收到货' ,isSelected:false}
                ],
                selectedTuikuanTuihuo:0,
                optionsTuikuanTuihuo1: [
                    { text: '空包'},
                    { text: '未按约定时间发货'},
                    { text: '快递/物流一直未送达'},
                    { text: '快递/物流无跟踪记录'}
                ],
                optionsTuikuanTuihuo2: [
                    { text: '质量问题'},
                    { text: '商品信息描述不符'},
                    { text: '少发/漏发'},
                    { text: '包装/商品破损'},
                    { text: '未按约定时间发货'},
                    { text: '发票问题'},
                    { text: '退运费'}
                ],
                optionsTuikuanTuihuo3: [
                    { text: '7天无理由退换货'},
                    { text: '质量问题'},
                    { text: '商品信息描述不符'},
                    { text: '少发/漏发'},
                    { text: '包装/商品破损'},
                    { text: '收到假冒商品'},
                    { text: '未按约定时间发货'},
                    { text: '发票问题'},
                    { text: '退运费'}
                ]
            };
        },
        components:{
            photos
        },
        ready (){
        },
        init:function(){
                
            
        },
        watch: {
            serviceTypes (val) {
                this.open = val == "换货说明" ? true : false;
                this.title=this.open = val == "换货说明" ? "申请换货" : "申请维修";
            }
        },
        methods : {
            chooseType (index) {
                for(var key in this.serviceTypes){  
                    this.serviceTypes[key].isSelected=false;
                    this.serviceTypes[key].ok=0;
                } 
                this.serviceTypes[index].isSelected=true;  
                this.serviceTypes[index].ok=1;
                this.title= this.serviceTypes[0].ok == 1 ? "申请退款" : "申请退货";
            },
            chooseState (index) {
                for(var key in this.serviceStates){  
                    this.serviceStates[key].isSelected=false;
                } 
                this.serviceStates[index].isSelected=true;   
            },
            postServiceUrl (){
                if( this.title == '申请退款'){
                    this.$route.router.go({ name: 'negotiationResult'})
                }else {
                    this.$route.router.go({ name: 'negotiation'})
                }
            }
        }
    };
</script>

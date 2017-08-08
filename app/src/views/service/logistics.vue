<template>
    <div class="service_body2">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>填写退货物流</h1>
        </header>
        <ul class="ser_list">
            <li>
                <h4>物流公司 <span class="red">*</span></h4>
                <div class="ser_list_item">
                    <select v-model="selected">
                        <option v-for="option in options" v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
            </li>
            <li>
                <h4>物流单号</h4>
                <div class="ser_list_item">
                    
                    <input type="text" placeholder="请输入物流单号">
                </div>
            </li>
            <li>
                <h4>退货说明</h4>
                <div class="ser_list_item">
                    
                    <input type="text" placeholder="最多200字">
                </div>
            </li>
            <photos></photos>
        </ul>
        <input id="upload_img" type="file" accept="image/gif,image/jpeg,image/png" hidden/>
        <button class="ui-btn-lg ui-btn-red" type="submit" v-link="{name:'negotiationResult2'}">提交申请</button>
    </div>
    
</template>

<script>
import photos from "../../components/photo";
    export default {
        //el : "#index_body",
        data () {
            return {
                selected: '换货说明',
                selectedWeixiu: '维修说明',
                open: this.$route.params.dataId==0?true:false,
                options: [
                  { text: '中通', value: '中通'},
                  { text: '顺丰', value: '顺丰'}
                ]
            };
        },
        components:{
            photos
        },
        init:function(){
            /**/  
            console.log('dataId: ' + this.$route.params.dataId); 
             
        },
        ready:function(){
        },
        watch: {
            selected: function(val) {
                this.open = val == "换货说明" ? true : false;
                var title= val == "换货说明" ? "申请换货" : "申请维修";
                $('header').find("h1").text(title)
            }
        },
        methods : {
        }
    };
</script>
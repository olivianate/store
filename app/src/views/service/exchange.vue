<template>
    <div class="service_body2">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>{{title}}</h1>
        </header>
        <ul class="ser_list">
            <li>
                <h4>申请服务 <span class="red">*</span></h4>
                <div class="ser_list_item">
                    <select v-model="selected">
                        <option v-for="option in options" v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </div>
            </li>
            <li v-show="open">
                <h4>换货原因 <span class="red">*</span></h4>
                <div class="ser_list_item">
                    <select>
                        <option>大小尺寸与商品描述不符</option>
                        <option>卖家发错货</option>
                        <option>尺码拍错/不喜欢/效果差</option>
                        <option>颜色/款式/图案与描述不符</option>
                        <option>收到商品少件或破损</option>
                        <option>材质/面料与商品描述不符</option>
                        <option>质量问题</option>
                    </select>
                </div>
            </li>
            <li>
                <h4>{{ selected }}</h4>
                <div class="ser_list_item">
                    <input type="text" placeholder="最多200字">
                </div>
            </li>
            <photos></photos>
        </ul>
        <input id="upload_img" type="file" accept="image/gif,image/jpeg,image/png" hidden/>
        <button class="ui-btn-lg ui-btn-red" v-link="{name:'negotiation'}">提交申请</button>
    </div>
    
</template>

<script>
import photos from "../../components/photo";
    export default {
        //el : "#index_body",
        data () {
            return {
                title:'申请换货',
                selected: '换货说明',
                selectedWeixiu: '维修说明',
                open: true,
                options: [
                  { text: '换货', value: '换货说明'},
                  { text: '维修', value: '维修说明'}
                ]
            };
        },
        components:{
            photos
        },
        init:function(){
             
        },
        ready:function(){
        },
        watch: {
            selected: function(val) {
                this.open = val == "换货说明" ? true : false;
                this.title= val == "换货说明" ? "申请换货" : "申请维修";
            }
        },
        methods : {
        }
    };
</script>
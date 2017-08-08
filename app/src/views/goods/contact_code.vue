<template>
    <div class="ui-dialog call-change-dialog" :class="{show : contact.show}">
            <div class="call_content">
                <h4>店主微信二维码</h4>
                <img :src="code">
                <div class="call_box">
                    <p>联系微信：<a>13588759684</a></p>
                </div>
                <div class="call_box">
                <p>联系手机：<a href="tel:13588759684">13588759684</a><a class="call" href="tel:13588759684">拨打</a></p>
                </div>
                <i class="call_close" @click="hideCallChangeDialog"></i>
            </div>   
        </div>
</template>
<script>
    export default {
        props:{
          contact: {
            type: Object,
            default () {
              return {
                show:false,
              }
            }
          }
        },
        data () {
            return {
                //图片路径
                code:require('../../assets/images/goods-detail/code.jpg'),
                activity2:require('../../assets/images/activity2.jpg'),
            };
        },
        methods : {
            close (){
                this.contact.show = false
            },
            hideCallChangeDialog (){
                this.contact.show = false
            },
        }
    };
</script>

<template>    
    <div class="pwd-find pwd-find-padding" id="signin_pwdreg">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>手机注册</h1>
        </header>
        <section class="ui-container">
            <p class="ui-form-title">我们将发送验证码到您的手机</p>
            <validator name="validate_pwdreg">
                <form novalidate v-on:submit.prevent="onSubmit">
                    <div class="ui-form-item ui-border-b ui-form-icon">
                        <i class="form-item-phone"></i>
                        <input class="form-input-ricon" id="mobile" type="text" v-model="mobile" initial="off" v-validate:vala="['mobile']"
                                placeholder="请输入手机号码">
                    </div>
                    <div class="ui-whitespace text-error">
                        <p class="ui-txt-warning" v-cloak v-for="msg in $validate_pwdreg.errors" v-if="$index == 0">{{msg.message}}</p>
                    </div>
                    <div class="ui-btn-wrap">
                        <input  class="ui-btn-lg ui-btn-red" type="submit" value="下一步">
                    </div>
                </form>
            </validator>
            
            <div class="text-right ui-wrap-b">
                <span>已有账号？</span><a v-link="{ name: 'signin'}" class="ui-btn-redb">登录</a>
            </div>
            <div class="ui-dialog show" v-if="dialogShow">
                <div class="ui-dialog-cnt">
                    <div class="ui-dialog-bd">
                        <div>手机号已被注册，您可尝试找回密码</div>
                    </div>
                    <div class="ui-dialog-ft">
                        <button type="button" @click="dialogClose">取消</button>
                        <button type="button" class="ui-dialog-btnred" v-link="{name :'signinPwdCode'}">找回密码</button>
                    </div>
                </div>        
            </div>
    </div><!-- /.ui-container-->
</template>
<script>
export default {
    data () {
        return {
            dialogShow:false//默认弹窗隐藏
        }
    },
    props: {
        mobile: {
          type: String,
          default: ''
        }
    },
    compiled (){
        this.mobile = ''
    },
    components:{
    },
    validators: { // `numeric` and `url` custom validator is local registration
        mobile: {
            message: '请填写正确手机号',
            check (val) {
              return /^(1[35687][0-9]{9})$/.test(val)
            }
        }
    },
    ready (){
    },
    methods: {
        onSubmit (e) {
            let self = this;

            self.$validate(true, function () {
                if (self.$validate_pwdreg.invalid) {
                    e.preventDefault();

                }else{
                    self.existsMobile()
                };

            })
        },
        existsMobile (){
            let self = this
            //判断用户是否存在
            self.$http.get('v1/wap/user/exists?mobile='+self.mobile, {
                emulateJSON: !0,
                emulateHTTP: !0
            }).then(response => {

                if(response.status == 204){//用户不存在
                    self.$route.router.go({ name: 'signinPwdReset'})
                }else{//用户存在
                    self.dialogShow = true
                }
            })
            .catch(err => {

            })
        },
        dialogClose (){
            this.dialogShow = false
        }
    }
}
</script>
<style scoped>
    .ui-dialog-btnred{
        color: #ff0066;
    }
</style>
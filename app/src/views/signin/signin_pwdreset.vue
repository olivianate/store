<template>    
    <div class="pwd-find pwd-find-padding">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>注册设置密码</h1>
        </header>
        <section class="ui-container">
            <p class="ui-form-title">{{prompts}}</p>
            <validator name="validate_pwdreset">
                <form novalidate v-on:submit.prevent="onSubmit">
                    <div class="ui-form-item ui-border-b ui-form-icon ui-form-item-r">
                        <i class="form-item-phone"></i>
                        <input type="text" placeholder="验证码" class="form-input-rbtn" id="code" type="text" v-model="code" initial="off" v-validate:vala="['code']">
                        <div class="ui-border getcode countdown" @click="sendVerifyCode" :class="{'disabled':countdown.show}">
                            <span v-if="countdown.show">
                                <!-- 倒计时组件 -->
                                <countdown slot="countdown.value" :time="countdown.time" :start="countdown.start" @on-finish="finish" v-show="countdown.show"></countdown>
                            </span>
                            <span v-else>重新获取</span>
                        </div>
                    </div>
                    <div class="ui-form-item ui-border-b ui-form-icon">
                        <i class="form-item-pwd"></i>
                        <input type="text" placeholder="设置密码" id="password" type="password" v-model="password" initial="off" v-validate:valb="['password']">
                    </div>
                    <div class="ui-form-item ui-border-b ui-form-icon">
                        <i class="form-item-pwd"></i>
                        <input type="text" placeholder="重复密码" id="passwordre" type="password" v-model="passwordRepeat" initial="off" v-validate:valc="['passwordrepeat']">
                    </div>
                    <div class="ui-whitespace text-error">
                        <p class="ui-txt-warning" v-for="msg in $validate_pwdreset.errors" v-if="$index == 0">{{msg.message}}</p>
                    </div>
                    <div class="ui-btn-wrap">
                        <input  class="ui-btn-lg ui-btn-red" type="submit" value="确认">
                    </div>
                </form>
            </validator>
        </section>

        <!--提示组件-->
        <toast :show.sync="toast.show" :text.sync="toast.text" :time="1000"></toast>

    </div>
</template>
<script>
    //加载公共组件
    import Countdown from '../../components/countdown'
    import Toast from '../../components/toast'

    export default{
        data(){
            return{
                code:'',
                password:'',
                passwordRepeat:'',
                prompts:'',//默认提示信息
                countdown:{//倒计时
                    show: false,
                    time: 60,
                    value: '',
                    start: false
                },
                toast:{//提示信息
                    show:false,
                    text:'',
                    time:5000,
                }
                
            }
        },
        props: {
            mobile: String
        },
        components:{
            Countdown,Toast
        },
        validators: { // `numeric` and `url` custom validator is local registration
            code: {
                message: '请填写验证码',
                check: function (val) {
                  return /\S/.test(val)
                }
            },
            password: {
                message: '密码允许字母数字下划线,6~20位',
                check: function (val) {
                  return /^[A-Za-z0-9_]\w{5,21}$/.test(val)
                }
            },
            passwordrepeat:{
                message: '请填写相同密码',
                check:function (val) {
                    return /^[A-Za-z0-9_]\w{5,21}$/.test(val)
                }
            }
        },
        ready:function(){
            //发送验证码
            this.sendVerifyCode()

            
        },
        methods: {
            finish (index) {
              this.countdown.start = false
              this.countdown.show = false
            },
            onSubmit (e) {
                let self = this;
                self.$validate(true, function () {
                    if (self.$validate_pwdreset.invalid) {
                        e.preventDefault();
                    }else{
                            
                        //注册
                        self.register()

                    };

              })
            },
            register (){//注册
                let self = this

                self.$http.post('v1/wap/user/register', {'mobile':self.mobile,'code':self.code,'password':self.password,'password_repeat':self.passwordRepeat})
                .then(response => {

                     self.toast.show = true
                     self.toast.text = '注册成功,正在跳转...'

                      setTimeout( ()=>{
                            self.$route.router.go({ name: 'index'})
                        },2000)

                })
                .catch(err => {
                    console.log(err)

                    let msg = err.data.message
                    self.setValidationErrors(msg)

                })
            },
            sendVerifyCode (){//发送验证码
                let self = this

                if(self.countdown.start == false){
                    //倒计时
                    self.countdown.show = true
                    self.countdown.start = true

                    //发送注册验证码
                    self.$http.post('v1/wap/user/verifyCode', {'mobile':self.mobile,'type':1})
                    .then(response => {

                        self.prompts = "验证短信已发至您的手机"

                    })
                    .catch(err => {
                        let msg

                        if(err.data.code == 201001){
                            msg = '操作过于频繁，请过60s再操作'
                        }else if (err.data.code == 201002){
                            msg = '一天只能发送100次验证码'
                        }else if (err.data.code == 201003){
                            msg = '非法地址'
                        }else {
                            msg = err.data.message
                        }

                        self.setValidationErrors(msg)

                    })
                }
                
            },
            setValidationErrors (msg){//接口返回错误信息
                let self = this
                self.$setValidationErrors([
                  { field: "vala", message: msg}
                ]);
            }
        }
    }
</script>


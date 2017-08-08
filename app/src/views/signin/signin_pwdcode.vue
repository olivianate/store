<template>
    <div class="pwd-find">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>找回密码</h1>
        </header>
        <section class="ui-container">
            <p class="ui-form-title">{{prompts}}</p>
            <validator name="validate_pwdcode">
                <form novalidate v-on:submit.prevent="onSubmit">
                    <div class="ui-form-item ui-border-b ui-form-check ui-form-item-r">
                        <input type="text" placeholder="验证码" class="form-input-rbtn" id="code" type="text" v-model="code" initial="off" v-validate:vala="['code']">
                        <div class="ui-border getcode countdown" :class="{'disabled':countdown.show}" @click="sendVerifyCode" >
                            <span v-if="countdown.show">
                                <!-- 倒计时组件 -->
                                <countdown slot="countdown.value" :time="countdown.time" :start="countdown.start" @on-finish="finish" v-show="countdown.show"></countdown>
                            </span>
                            <span v-else>重新获取</span>
                        </div>
                    </div>
                    <div class="ui-form-item ui-border-b ui-form-iconright">
                        <input :type="eyeshow ? 'text':'password'" placeholder="设置密码" id="password" v-model="password" initial="off" v-validate:valb="['password']">
                        <a class="ui-icon-eye" :class="{ show : eyeshow }" @click="doSee($event)"></a>
                    </div>

                    <div class="ui-whitespace text-error">
                        <p class="ui-txt-warning" v-cloak v-for="msg in $validate_pwdcode.errors" v-if="$index == 0">{{msg.message}}</p>
                    </div>
                    <div class="ui-btn-wrap">
                        <input  class="ui-btn-lg ui-btn-red" type="submit" value="下一步">
                    </div>
                </form>
            </validator>
        </section><!-- /.ui-container-->

        <!--提示组件-->
        <toast :show.sync="toast.show" :text.sync="toast.text" :time="toast.time"></toast>


</template>
<script>

    //加载公共组件
    import Countdown from '../../components/countdown'
    import Toast from '../../components/toast'

    export default {
        data () {
            return {
                code:'',
                password:'',
                time:180,
                prompts:'',
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
                },
                eyeshow:false//密码类型
            };
        },
        props: {
            mobile: String
        },
        components:{
            Countdown,Toast
        },
        validators: {
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
            }
        },
        ready (){
            //发送验证码
            this.sendVerifyCode()
            
        },
        methods: {
            finish (index) {
              this.countdown.start = false
              this.countdown.show = false
            },
            onSubmit (){
                let self = this
                self.$validate(true, function () {
                    if (self.$validate_pwdcode.invalid) {
                        e.preventDefault()
                    }else{
                        //重置密码
                        self.passwordReset()
                    };
                })

            },
            passwordReset (){//重置密码
                let self = this
                
                self.$http.put('v1/wap/user/passwordReset', {'mobile':self.mobile,'code':self.code,'password':self.password,'password_repeat':self.password})
                .then(response => {

                    //提示信息
                    self.toast.show = true
                    self.toast.text = '修改密码成功,正在跳转...'
                    //跳转登录页
                    setTimeout( ()=>{
                        self.$route.router.go({ name: 'signin'})

                    },2000)

                })
                .catch(err => {
                    let msg = err.data.message
                    self.setValidationErrors(msg)

                })


            },
            sendVerifyCode (){//发送重置密码的验证码
                let self = this

                if(self.countdown.start == false){
                    //倒计时
                    self.countdown.show = true
                    self.countdown.start = true

                    self.$http.post('v1/wap/user/verifyCode', {'mobile':self.mobile,'type':3})
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
            },
            doSee (e){
                this.eyeshow = ! this.eyeshow
            }
        }
    }
</script>

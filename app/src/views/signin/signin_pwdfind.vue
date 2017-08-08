<template> 
    <div class="pwd-find">
        <header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>忘记密码</h1>
        </header>
        <section class="ui-container">
        <p class="ui-form-title ui-from-titleh"></p>
            <validator name="validate_pwdfind">
                <form novalidate v-on:submit.prevent="onSubmit" class="validate_pwdfind">
                    <div class="ui-form-item ui-border-b">
                        <input type="text" placeholder="账号" class="form-input-rbtn" id="mobile" type="text" v-model="mobile" initial="off" v-validate:vala="['mobile']">
                    </div>
                    <!-- <div class="ui-form-item ui-border-b ui-form-check">
                        <input type="text" placeholder="检验码" id="code" type="text" v-model="code" initial="off" v-validate:valb="['code']">
                        <a class="form-btn-check"><img :src="checkSrc"></a>
                    </div> -->
                    <div class="ui-whitespace text-error">
                        <p class="ui-txt-warning" v-cloak v-for="msg in $validate_pwdfind.errors" v-if="$index == 0">{{msg.message}}</p>
                    </div>
                    <div class="ui-btn-wrap">
                        <input  class="ui-btn-lg ui-btn-red" type="submit" value="下一步">
                    </div>
                </form>
            </validator>
        </section>
    </div>
</template> 
<script>
    export default{
        data(){
            return{
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
                check: function (val) {
                  return /^(1[35687][0-9]{9})$/.test(val)
                }
            }
        },
        ready:function(){
        },
        methods: {
            onSubmit (e){
            // validate manually
              var self = this;

                self.$validate(true, function () {
                    if (self.$validate_pwdfind.invalid) {
                        //获取datajson
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
                        self.$route.router.go({ name:'signinPwdCode'})
                    }
                })
                .catch(err => {

                })
            },
        }
    }
</script>
<style lang="scss" scoped>
    .ui-from-titleh{
        height: 10px;
        line-height: 10px;
    }
</style>
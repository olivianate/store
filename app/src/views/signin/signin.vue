<template>
    <div class="signin">
        <div class="logo"><img :src="logoSrc"></div>
        <validator name="validattion_signin">
            <form novalidate v-on:submit.prevent="onSubmit">
                <div class="ui-form-item ui-form-itemwrap form-item-margin">
                    <input id="username" type="text" v-model="username" initial="off" v-validate:vala="['username']" placeholder="账号"></div>
                <div class="ui-form-item ui-form-itemwrap ui-form-iconright form-item-margin">
                    <input id="password" :type="eyeshow ? 'text':'password'" v-model="password" initial="off" v-validate:valb="['password']" placeholder="密码">
                    <a class="ui-icon-eye" :class="{ show : eyeshow }" @click="doSee($event)" ></a>
                </div>
                <div class="ui-whitespace text-error">
                    <p class="ui-txt-warning" v-cloak v-for="msg in $validattion_signin.errors" v-if="$index == 0">{{msg.message}}</p>
                </div>
                <div class="ui-btn-wrap">
                    <input  class="ui-btn-lg ui-btn-red" type="submit" value="登录"></div>
            </form>
        </validator>
        <div class="ui-wrap forget-pwd">
            <a v-link="{ name: 'signinPwdFind'}" class="text-link">忘记密码？</a>
        </div>
        <!-- <h3 class="other-signin">第三方登录</h3>
        <div class="i-group">
            <a><img :src="wxSrc"></a>
            <a><img :src="qqSrc"></a>
            <a><img :src="wbSrc"></a>
        </div> -->
        <div class="link-group">
            <a class="text-link">联系客服</a>
            <a v-link="{ name:'signinPwdReg'}" class="text-link">免费注册</a>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            username:'',
            password:'',
            logoSrc:require('../../assets/images/icon-logo.png'),
            wxSrc:require('../../assets/images/icon-wx.png'),
            qqSrc:require('../../assets/images/icon-qq.png'),
            wbSrc:require('../../assets/images/icon-wb.png'),
            eyeshow:false//type类型判定
        };
    },
    components:{
        
    },
    validators: {
        username: {
            message: '请填写账号',
            check (val) {
              return /\S/.test(val)
            }
        },
        password: {
            message: '密码允许字母数字下划线,6~20位',
            check (val) {
              return /^[A-Za-z0-9_]\w{5,21}$/.test(val)
            }
        }
    },
    ready:function(){
    },
    methods: {
        onSubmit (e){//表单验证
            let self = this;

            self.$validate(true, function () {
                if (self.$validattion_signin.invalid) {
                    e.preventDefault();
                }else{

                    self.postLogin()
                };
            })
        },
        postLogin (){//登录
            let self = this 
            self.$route.router.app.loading.show = true

            //用户登录
            self.$http.post('v1/wap/user/login', {'username':self.username,'password':self.password})
            .then(response => {
                self.$route.router.app.loading.show = false
                self.$route.router.go({ name: 'index'})
            })
            .catch(err => {
                self.$route.router.app.loading.show = false
                self.$setValidationErrors([
                  { field: "vala", message: err.data.message}
                ]);
            })
        },
        doSee (e){
            this.eyeshow = ! this.eyeshow
        }
    }
}
</script>

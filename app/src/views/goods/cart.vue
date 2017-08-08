<template>
    <div class="cart" v-cloak>
		<header class="ui-header">
            <i class="ui-icon-return" onclick="history.back()"></i>
            <h1>购物车</h1>
            <a class="ui-btn ui-btn-text" id="cart_editor" @click="editor($event)" v-if="result.cartItemGroup != ''">编辑</a>
        </header>
        <div class="ui-container">

            <!--购物车如果没有数据则显示-->
            <div class="ui-empty" v-if="result.cartItemGroup == ''">
                <p class="ui-empty-icon"><i class="ui-icon-cart"></i></p>
                <p class="ui-empty-text">您在{{result.shopInfo.shopName}}的购物车还是空的哦～</p>
                <p class="ui-empty-btn">
                    <button class="ui-btn ui-border-radius" v-link="{path:'/'}">马上去选购</button>
                    <!-- <a v-link="{path:'/index'}" data-navigate="true" class="ui-btn ui-btn-pink">马上去选购</a> -->
                </p>
            </div>

            <!--购物车如果有数据则渲染回调数据列表-->
            <div class="item" v-if="result.cartItemGroup != ''">
                <ul class="ui-list ui-list-link cart-title">
                    <li v-link="{name:'index'}">
                        <i class="icon-house"></i>
                        <h4 class="ui-nowrap-multi">{{result.shopInfo.shopName}}</h4>
                    </li>
                </ul>
                <ul class="ui-list ui-list-text cart-list" id="cart_list">
                    <li v-for="good in result.cartItemGroup" data-unit="{{good.sku.nowprice}}" data-min="{{good.number}}" data-max="{{good.sku.stock}}" :class="{ 'cart-list-editor' : !editorStatus }">
                        <div class="ui-avatar-s">
                            <p> 
                                <label class="ui-checkbox-s">
                                    <input type="checkbox" v-model="good.selected" @click="selecteItem(good)">
                                </label>
                            </p>
                        </div>
                        <div class="ui-avatar">
                            <img :src="good.sku.imgUrl" width="70px" height="70px">
                        </div>
                        <div class="ui-list-info">
                            <div class="cart-c" v-if="editorStatus">
                                <h4 class="ui-nowrap-multi">{{good.sku.title}}</h4>
                                <p class="ui-nowrap ui-txt-muted">
                                    <span class="attributes" v-for = "attributes in good.sku.skuAttributes">{{attributes.key}}：{{attributes.value}}</span>
                                </p>
                            </div>
                            <div class="cart-editor" v-else>
                                <div class="edit-quantity" v-show="!readonly">
                                  <p class="btn-minus" :class="{'btn-disabled':good.number == 1}">
                                    <a class="btn" @click="calcitemNum(-1, good)">-</a>
                                  </p>
                                  <p class="btn-input">
                                    <input number readonly pattern="[0-9]*" v-model="good.number"/>
                                  </p>
                                  <p class="btn-minus" :class="{'btn-disabled':good.number == good.sku.stock}">
                                      <a class="btn" @click="calcitemNum(1, good)">+</a>
                                  </p>

                                </div>
                                <div class="ui-nowrap ui-txt-muted" @click="cartChange">
                                    <p>
                                        <span class="attributes" v-for = "attributes in good.sku.skuAttributes">{{attributes.key}}：{{attributes.value}}</span>
                                        <i class="ui-icon ui-icon-unfold cart-change-btn"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="ui-list-action">
                            <div class="cart-c" v-if="editorStatus">
                                <h5 class="ui-list-price">¥{{good.sku.nowprice/100|currency ''}}</h5>
                                <a class="y-servie-link"></a>
                                <p class="ui-nowrap ui-txt-muted">×{{good.number}}</p>
                            </div>
                            <div class="cart-editor" v-else>
                                <p class="ui-nowrap cart-editor-del" @click="delGoodEvent(good, result.cartItemGroup,-1)"><i class="icon-del"></i></p>
                            </div>
                        </div>
                    </li>
                </ul>

                <footer class="ui-footer">
                    <div class="ui-avatar-s">
                        <p> 
                            <label class="ui-checkbox-s" id="selectall">
                                <input type="checkbox" name="c-all" v-model="selecteAllState" @click="selecteAll">
                            </label>
                        </p>
                        <label for="c-all">全选</label>
                    </div>
                    <div class="ui-list-info">
                        <h2>合计：¥{{totalNowPrice/100|currency ''}}</h2>
                        <h5>不含运费</h5>
                    </div>
                    <a class="btn-footer-default btn-b-red" id="cart_calculate" v-if="editorStatus" v-link="{ name:'myorderConfirm'}">结算</a>
                    <a class="btn-footer-default btn-b-red" id="cart_delall" v-else @click="delGoodAllEvent(result.cartItemGroup)">删除</a>
                </footer>
            </div>
        </div>

        <!--确认取消组件-->
        <confirm :confirm="confirm"></confirm>
        <!--加入购物车组件-->
        <cart-add-module :cartadd="cartadd"></cart-add-module>
        <!--提示组件-->
        <toast :show.sync="toast.show" :text.sync="toast.text" :time="1000" :type.sync="toast.type"></toast>
	</div>
   
</template>

<script>

    //加载公用小组件
    import Toast from '../../components/toast'

    //加载业务组件
    import Confirm from '../../components/confirm'//确认取消组件
    import CartAddModule from './cart_add'

    export default {
        data () {
            return {
                confirm:{
                    show:false,
                    text:'',
                    confirm () {},
                    cancel () {}
                },
                cartadd:{
                    show:false,
                },
                toast :{
                    show:false,//提示信息
                    text:'',//提示信息
                    type:'text',
                },
                goods:require('../../assets/images/goods.jpg'),//图片路径
                selecteAllState:true,
                result:[],
                total:{
                    price:0,
                    nowprice:0
                },
                editorStatus:true,//不是编辑状态
            };
        },
        components:{
            Toast,Confirm,CartAddModule
        },
        computed: {
            totalNowPrice () {
              let price = 0
                this.result.cartItemGroup.forEach(item => {
                  if (item['selected']) {
                    price += item.number * item.sku.nowprice
                  }
                })
                return price
            },
          },
        created (){
            //请求列表全部数据
            this.getAjax()
        },
        methods:{
            cartChange (){
                this.cartadd.show = true
            },
            createToast (text,type) {
              this.toast.show = true
              this.toast.text = text
              this.toast.type = type
            },
            linkIndex (){
                this.$route.router.go({ path: '/index'});
            },
            createConfirm (text, confirm, cancel) {
              this.confirm.show = true
              this.confirm.text = text
              this.confirm.confirm = confirm
              this.confirm.cancel = cancel
            },
            closeConfirm () {
              this.confirm.show = false
              this.confirm.text = ''
              this.confirm.confirm = () => {}
              this.confirm.cancel = () => {}
            },
            selecteItem (item) {
              item.selected = !item.selected
              this.checkSelect()
            },
            checkSelect () {
              let allSelected = true
                this.result.cartItemGroup.forEach(item => {
                  if (!item['selected']) {
                    allSelected = false
                  }
                })
              this.selecteAllState = allSelected
            },
            calcitemNum (step, obj) {
              //item.number += Math.floor(step)
              if(step == -1){
                  if(obj.number <= obj.sku.stock && obj.number > 1){
                      obj.number = parseInt(obj.number) - 1;
                  }
              }else{
                  if(obj.number < obj.sku.stock){
                      obj.number = parseInt(obj.number) + 1;
                  }
              }
            },
            editor (e){
                //切换编辑状态
                e.target.text = e.target.text == '编辑' ? '完成':'编辑'
                this.editorStatus = !this.editorStatus
            },
            selecteAll () {
              this.selecteAllState = !this.selecteAllState

                this.result.cartItemGroup.forEach(item => {

                  item['selected'] = this.selecteAllState

                })
            },
            //数据初始化
            initData () {
                this.result.cartItemGroup =[]
            },
            //请求列表全部数据
            getAjax () {
                this.initData()
                this.$http.get('cartlist.json')
                .then(response => {
                    let json = response.data

                    if (json && json.code == 1001) {
                        let result = json.result
                        result.cartItemGroup.map(item => {
                          item['selected'] = true
                        })
                        // 实时队列更新数据
                        this.result = result
                    }
              })
              .catch(err => {
                console.log(err)
              })
            },
            //删除商品
            delGoodEvent (item, shop,num) {
                num = num == -1 ? '' : num
                this.createConfirm('确定要删除这'+ num+'个商品吗', () => {
                   this.$http.get('cartlist.json')
                    .then(response => {
                        shop.$remove(item)
                    })
                    .catch(response => {
                      console.log(response)
                    })
                })
            },
            //删除全部商品 
            delGoodAllEvent (shop){
                let num = 0
                let selectedItem = ''

                if(this.selecteAllState){//全选
                    num = this.result.shopInfo.cartnum
                    this.delGoodEvent(shop,shop,num)

                }else{//部分选择

                    this.result.cartItemGroup.forEach(item => {//遍历被选择的商品
                      if (item['selected']) {
                        selectedItem.concat(item)
                        num ++
                      }
                    })

                    if(num == 0){
                        this.createToast('您还未选择要删除的商品','text')
                    }else {
                        this.delGoodEvent(selectedItem,shop,num)
                    }
                }
            }
        }
    }
</script>

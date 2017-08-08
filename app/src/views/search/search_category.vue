<!-- 商品分类 -->
<template>
    <div class="nav-wrap" :style="{ MinHeight : wrapheight +'px'}">
        <div v-for="item in result.sorts" class="nav-item" :class="{'active':active==$index}" @click="changeTab($index)">
            <span>{{item.name}}</span>
        </div>
    </div>

    <div class="nav-content" :style="{ MinHeight : wrapheight +'px'}">
        <ul class="clearfix" v-for="category in result.sorts" v-if="active == $index">
            <li v-for="categorycon in category.list" v-link="{name:'goodsResult'}">
                <a><img :src="categorycon.src"/></a>
                <span>{{categorycon.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import sorts from '../../../static/mock/sorts.json'


    export default {
        data () {
          return {
            wrapheight:'',
            result:[],
            active:0
            //图片路径
          }
        },

        created (){
            this.getAjax()
        },
        ready (){
            let _height = window.innerHeight
            let _width = window.innerWidth
            this.wrapheight = _height - 96
        },
        methods:{
            changeTab ($index){
                let self = this;
                self.active = $index;
            },
            getAjax () {//请求列表全部数据


              const self = this

              self.result = sorts.result;


              let successCallback =(response) => {

                    let json = response.data

                    if (json && json.code == 1001) {
                        let result = json.result
                        
                        // 实时队列更新数据
                        self.result = result

                    }
              }

              let errorCallback = (json)=> {
                //console.log(json)
              }

              self.$http.get('sorts.json').then(successCallback, errorCallback)
            }
        }
    };
</script>
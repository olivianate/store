<template>

  <!--导航组件-->
  <menu-module :count="count"></menu-module> 

  <div class="sorts_body search">

      <!--搜索组件-->
      <searchinput-module></searchinput-module>

      <div class="main" :style="{width:wrapwidth +'px'}">
      
          <!-- 缓存二级路由切换的页面 -->
          <router-view></router-view>

      </div>
  </div>
</template>

<script>

// 加载页面组件
import MenuModule from '../../components/menu'
import SearchinputModule from './search_input'

export default {
    data () {
        return {
            wrapwidth:'',
            count:1,
        };
    },
    components:{
        MenuModule,SearchinputModule
    },
    created (){
    },
    ready (){

        let _width = window.innerWidth
        this.wrapwidth = _width
    },
    methods : {
        
    }
};
</script>
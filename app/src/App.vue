<template>
  <div>
  	<!-- 页面加载loading -->
    <!-- <loading :show="loading.show" :text="loading.text"></loading> -->
    <!-- 一级路由切换的页面 -->
    <router-view></router-view>
  </div>
</template>
<style lang='scss'>
@import "src/assets/scss/basic";
@import "src/assets/scss/main";
</style>

<script>
  //加载公用小组件
  import Loading from './components/loading.vue'
  import store from './vuex/store'

  export default {
    store,

      data () {
        return {
          loading           : {
            show:false,
            text:'正在加载中...',
          },  //loading
        }
      },
      components:{
        Loading
      }
  }
</script>


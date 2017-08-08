<template>

    <!-- 二级路由切换的页面 -->
    <router-view :mobile.sync="mobile"></router-view>

</template>
<script>

export default {
	data (){
		return{
            mobile:'',
        }
	}

}
</script>

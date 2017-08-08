<template>
     <li v-if="show">
        <h4>购物商城系统</h4>
        <span class="ser_list_time">2016-09-13 11:20:20</span>
        <div class="ser_list_item_mai ser_list_item_xitong">
            <span class="ser_arrow"></span>
            <p class="ser_item_title">
                等待客服处理
            </p>
            <div class="ser_item_content ser_item_xitong">
                买家已申请客服介入处理，请等待处理结果！
            </div>
            <p class="ser_item_num">编号：2016071615879625</p>
        </div>
    </li>
</template>
<script>
    export default {
        props:{
            show: {
              type: Boolean,
              default: false
            }
          }
    }
</script>
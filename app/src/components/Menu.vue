<template>
  <footer class="ui-footer ui-footer-stable ui-border-t">
    <ul class="ui-tiled">
      <li v-for="menu in menulist" v-link="menu.url" :class="{'active':count==$index}">
        <i></i><div>{{menu.name}}</div>
      </li>
    </ul>
  </footer>
</template>

<script>
    export default{
        data () {
            return {
                menulist:[
                  {name:"精选",url:"/"},
                  {name:"分类",url:"/searchIndex"},
                  {name:"购物车",url:"/cart"},
                  {name:"我的",url:"/personal"}
                ],
            };
        },
        props:{
          count:{
            type: Number,
          },
        },
        methods:{
        }
    }
</script>

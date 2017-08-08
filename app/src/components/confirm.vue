<template>
<div class="ui-dialog" :class="{show : confirm.show}">
    <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
            <h4>{{confirm.text}}</h4>
        </div>
        <div class="ui-dialog-ft">
            <button type="button" @click="cancelEvent">取消</button>
            <button type="button" @click="confirmEvent">确定</button>
        </div>
    </div>        
</div>
</template>

<script>

  export default {
    replace:true,
    props:{
      confirm: {
        type: Object,
        default () {
          return {
            show:false,
            text:'',
            confirm () {},
            cancel () {}
          }
        }
      }
    },
    ready () {
      //document.addEventListener('click', this.maskClose)
    },
    destroy () {
      //document.removeEventListener('click', this.maskClose)
    },
    methods:{
      maskClose () {
        //关闭弹出窗
        this.confirm.show = false
      },
      cancelEvent () {
        this.confirm.show = false
        if (this.confirm.cancel) this.confirm.cancel()
      },
      //关闭弹出窗
      confirmEvent(){
        this.confirm.show = false
        if (this.confirm.confirm) this.confirm.confirm()
      }
    }
  }

</script>

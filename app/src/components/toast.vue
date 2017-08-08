<template>
<div class="ui-loading-block" :class="{ show : show}">
    <div class="ui-loading-cnt">
        <i class="ui-loading-bright" v-show="type !== 'text'"></i>
        <p v-if="text" v-html="text"></p>
        <p v-else><slot></slot></p>
    </div>
</div>



</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 3000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: {
      type: String,
      default: 'vux-fade'
    },
    width: {
      type: String,
      default: '7.6em'
    },
    text: String
  },
  computed: {
    toastClass () {
      return {
        'weui_toast_forbidden': this.type === 'warn',
        'weui_toast_cancel': this.type === 'cancel',
        'weui_toast_success': this.type === 'success',
        'weui_toast_text': this.type === 'text'
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('on-hide')
        }, this.time)
      }
    }
  }
}
</script>

<style scoped>
  .ui-loading-block .ui-loading-cnt{
    min-width: 130px;
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
    height: auto;
    padding: 10px;
  }
</style>


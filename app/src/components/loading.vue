<template>

  <div class="ui-loading-block" :class="{ show : show}">
      <div class="ui-loading-cnt">
          <i class="ui-loading-bright"></i>
          <p>{{text}}</p>
      </div>
  </div>

  <!-- <div id="BP_Loading" class="ui-loading-wrap" v-show="show"><p class="mask"><span></span></p></div> -->
</template>

<script>
  export default {
    replace:true,
    props:{
      show: Boolean,
      text: {
        type: String,
        default: 'Loading'
      },
    },
    ready(){
      
    },
    methods :{
    }
  }
</script>

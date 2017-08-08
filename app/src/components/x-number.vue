<template>
    <div class="edit-quantity" v-show="!readonly">
      <p class="btn-minus" :class="{'btn-disabled':disabledMin}">
        <a class="btn" @click="sub">-</a>
      </p>
      <p class="btn-input">
        <input v-model="value" :name="name" number :readonly="!fillable" pattern="[0-9]*"/>
      </p>
      <p class="btn-minus" :class="{'btn-disabled':disabledMax}">
          <a class="btn" @click="add">+</a>
      </p>

    </div>
     

</template>
<script>
export default {
  props: {
    min: Number,
    max: Number,
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: true
    },
    istrue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    disabledMin () {
      return typeof this.min === 'undefined' ? false : this.value <= this.min
    },
    disabledMax () {
      return typeof this.max === 'undefined' ? false : this.value >= this.max
    }
  },
  ready () {
  },
  watch: {
    value (newValue, old) {
      if (this.min && this.value < this.min) {
        this.value = this.min
      }
      if (this.max && this.value > this.max) {
        this.value = this.max
      }
      this.$emit('on-change', this.value)
    }
  },
  methods: {
    add () {
      if (!this.disabledMax) {
        this.value += this.step
      }
    },
    sub () {
      if (!this.disabledMin) {
        this.value -= this.step
      }
    }
  }
}
</script>


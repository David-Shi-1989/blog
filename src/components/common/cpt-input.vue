<template>
  <input class="sww-cpt-input" :type="type"
    :value="currentValue"
    @input="handleInput"
    @change="onInputChange"
  >
</template>

<script>
export default {
  data () {
    return {
      currentValue: ''
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    // text,number,tel,password
    type: {
      type: String,
      default: 'text'
    }
  },
  created () {
    this.currentValue = this.value
  },
  methods: {
    handleInput (evt) {
      let value = evt.target.value
      this.$emit('input', value)
      this.setCurrentValue(value)
    },
    setCurrentValue (val) {
      if (val === this.currentValue) return
      this.currentValue = val
    },
    onInputChange () {
      this.$emit('on-change', this.currentValue)
    }
  },
  watch: {
    value (newVal) {
      this.currentValue = newVal
    }
  }
}
</script>

<style scoped>
  input.sww-cpt-input {
    box-sizing: border-box;
    padding: 0.05rem 0.35rem;
    height: 1.2rem;
    line-height: 1.2rem;
    border-radius: 0.15rem;
    width: 100%;
    font-size: 0.7rem;
    color:#495660;
    background-color: #fff;
    background-image: none;
    cursor: text;
    transition: all .2s;
    border: 0.05rem solid #dddee1;
  }
  input.sww-cpt-input:focus{
    border-color: #2d8bf03b;
    box-shadow: 0 0 0.2rem #999;
  }
</style>

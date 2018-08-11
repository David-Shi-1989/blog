<template>
  <div id="sww_sidebar">
    RightSide
  </div>
</template>

<script>
require('~/script/blurr/jquery.blurr.min.js')
export default {
  name: 'SideBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
#sww_sidebar{
  width: 15rem;
  height: 100%;
  float:right;
  box-sizing: border-box;
  background-color: #fff;
  padding: 1rem;
}
</style>

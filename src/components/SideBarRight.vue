<template>
  <div id="ng_sidebar_right">
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
#ng_sidebar_right{
  width: 10rem;
  height: 100%;
  float:right;
  box-sizing: border-box;
  background-color: #f7f7f7;
}
</style>

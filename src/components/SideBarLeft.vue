<template>
  <div id="ng_sidebar">
    <div class="x-header">
    </div>
    <div class="x-header-bottom">

    </div>
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
    // $('.blur-bg').blurr({
    //   height: 300,
    //   sharpness: 40,
    //   offsetX: 0,
    //   offsetY: 0,
    //   callback: null
    // })
  }
}
</script>

<style scoped>
#ng_sidebar{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
}
#ng_sidebar > div{
  width:100%;
}
#ng_sidebar .x-header {
  height: var(--header-height);
  background-color: var( --header-bg);
}
</style>

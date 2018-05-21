<template>
  <div id="ng_sidebar">
    <div class="x-header">
      <span>David Shi</span>
      <i class="fa fa-bars"></i>
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
  position: relative;
  z-index: 20;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: rgba(0,0,0,.3) 0px 0px 4px;
}
#ng_sidebar > div{
  width:100%;
}
#ng_sidebar .x-header {
  height: var(--header-height);
  line-height: var(--header-height);
  vertical-align: middle;
  text-align: center;
  background-color: var(--header-bg);
  color: #fff;
}
#ng_sidebar .x-header span{
  margin-right: 1rem;
}
#ng_sidebar .x-header i{
  float: right;
  display: block;
  height: var(--header-height);
  line-height: var(--header-height);
  margin-right: 1rem;
  cursor: pointer;
}
</style>

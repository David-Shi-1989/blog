<template>
  <div id="app">
    <xSideBarLeft></xSideBarLeft>
    <div id="main_container" class="sww-clr-float">
      <xHeader></xHeader>
      <div id="main_container2">
        <xSideBarRight></xSideBarRight>
        <div style="height:100%;overflow:hidden;padding: 1rem;">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xHeader from '@/components/Header'
import xSideBarLeft from '@/components/SideBarLeft'
import xSideBarRight from '@/components/SideBarRight'
export default {
  name: 'App',
  components: {xHeader, xSideBarLeft, xSideBarRight}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
  height: 100%;
}
#main_container{
  height:100%;
  box-shadow:#444 2px 0px 6px;
  overflow: hidden;
}
.el-col, .el-row {
  height: 100%;
}
#main_container2{
  width: 100%;
  height: calc(100% - var(--header-height));
}
</style>

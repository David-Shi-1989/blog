<template>
  <div id="app">
    <xSideBarLeft></xSideBarLeft>
    <div id="main_container" class="sww-clr-float">
      <xHeader></xHeader>
      <div id="main_container2">
        <xSideBarRight></xSideBarRight>
        <div id="mainPage">
          <xBreadCrumb></xBreadCrumb>
          <router-view></router-view>
        </div>
        <div v-show="isShowLoading" id="sww_loading">Loading...</div>
      </div>
    </div>
    <xImageView></xImageView>
  </div>
</template>

<script>
import xHeader from '@/components/Header'
import xSideBarLeft from '@/components/SideBarLeft'
import xSideBarRight from '@/components/SideBarRight'
import xImageView from '@/components/image-view'
import xBreadCrumb from '@/components/bread-crumb'
export default {
  name: 'App',
  components: {xHeader, xSideBarLeft, xSideBarRight, xImageView, xBreadCrumb},
  data () {
    var isShowLoading = this.$store.getters.isLoading
    return {
      isShowLoading
    }
  }
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
  position: relative;
  z-index: 18;
}
#main_container2{
  width: 100%;
  height: calc(100% - var(--header-height));
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
}
#mainPage{
  position: relative;
  height:100%;
  overflow-x:hidden;
  overflow-y: auto;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f7f7f7;
  z-index: 90;
  scrollbar-arrow-color: red;
  scrollbar-face-color: green;
  -ms-scrollbar-face-color:green;
  scrollbar-track-color: yellow;
  scrollbar-highlight-color: blue;
}
#sww_loading{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  top:0;
  left: 0;
  z-index: 1000;
}
::-webkit-scrollbar{
  width: .2rem;
  background: rgba(0,0,0,0.1);
}
::-webkit-scrollbar-track{
  background-color: rgba(0,0,0,0.1);
}
::-webkit-scrollbar-thumb{
  background-color: rgba(0,0,0,0.6);
}
</style>

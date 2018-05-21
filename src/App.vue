<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <xHeader></xHeader>
      </el-col>
    </el-row>
    <el-row id="ng_main_container">
      <el-col :span="3">
        <xSideBar></xSideBar>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import xHeader from '@/components/Header'
import xSideBar from '@/components/SideBar'
export default {
  name: 'App',
  components: {xHeader, xSideBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height: 100%;
}
#ng_main_container{
  height: calc(100% - var(--header-height));
}
</style>

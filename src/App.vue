<template>
  <div id="app">
    <xSideBarLeft></xSideBarLeft>
    <div id="main_container">
      <xHeader></xHeader>
      <el-row>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
        <el-col :span="4">
          <xSideBarRight></xSideBarRight>
        </el-col>
      </el-row>
    </div>
    <!-- <el-row>
      <el-col :span="3">
        <xSideBarLeft></xSideBarLeft>
      </el-col>
      <el-col :span="21">
        <div id="main_container">
          <xHeader></xHeader>
          <el-row>
            <el-col :span="20">
              <router-view></router-view>
            </el-col>
            <el-col :span="4">
              <xSideBarRight></xSideBarRight>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row> -->
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
  text-align: center;
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
</style>

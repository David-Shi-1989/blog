<template>
  <div id="ng_sidebar_wrapper" :style="'width:' + (isSideBarOpen ? '9rem':'2.8rem')">
    <div id="ng_sidebar">
      <div class="x-header">
        <span v-if="isSideBarOpen">David Shi</span>
        <i :class="'fa fa-bars' + (isSideBarOpen?'':' rotate90')" @click="toggleSideBar" :style="{float:(isSideBarOpen?'right':'left')}"></i>
      </div>
      <div class="x-avatar">
        <img src="/static/image/avatar-colored-d.png">
      </div>
      <div class="x-menus">
        <ul>
          <li>
            <i class="fa fa-object-group"></i>
            <a href="javascript:void(0);">主页</a>
          </li>
          <li>
            <i class="fa fa-space-shuttle"></i>
            <a href="javascript:void(0);">博客</a>
            <span>8</span>
          </li>
          <li>
            <i class="fa fa-thermometer"></i>
            <a href="javascript:void(0);">照片</a>
          </li>
          <li>
            <i class="fa fa-tty"></i>
            <a href="javascript:void(0);">心情</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
require('~/script/blurr/jquery.blurr.min.js')
export default {
  name: 'SideBar',
  data () {
    return {
      isSideBarOpen: true
    }
  },
  methods: {
    toggleSideBar () {
      this.isSideBarOpen = !this.isSideBarOpen
    }
  }
}
</script>

<style scoped>
#ng_sidebar_wrapper{
  --wrapper-width-open: 9rem;
  --wrapper-width-close: 2.8rem;
  height: 100%;
  overflow: hidden;
  float: left;
  position: relative;
  z-index: 20;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: rgba(0,0,0,.2) -2px 0px 10px;
  transition: all .2s ease-in;
}
#ng_sidebar{
  width: var(--wrapper-width-open);
  height: 100%;
  position: relative;
  box-sizing: border-box;
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
  box-sizing: border-box;
}
#ng_sidebar .x-header span{
  margin-left: 1rem;
  float: left;
}
#ng_sidebar .x-header i{
  display: block;
  width: var(--wrapper-width-close);
  height: var(--header-height);
  line-height: var(--header-height);
  cursor: pointer;
  transition: all .2s;
}
.rotate90{
  transform: rotate(90deg);
}
#ng_sidebar .x-avatar {
  width: 100%;
  box-sizing: border-box;
}
#ng_sidebar .x-avatar img{
  width: 70%;
  margin: 2rem auto 1rem auto;
  border-radius: 50%;
  border:.05rem solid #EEE;
}
#ng_sidebar .x-menus{
  width: 100%;
  box-sizing: border-box;
  border-top: .05rem solid #eaeaea;
  padding-top: 1rem;
}
#ng_sidebar .x-menus ul {
  --menu-item-height:2rem;
  list-style: none;
}
#ng_sidebar .x-menus ul > li{
  height: var(--menu-item-height);
  line-height: var(--menu-item-height);
  vertical-align: middle;
  cursor: pointer;
  padding: 0 .3rem 0 0;
}
#ng_sidebar .x-menus ul > li:hover{
  background: rgba(103, 194, 58,.2);
}
#ng_sidebar .x-menus i{
  display: block;
  float: left;
  width:var(--wrapper-width-close);
  margin-right: .5rem;
  text-align: center;
  color:#aaa;
  height: var(--menu-item-height);
  line-height: var(--menu-item-height);
}
#ng_sidebar .x-menus a{
  text-decoration: none;
  color:#555;
  font-size: 1rem;
  float: left;
}
#ng_sidebar .x-menus span{
  --dot-width: .9rem;
  float: right;
  font-size: .6rem;
  background-color: #555;
  color:#fff;
  display: block;
  width:var(--dot-width);
  height: var(--dot-width);
  line-height: var(--dot-width);
  border-radius: 50%;
  margin-top: calc((var(--menu-item-height) - var(--dot-width))/2);
}
</style>

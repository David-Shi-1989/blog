<template>
  <div id="sww_sidebar_wrapper" :style="'width:' + (isSideBarOpen ? '9rem':'2.8rem')" class="sww-cannot-select">
    <div id="sww_sidebar">
      <div class="x-header">
        <span v-if="isSideBarOpen">David Shi</span>
        <i :class="'fa fa-bars' + (isSideBarOpen?'':' open')" @click="toggleSideBar" :style="{float:(isSideBarOpen?'right':'left')}"></i>
      </div>
      <div class="x-avatar">
        <img src="/static/image/avatar-colored-d.png">
      </div>
      <div class="x-menus">
        <span class="menu-active-bg" :style="{top:activeMenuIdx * 2 + 'rem'}"></span>
        <ul>
          <li v-for="(item,idx) in menusArr" :key="idx" :class="activeMenuIdx==idx?'active':''" @click="onMenuItemClick(idx)" :title="item.title">
            <i :class="item.icon"></i>
            <router-link :to="item.to">{{item.title}}</router-link>
            <span v-if="item.badge" class="badge">{{item.badge}}</span>
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
      isSideBarOpen: true,
      activeMenuIdx: 0,
      menusArr: this.$store.getters.getMenus
    }
  },
  methods: {
    onMenuItemClick (idx) {
      idx = parseInt(idx)
      if (!isNaN(idx) && idx > -1 && idx < this.menusArr.length) {
        this.activeMenuIdx = idx
      }
    },
    toggleSideBar () {
      this.isSideBarOpen = !this.isSideBarOpen
    }
  }
}
</script>

<style lang="less" scoped>
#sww_sidebar_wrapper{
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
  #sww_sidebar{
    width: var(--wrapper-width-open);
    height: 100%;
    position: relative;
    box-sizing: border-box;
    .x-header {
      height: var(--header-height);
      line-height: var(--header-height);
      vertical-align: middle;
      text-align: center;
      background-color: var(--header-bg);
      color: #fff;
      box-sizing: border-box;
      span{
        margin-left: 1rem;
        float: left;
      }
      i{
        display: block;
        width: var(--wrapper-width-close);
        height: var(--header-height);
        line-height: var(--header-height);
        cursor: pointer;
        transition: all .2s;
        &.open {
          transform: rotate(90deg);
        }
      }
    }
    .x-avatar {
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      img{
        width: 70%;
        margin: 2rem auto 1rem auto;
        border-radius: 50%;
        border:.05rem solid #EEE;
      }
    }
    .x-menus{
      position: relative;
      width: 100%;
      box-sizing: border-box;
      border-top: .05rem solid #eaeaea;
      --menu-item-height:2rem;
      .menu-active-bg{
        position: absolute;
        display: block;
        width: var(--wrapper-width-open);
        height: var(--menu-item-height);
        background: var(--header-bg2);
        left: 0;
        transition: top 0.2s ease-in-out;
        z-index: 49;
      }
      ul {
        list-style: none;
        position: relative;
        z-index: 50;
        & > li{
          height: var(--menu-item-height);
          line-height: var(--menu-item-height);
          vertical-align: middle;
          cursor: pointer;
          padding: 0 .3rem 0 0;
          &:hover{
            background: rgba(103, 194, 58,.1);
          }
          &.active {
            i, a {
              color: #eee;
            }
            span.badge{
              background-color: var(--color-info);
            }
          }
          i{
            display: block;
            font-size: .7rem;
            float: left;
            width:var(--wrapper-width-close);
            margin-right: .5rem;
            text-align: center;
            color:#aaa;
            height: var(--menu-item-height);
            line-height: var(--menu-item-height);
          }
          a{
            text-decoration: none;
            color:#555;
            font-size: .8rem;
            float: left;
          }
          span.badge{
            --dot-width: .9rem;
            text-align: center;
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
        }
      }
    }
  }
}
/*Menus*/
</style>

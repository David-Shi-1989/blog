<template>
  <div id="sww_header" class="sww-cannot-select">
    <div class="x-header">
      <div class="sww-menu-container">
        <ul class="sww-header-menus">
          <li v-for="(item,idx) in menusArr" :key="idx" :class="activeMenuIdx==idx?'active':''" @click="onMenuItemClick(idx)">
            <router-link :to="item.to">{{item.title}}</router-link>
          </li>
        </ul>
        <span class="sww-menu-active-border" :style="{left: (activeMenuIdx * 3 + 'rem')}"></span>
      </div>
      <div class="sww-header-btn-container">
        <ul>
          <li>
            <Dropdown trigger="click" @on-click="onThemeChange">
              <a class="drop-content" href="javascript:void(0)">
                <i class="fa fa-tachometer" title="换肤"></i>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem name="dark" :selected="skin=='dark'">Dark</DropdownItem>
                <DropdownItem name="light" :selected="skin=='light'">Light</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeMenuIdx: 0,
      menusArr: this.$store.getters.getMenus,
      skin: 'dark'
    }
  },
  created () {
    this.initActiveIdx()
  },
  methods: {
    initActiveIdx () {
      let path = this.$route.fullPath
      var idx = 0
      if (path === '/') {
        idx = 0
      } else {
        for (let i = 0; i < this.menusArr.length; i++) {
          if (this.menusArr[i].to !== '/' && path.indexOf(this.menusArr[i].to) > -1) {
            idx = i
            break
          }
        }
      }
      var me = this
      // 延迟0.5s赋值,有动态效果,提高用户体验
      setTimeout(function () {
        me.activeMenuIdx = idx
      }, 500)
    },
    onMenuItemClick (idx) {
      idx = parseInt(idx)
      if (!isNaN(idx) && idx > -1 && idx < this.menusArr.length) {
        this.activeMenuIdx = idx
      }
    },
    onThemeChange (val) {
      this.skin = val
    }
  }
}
</script>

<style lang="less" scoped>
#sww_header{
  position: relative;
  width: 100%;
  box-shadow: 0 0.1rem 0.1rem #999;
  z-index: 100;
  .x-header{
    height: var(--header-height);
    background-color: var(--header-bg2);
    padding: 0 1rem;
    display: grid;
    grid-template-columns: auto 30rem;
    .sww-menu-container{
      position: relative;
      @menu-item-width:3rem;
      .sww-menu-active-border{
        position: absolute;
        bottom: 0.2rem;
        width: @menu-item-width;
        height: 0.2rem;
        background-color: #fff;
        display: block;
        transition: left 0.3s ease-in-out;
      }
      ul.sww-header-menus{
        color: #ccc;
        line-height: var(--header-height);
        vertical-align: middle;
        font-size: 0.8rem;
        display: flex;
        & > li {
          width: @menu-item-width;
          text-align: center;
          box-sizing: border-box;
          &:hover {
            a{
              color:#eee;
            }
          }
          &.active {
            a{
              color: #fff;
            }
          }
          a {
            text-decoration: none;
            color: #aaa;
            transition: color 0.4s;
            display: block;
            width: 100%;
            height: calc(var(--header-height));
          }
        }
      }
    }
    .sww-header-btn-container {
      display: flex;
      justify-content: flex-end;
      & > ul {
        list-style: none;
        & > li {
          height: calc(var(--header-height));
          line-height: calc(var(--header-height));
          min-width: 2rem;
          text-align: center;
          .drop-content {
            color: #eee;
            text-decoration: none;
            cursor: pointer;
          }
        }
      }
    }
  }
}
/*顶部菜单*/

</style>

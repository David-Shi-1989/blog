<template>
  <div id="ng_header">
    <div class="x-header">
      <div class="sww-menu-container">
        <ul class="sww-header-menus sww-ul-sww-clr-float">
          <li v-for="(item,idx) in menusArr" :key="idx" :class="activeMenuIdx==idx?'active':''" @click="onMenuItemClick(idx)">
            <router-link :to="item.to">{{item.title}}</router-link>
          </li>
        </ul>
        <span class="sww-menu-active-border" :style="{left: (activeMenuIdx * 3 + 'rem')}"></span>
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
      menusArr: [
        {title: '主页', to: '/'},
        {title: '博客', to: '/'},
        {title: '照片', to: '/'},
        {title: '心情', to: '/'}
      ]
    }
  },
  methods: {
    onMenuItemClick (idx) {
      idx = parseInt(idx)
      if (!isNaN(idx) && idx > -1 && idx < this.menusArr.length) {
        this.activeMenuIdx = idx
      }
    }
  }
}
</script>

<style scoped>
#ng_header{
  width: 100%;
}
#ng_header .x-header{
  height: var(--header-height);
  background-color: var(--header-bg2);
  padding: 0 1rem;
}
/*顶部菜单*/
.sww-menu-container{
  position: relative;
  --menu-item-width:3rem;
}
.sww-header-menus{
  color: #ccc;
  line-height: var(--header-height);
  vertical-align: middle;
  font-size: 0.8rem;
}
.sww-header-menus > li {
  width: var(--menu-item-width);
  text-align: center;
  box-sizing: border-box;
}
.sww-header-menus > li a {
  text-decoration: none;
  color: #aaa;
  transition: color 0.4s;
  display: block;
  width: 100%;
  height: calc(var(--header-height));
}
.sww-header-menus > li:hover a{
  color:#eee;
}
.sww-header-menus > li.active a{
  color: #fff;
}
.sww-menu-active-border{
  position: absolute;
  bottom: 0.2rem;
  width: var(--menu-item-width);
  height: 0.2rem;
  background-color: #fff;
  display: block;
  transition: left 0.3s ease-in-out;
}
</style>

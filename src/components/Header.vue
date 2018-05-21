<template>
  <div id="ng_header">
    <div class="ng-header-logo">
      <i class="el-icon-picture" style="font-size:2rem;color:#FFF;" title="logo"></i>
      <!-- <img src="static/image/logo.png"> -->
    </div>
    <div class="ng-header-menuContainer">
      <ul class="ng-header-menus">
        <li v-for="(item,index) in menuArr" :key="index" @click="onMenu1Click(index)" :data-index="index">
          <!-- 一级菜单 -->
          <a v-if="item.children" href="javascript:void(0);">{{item.title}}</a>
          <router-link v-else :to="item.link" :title="item.title">{{item.title}}</router-link>
          <i v-if="item.children" :class="'ng-header-menus-arrow el-icon-arrow-down'+(item.isShowChildren?' ng-header-menus-arrow-open':'')"></i>
          <div v-if="item.children" class="ng-header-menus-children-container" :data-index="index">
            <p class="ng-menus-arrow-up"></p>
            <ul v-if="item.children" class="ng-header-menus-children" :data-index="index" tabindex="0" hidefocus="true" @blur="onMenu2Blur(index)">
              <li v-for="(item2,index2) in item.children" :key="index2">
                <!-- 二级菜单 -->
                <router-link :to="item2.link ? item2.link : '/404'" :title="item2.title">{{item2.title}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuArr: [
        {title: '主页', icon: 'el-icon-upload', link: '/'},
        {
          title: '旅游',
          icon: 'el-icon-upload',
          isShowChildren: false,
          children: [
            {title: '旅游11111', icon: 'el-icon-upload', link: '/tourism/1'},
            {title: '旅游2', icon: 'el-icon-upload', link: '/tourism/2'}
          ]
        },
        {
          title: '游记',
          icon: 'el-icon-upload',
          isShowChildren: false,
          children: [
            {title: '游记1', icon: 'el-icon-upload'},
            {title: '游记2', icon: 'el-icon-upload'}
          ]
        },
        {title: '小视频', icon: 'el-icon-upload', link: '/video'}
      ]
    }
  },
  methods: {
    onMenu1Click (index) {
      console.log('onMenu1Click')
      if (parseInt(index) === parseInt(this.getCurrentOpenMenu2Index())) {
        return
      }
      this.clearAllMenu2Contaienr()
      this.openMenu2Container(index)
    },
    onMenu2Blur (index) {
      this.clearAllMenu2Contaienr()
    },
    getMenu2ContainerByIndex (index) {
      return $('.ng-header-menus-children-container[data-index=\'' + index + '\']')
    },
    getMenu2ContainerHeight (index) {
      let menu2ItemSize = this.menuArr[index].children.length
      return menu2ItemSize * 1.6 + 0.6 + 0.3
    },
    getCurrentOpenMenu2Index () {
      for (let i = 0; i < this.menuArr.length; i++) {
        if (this.menuArr[i].isShowChildren) {
          return i
        }
      }
      return -1
    },
    clearAllMenu2Contaienr () {
      for (let i = 0; i < this.menuArr.length; i++) {
        if (this.menuArr[i].isShowChildren) {
          this.menuArr[i].isShowChildren = false
          this.closeMenu2Container(i)
        }
      }
    },
    openMenu2Container (index) {
      console.log('openMenu2Container' + index)
      let el
      if (!isNaN(index)) {
        el = this.getMenu2ContainerByIndex(index)
      } else {
        el = index
      }
      if (el.length) {
        this.menuArr[index].isShowChildren = true
        el.animate({
          height: this.getMenu2ContainerHeight(index) + 'rem'
        }, 50, function () {
          this.lastElementChild.focus()
        })
      }
    },
    closeMenu2Container (index) {
      console.log('closeMenu2Container' + index)
      let el
      if (!isNaN(index)) {
        el = this.getMenu2ContainerByIndex(index)
      } else {
        el = index
      }
      if (el.length) {
        el.animate({
          height: 0
        }, 50)
      }
    }
  }
}
</script>

<style scoped>
#ng_header{
  width: 100%;
  height: var(--header-height);
  line-height: var(--header-height);
  vertical-align: middle;
  background-color: #009cf7;
}
#ng_header .ng-header-logo {
  box-sizing: border-box;
  width: 4rem;
  height: 100%;
  padding-top: .5rem;
  float: left;;
}
#ng_header .ng-header-logo img{
  width:100%;
}

#ng_header .ng-header-menuContainer{
  float: right;
  margin-right: 5rem;
  box-sizing: border-box;
  height: var(--header-height);
  line-height: var(--header-height);
}
/**一级菜单**/
#ng_header ul.ng-header-menus{
  list-style: none;
  font-size: .78rem;
  box-sizing: border-box;
  height: var(--header-height);
  line-height: var(--header-height);
}
#ng_header ul.ng-header-menus > li {
  float: left;
  box-sizing: border-box;
  height: calc(var(--header-height) - .7rem);
  line-height: calc(var(--header-height) - .7rem);
  margin-right: 1.5rem;
  color: #dee3e6;
  cursor: pointer;
  margin-top: .5rem;
  position: relative;
}
#ng_header ul.ng-header-menus > li.active{
  border-bottom: .2rem #fff solid;
  color: #f0f9fe;
}
#ng_header ul.ng-header-menus > li:last-child{
  margin-right: 0;
}
#ng_header ul.ng-header-menus > li a{
  text-decoration: none;
  color: #f0f9fe;
}
.ng-header-menus-arrow{
  transition: all .25s ease-in-out;
}
.ng-header-menus-arrow.ng-header-menus-arrow-open{
  transform: rotate(90deg);
}
/**二级菜单**/
#ng_header ul.ng-header-menus > li div.ng-header-menus-children-container{
  position: absolute;
  z-index: 9998;
  outline: none;
  margin-top: .6rem;
  transition: all .2s;
  height: 0;
  overflow: hidden;
}
#ng_header ul.ng-header-menus > li ul.ng-header-menus-children{
  list-style: none;
  background-color: #009cf7;
  box-sizing: border-box;
  border-radius: .1rem;
  padding: .3rem 0;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.3);
}
.ng-menus-arrow-up{
  width:0;
  height: 0;
  margin: 0 auto;
  border-left: .3rem solid transparent;
  border-right: .3rem solid transparent;
  border-bottom: .3rem solid #009cf7;
}
#ng_header ul.ng-header-menus > li ul.ng-header-menus-children > li{
  padding: 0 .6rem;
  word-break: keep-all;
  height: 1.6rem;
  line-height: 1.6rem;
}
#ng_header ul.ng-header-menus > li ul.ng-header-menus-children > li:hover{
  background: #00def7;
  color:#333;
}
#ng_header ul.ng-header-menus > li ul.ng-header-menus-children > li a{
  color: #f0f9fe;
}
</style>

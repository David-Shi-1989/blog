<template>
  <div class="sww-cpt-bc sww-cannot-select">
    <ul class="sww-ul-clr-float">
      <li v-for="(item,idx) in arr" :key="idx">
        <router-link v-if="item.url&&idx<arr.length-1" :class="['sww-cpt-bc-link', 'sww-cpt-bc-link-enable']" :to="item.url">{{item.text}}</router-link>
        <span v-else class="sww-cpt-bc-link">{{item.text}}</span>
        <i v-if="idx<arr.length-1" class="fa fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [],
      ROUTER_LIST: {
        'article': {
          title: '文章',
          defaultSubTitle: '某文章',
          subs: {
            add: '写文章'
          }
        },
        'album': {
          title: '相册',
          subs: {
          }
        },
        'post': {
          title: '状态',
          subs: {
          }
        },
        'demo': {
          title: '作品',
          subs: {
          }
        }
      }
    }
  },
  created () {
    this.updateBreadCrumbOnRouterChange()
  },
  methods: {
    updateBreadCrumbOnRouterChange () {
      this.arr = [{text: '首页', url: '/'}]
      let path = this.$route.path
      if (path === '/') {
        // do nothing
      } else {
        let pathArr = this.$route.path.split('/').filter(function (item) {
          return (item.trim().length > 0)
        })
        let route1 = this.ROUTER_LIST[pathArr[0]]
        if (route1) {
          this.arr.push({text: route1.title, url: '/' + pathArr[0]})
          if (pathArr.length > 1) {
            let route2 = route1.subs[pathArr[1]]
            if (route2) {
              this.arr.push({text: route2})
            } else {
              this.arr.push({text: route1.defaultSubTitle})
            }
          }
        } else {
          throw Error('Need Update Router in bread-crumb')
        }
      }
    }
  },
  computed: {
    listenRouterChange () {
      return this.$store.getters.getRouterAfterChange
    }
  },
  watch: {
    listenRouterChange () {
      this.updateBreadCrumbOnRouterChange()
    }
  }
}
</script>

<style scoped>
.sww-cpt-bc{
  width: 100%;
  font-size: 0.65rem;
}
.sww-cpt-bc .sww-cpt-bc-link{
  text-decoration: none;
  line-height: 1rem;
}
.sww-cpt-bc .sww-cpt-bc-link.sww-cpt-bc-link-enable {
  color: var(--color-linkable);
}
.sww-cpt-bc i.fa{
  margin: 0 0.5rem;
}
</style>

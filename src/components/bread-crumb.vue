<template>
  <div class="sww-cpt-bc">
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
      arr: []
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
        switch (pathArr[0]) {
          case 'blog':
            this.arr.push({text: '博客', url: '/blog'})
            if (pathArr.length > 1) {
              this.arr.push({text: pathArr[1]})
            }
            break
          case 'album':
            this.arr.push({text: '相册', url: '/album'})
            if (pathArr.length > 1) {
              this.arr.push({text: pathArr[1]})
            }
            break
          case 'demo':
            this.arr.push({text: '作品', url: '/demo'})
            if (pathArr.length > 1) {
              this.arr.push({text: pathArr[1]})
            }
            break
          default:
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

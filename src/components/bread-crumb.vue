<template>
  <div class="sww-cpt-bc">
    <router-link to="/" class="sww-cpt-bc-link sww-cpt-bc-link-enable">首页</router-link><i class="fa fa-angle-right"></i>
    <router-link to="/blog" class="sww-cpt-bc-link sww-cpt-bc-link-enable">博客</router-link><i class="fa fa-angle-right"></i>
    <span class="sww-cpt-bc-link">item1</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    listenRouterChange () {
      return this.$store.getters.getRouterAfterChange
    }
  },
  watch: {
    listenRouterChange () {
      debugger
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
}
.sww-cpt-bc .sww-cpt-bc-link.sww-cpt-bc-link-enable {
  color: var(--color-linkable);
}
.sww-cpt-bc i.fa{
  margin: 0 0.5rem;
}
</style>

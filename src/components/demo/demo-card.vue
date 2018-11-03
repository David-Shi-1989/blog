<template>
  <div class="sww-demo-wrap">
    <router-link class="sww-demo-title" :to="'/demo/'+id">{{title}}</router-link>
    <p class="sww-demo-count"><span>{{count}}</span>张</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '【未命名】'
    },
    count: {
      type: Number,
      default: 0
    },
    id: {
      type: [String, Number],
      default: '123'
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.sww-demo-title {
  font-size: 0.8rem;
  font-weight: bolder;
  color:var(--color-linkable);
  height: 1.5rem;
  line-height: 1.5rem;
  text-decoration: none;
}
.sww-demo-count{
  font-size: 0.6rem;
  color:var(--color-text-4);
  height: 1rem;
  line-height: 1rem;
}
.sww-demo-count span{
  margin-right: 0.15rem;
}
</style>

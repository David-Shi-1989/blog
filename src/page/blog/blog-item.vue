<template>
  <div class="x-main">
    <div class="sww-page-header">
      <span>{{this.id}}</span>
    </div>
    <div class="sww-page-main">
      <div class="sww-page-main-info">
        <span><i class="fa fa-calendar"></i>2017-10-22 10:32:10</span>
        <span><i class="fa fa-folder-open"></i>CSS技巧</span>
        <span class="sww-css-tags"><i class="fa fa-tags"></i><span>前端</span><span>CSS</span></span>
        <span><i class="fa fa-eye"></i>123</span>
        <span><i class="fa fa-heart"></i>21</span>
      </div>
      <div class="sww-blog-item-content">Content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>
.sww-blog-item-content{
  color:#444;
  font-size: 0.7rem;
}
</style>

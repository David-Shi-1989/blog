<template>
  <div class="x-main">
    <div class="sww-page-header">
      <span>{{this.id}}</span>
    </div>
    <div class="sww-page-main">
      <div class="sww-blog-item-info">
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
.sww-blog-item-info{
  color: #888;
  font-size: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 0.05rem solid #eee;
  box-sizing: border-box;
}
.sww-blog-item-info > span{
  display: inline-block;
  margin-right: 1rem;
}
.sww-blog-item-info > span i{
  margin-right: 0.3rem;
}
.sww-blog-item-info > span.sww-css-tags > span{
  padding: 0.05rem 0.2rem;
  margin-right: 0.3rem;
  background-color: #888;
  color:#fff;
  cursor: pointer;
}
.sww-blog-item-content{
  color:#444;
  font-size: 0.7rem;
}
</style>

<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header">
      <span>{{this.title}}</span>
    </div>
    <div class="sww-page-main">
      <div class="sww-page-main-info">
        <span><i class="fa fa-calendar"></i>2017-10-22 10:32:10</span>
        <span><i class="fa fa-folder-open"></i>CSS技巧</span>
        <span class="sww-css-tags"><i class="fa fa-tags"></i><span>前端</span><span>CSS</span></span>
        <span><i class="fa fa-eye"></i>123</span>
        <span><i class="fa fa-heart"></i>21</span>
      </div>
      <div class="sww-article-item-content" v-html="html"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data () {
    return {
      id: null,
      title: null,
      html: null,
      createTime: null,
      isSelf: false,
      isTop: false,
      readCount: 0,
      commentCount: 0,
      updateTime: null,
      classId: null,
      isEnable: false
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getArticle()
  },
  methods: {
    getArticle () {
      var me = this
      if (this.id) {
        this.$axios({
          method: 'GET',
          url: `/api/article/${this.id}`
        }).then(res => {
          if (res && res.data) {
            me.fetchData(res.data.data)
          }
        })
      }
    },
    fetchData (data) {
      this.title = data.article_title
      this.html = data.article_content
      this.createTime = data.article_create_time
      this.isSelf = data.article_is_self > 0
      this.isTop = data.article_is_top > 0
      this.readCount = data.article_read_count
      this.commentCount = data.article_comment_count
      this.updateTime = data.article_update_time
      this.classId = data.article_class_id
      this.isEnable = data.is_enable
    }
  }
}
</script>

<style scoped>
.sww-article-item-content{
  color: var(--color-text-2);
  font-size: 0.7rem;
}
</style>

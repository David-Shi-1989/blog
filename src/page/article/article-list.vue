<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <ButtonGroup>
        <Button icon="ios-color-wand-outline" @click="onAddArticle">写文章</Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="ios-color-filter-outline"></Button>
      </ButtonGroup>
    </div>
    <div class="sww-page-main sww-clr-float">
      <ul class="sww-article-list-c2">
        <li v-for="(item,index) in articleList" :key="index" :class="(item.article_is_self==0?'sww-article-type-0':'sww-article-type-1') + ' sww-clr-float'">
          <div :class="['sww-article-span','sww-article-from','sww-article-from-'+(item.article_is_self)]">{{(item.article_is_self==0?'转载':'原创')}}</div>
          <div><router-link :to="'/article/'+item.article_id" class="sww-article-span sww-article-title sww-text-ellipsis" :title="item.article_title">{{item.article_title}}</router-link></div>
          <div class="sww-article-span sww-article-datetime">{{(new Date(item.article_create_time)).format(dateformat)}}</div>
        </li>
      </ul>
      <div class="sww-float-right sww-page-tool">
        <Page :total="total" size="small" :current="curPage" show-total @on-change="onPageChange"/>
        <!-- <cptPaging v-model="dataCount" @currentChange="onPagingCurrentChange"></cptPaging> -->
      </div>
    </div>
  </div>
</template>

<script>
import cptPaging from '@/components/common/cpt-paging'
export default {
  components: {cptPaging},
  data () {
    return {
      dateformat: 'yyyy/MM/dd hh:mm',
      articleList: [],
      total: 0,
      curPage: 1
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle (page) {
      this.$axios({
        method: 'GET',
        url: '/api/article/list',
        params: {
          page: page || this.curPage
        }
      }).then(res => {
        if (res && res.data) {
          this.articleList = res.data.list
          this.total = res.data.total
        }
      })
    },
    onPageChange (page) {
      this.curPage = page
      this.getArticle()
    },
    onPagingCurrentChange (newVal, oldVal) {
      console.log('paging current change to ' + newVal)
    },
    onAddArticle () {
      this.$router.push({name: 'addArticle'})
    }
  }
}
</script>

<style lang="less" scoped>
.sww-page-wrap {
  position: relative;
  ul.sww-article-list-c2{
    list-style: none;
    & > li {
      vertical-align: middle;
      font-size: 0.7rem;
      @line-height: 1.8rem;
      height: @line-height;
      line-height: @line-height;
      padding: 0 .7rem;
      display: grid;
      grid-template-columns: 40px auto 150px;
      border-bottom: 1px solid var(--color-border);
      .sww-article-span {
        height: @line-height;
        line-height: @line-height;
        color:var(--color-text-2);
        transition: all 0.3s;
      }
      .sww-article-from{
        font-size: 0.5rem;
        width: 1.5rem;
        color: #fff;
        text-align: center;
        @from-height: 0.8rem;
        height: @from-height;
        line-height: @from-height;
        margin-top: (@line-height - @from-height)/2;
        /*转载*/
        &.sww-article-from-0{
          background-color: var(--color-warning);
        }
        /*原创*/
        &.sww-article-from-1{
          background-color: var(--color-success);
        }
      }
      .sww-article-title {
        display: inline-block;
        text-decoration: none;
        color: var(--color-linkable);
        padding: 0 .4rem;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .sww-article-datetime{
        width:7rem;
        text-align: right;
      }
    }
  }
  .sww-page-tool {
    position:absolute;
    bottom:1rem;
    right:1rem;
  }
}
</style>

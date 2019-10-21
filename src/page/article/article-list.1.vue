<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <span>7分类</span><span>71篇</span>
    </div>
    <div class="sww-page-main sww-clr-float">
      <ul class="sww-article-list-c2">
        <li v-for="(item,index) in articleList" :key="index" :class="(item.type==0?'sww-article-type-0':'sww-article-type-1') + ' sww-clr-float'">
          <span :class="['sww-article-span','sww-article-from','sww-article-from-'+(item.type)]">{{(item.type==0?'转载':'原创')}}</span>
          <router-link :to="'/article/'+item.id" class="sww-article-span sww-article-title sww-text-ellipsis" :title="item.title">{{item.title}}</router-link>
          <span class="sww-article-span sww-article-datetime">{{(new Date(item.createTime)).format(dateformat)}}</span>
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
      --line-height: 1.5rem;
      height: var(--line-height);
      line-height: var(--line-height);
      cursor: pointer;
      padding: 0 .7rem;
      &:hover {
        background-color: #e8e8e8;
        .sww-article-datetime{
          color: var(--color-text-4);
          .sww-article-title{
            text-decoration: underline;
          }
        }
      }
      .sww-article-span {
        display: block;
        height: var(--line-height);
        line-height: var(--line-height);
        color:var(--color-text-1);
        transition: all 0.3s;
      }
      .sww-article-from{
        float: left;
        font-size: 0.5rem;
        width: 1.5rem;
        color: #fff;
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
        margin: 0.35rem 0.3rem 0 0;
        /*转载*/
        &.sww-article-from-0{
          background-color: var(--color-warning);
        }
        /*原创*/
        &.sww-article-from-1{
          background-color: var(--color-success);
        }
      }
      .sww-article-title{
        float: left;
        width: calc(100% - 1.5rem - 7rem - 1rem);
        text-decoration: none;
        color: var(--color-linkable);
      }
      .sww-article-datetime{
        float: right;
        color: #ccc;
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

<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <span>7分类</span><span>71篇</span>
    </div>
    <div class="sww-page-main sww-clr-float">
      <ul class="sww-blog-list-c2">
        <li v-for="(item,index) in blogList" :key="index" :class="(item.type==0?'sww-blog-type-0':'sww-blog-type-1') + ' sww-clr-float'">
          <span :class="['sww-blog-span','sww-blog-from','sww-blog-from-'+(item.type)]">{{(item.type==0?'转载':'原创')}}</span>
          <router-link :to="'/blog/'+item.id" class="sww-blog-span sww-blog-title sww-text-ellipsis" :title="item.title">{{item.title}}</router-link>
          <span class="sww-blog-span sww-blog-datetime">{{(new Date(item.createTime)).format(dateformat)}}</span>
        </li>
      </ul>
      <div class="sww-float-right" style="margin-top:0.5rem;">
        <cptPaging v-model="dataCount" @currentChange="onPagingCurrentChange"></cptPaging>
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
      blogList: [
        {
          id: '9018-827d-sk13-98sk',
          title: 'Title1',
          author: 'David',
          type: 1,
          createTime: 1534297924817,
          description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
          tags: [
            {name: 'HTML', id: 1},
            {name: 'VUE', id: 2},
            {name: 'CSS', id: 3}
          ]
        },
        {
          id: '1y27-0ls9-skzp-02kz',
          title: 'Title2',
          author: 'David',
          type: 0,
          createTime: 1534297924817,
          description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
          tags: [
            {name: 'HTML', id: 1},
            {name: 'VUE', id: 2},
            {name: 'CSS', id: 3}
          ]
        },
        {
          id: '198s-1pqi-sj9x-9s91',
          title: '很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题',
          author: 'David',
          type: 1,
          createTime: 1534297924817,
          description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
          tags: [
            {name: 'HTML', id: 1},
            {name: 'VUE', id: 2},
            {name: 'CSS', id: 3}
          ]
        },
        {
          id: 'ya71-zmv9-02nc-oz91-03k1',
          title: 'Title2',
          author: 'David',
          type: 1,
          createTime: 1534297924817,
          description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
          tags: [
            {name: 'HTML', id: 1},
            {name: 'VUE', id: 2},
            {name: 'CSS', id: 3}
          ]
        }
      ],
      dataCount: 1112
    }
  },
  methods: {
    onPagingCurrentChange (newVal, oldVal) {
      console.log('paging current change to ' + newVal)
    }
  }
}
</script>

<style scoped>
.sww-page-wrap {
  position: relative;
}
.sww-blog-list-c2{
  list-style: none;
}
.sww-blog-list-c2 > li {
  vertical-align: middle;
  font-size: 0.7rem;
  --line-height: 1.5rem;
  height: var(--line-height);
  line-height: var(--line-height);
  cursor: pointer;
}
.sww-blog-list-c2 > li:hover .sww-blog-datetime{
  color: var(--color-text-4);
}
.sww-blog-list-c2 > li:hover .sww-blog-title{
  text-decoration: underline;
}
.sww-blog-list-c2 > li > .sww-blog-span {
  display: block;
  height: var(--line-height);
  line-height: var(--line-height);
  color:var(--color-text-1);
  transition: all 0.3s;
}
.sww-blog-list-c2 > li > .sww-blog-from{
  float: left;
  font-size: 0.5rem;
  width: 1.5rem;
  color: #fff;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0.35rem 0.3rem 0 0;
}
/*转载*/
.sww-blog-list-c2 > li > .sww-blog-from.sww-blog-from-0{
  background-color: var(--color-warning);
}
/*原创*/
.sww-blog-list-c2 > li > .sww-blog-from.sww-blog-from-1{
  background-color: var(--color-success);
}
.sww-blog-list-c2 > li .sww-blog-title{
  float: left;
  width: calc(100% - 1.5rem - 7rem - 1rem);
  text-decoration: none;
  color: var(--color-linkable);
}
.sww-blog-list-c2 > li .sww-blog-datetime{
  float: right;
  color: #ccc;
  width:7rem;
}
</style>

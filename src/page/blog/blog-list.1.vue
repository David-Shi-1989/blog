<template>
  <div class="x-main">
    <div class="sww-page-header">
      <span>7分类</span><span>71篇</span>
    </div>
    <div class="sww-page-main">
      <ul class="sww-blog-list-c2">
        <li v-for="(item,index) in blogList" :key="index" :class="(item.type==0?'sww-blog-type-0':'sww-blog-type-1') + ' sww-clr-float'">
          <span :class="['sww-blog-span','sww-blog-from','sww-blog-from-'+(item.type)]">{{(item.type==0?'转载':'原创')}}</span>
          <router-link :to="'/blog/'+item.id" class="sww-blog-span sww-blog-title sww-text-ellipsis" :title="item.title">{{item.title}}</router-link>
          <span class="sww-blog-span sww-blog-datetime">{{(new Date(item.createTime)).format(dateformat)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
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
      ]
    }
  }
}
</script>

<style scoped>
.x-main {
  position: relative;
}
ul.sww-blog-list-container{
  /* width: 50rem; */
  margin: 0 auto;
}
ul.sww-blog-list-container > li {
  --font-size:0.7rem;
  background-color: #fff;
  padding:0.7rem 0;
  box-sizing: border-box;
  border: 0.05rem solid #e8e8e8;
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 1rem;
}
/*原创*/
ul.sww-blog-list-container > li.sww-blog-list-item.item0 span.bg{
  border-color: transparent var(--color-error) transparent transparent;
}
/*转载*/
ul.sww-blog-list-container > li.sww-blog-list-item.item1 span.bg{
  border-color: transparent var(--color-info) transparent transparent;
}
ul.sww-blog-list-container > li:hover{
  /* box-shadow: 0 0 0.1rem #999; */
}
ul.sww-blog-list-container > li .sww-blog-item-info{
  margin-top: 0.2rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
}
ul.sww-blog-list-container > li .sww-blog-item-info > div{
  float: left;
  width: 33.333%;
  height: 1rem;
  line-height: 1rem;
}
ul.sww-blog-list-container > li .header{
  position: relative;
  height: 2rem;
  line-height: 2rem;
}
ul.sww-blog-list-container > li .header .title{
  height: 2rem;
  line-height: 2rem;
  color: #444;
  display: block;
  width: calc(100% - 5rem);
  float: left;
  box-sizing: border-box;
  padding: 0 2rem;
}
ul.sww-blog-list-container > li .header .tagContainer{
  float: right;
  margin-top: -0.7rem;
  margin-right: 2rem;
  position: relative;
  width: 3rem;
  height: 3rem;
}
ul.sww-blog-list-container > li .header .tagContainer p{
  line-height: 1rem;
  text-align: center;
  position: relative;
  z-index: 90;
  top:0.2rem;
  right: -2.8rem;
  color:#fff;
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
}
ul.sww-blog-list-container > li .header .tagContainer span.bg{
  display: block;
  position: absolute;
  width:0;
  height: 0;
  border-width: 0 2.5rem 2.5rem;
  border-style: solid;
  /* border-color: transparent #888 transparent transparent; */
  top:0;
  left: 0;
  z-index: 89;
}
ul.sww-blog-list-container > li i{
  font-size: var(--font-size);
  margin-right: 0.3rem;
  color: #777;
}
ul.sww-blog-list-container > li .author,
ul.sww-blog-list-container > li .tagContainer,
ul.sww-blog-list-container > li .time{
  font-size: var(--font-size);
  color: #777;
}
ul.sww-blog-list-container > li .content{
  height: 4rem;
  font-size: 0.7rem;
  text-indent: 1.3rem;
  padding: 0.2rem 0.5rem;
  border-color: #ccc;
  border-style: dashed;
  border-top-width: 0.05rem;
  border-bottom-width: 0.05rem;
  border-right-width: 0;
  border-left-width: 0;

}
ul.sww-blog-list-container > li .tags{
  padding: 0 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);

}
ul.sww-blog-list-container > li .tags > span{
  font-size: 0.6rem;
  display: inline-block;
  color:#555;
  padding: 0.05rem 0.2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 0.05rem solid #ccc;
  transition: all 0.3s;
}
ul.sww-blog-list-container > li .tags > span:hover{
  color:var(--color-info);
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
  color: #777;
}
.sww-blog-list-c2 > li:hover .sww-blog-title{
  text-decoration: underline;
}
.sww-blog-list-c2 > li > .sww-blog-span {
  display: block;
  height: var(--line-height);
  line-height: var(--line-height);
  color:#222;
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
}
.sww-blog-list-c2 > li .sww-blog-datetime{
  float: right;
  color: #ccc;
  width:7rem;
}
</style>

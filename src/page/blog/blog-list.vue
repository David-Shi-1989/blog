<template>
  <div class="x-main">
    <h2>Blog List</h2>
    <ul class="sww-blog-list-container sww-ul-sww-clr-float">
      <li v-for="(item,index) in blogList" :key="index">
        <h4 class="title">{{item.title}}</h4>
        <div class="sww-blog-item-info sww-clr-float">
          <div><p class="author"><i class="fa fa-user-circle"></i>{{item.author}}</p></div>
          <div><p><i class="fa fa-calendar"></i><span class="date">{{(new Date(item.createTime)).format('yyyy/MM/dd')}}</span></p></div>
          <div><p><i class="fa fa-clock-o"></i><span class="time">{{(new Date(item.createTime)).format('hh/mm')}}</span></p></div>
        </div>
        <p class="content">{{item.description}}</p>
        <div class="tags">
          <span v-for="(tagItem,tagIdx) in item.tags" :key="tagIdx">{{tagItem.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      blogList: [
        {
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
        }
      ]
    }
  }
}
</script>

<style scoped>
ul.sww-blog-list-container{
  width: 100%;
}
ul.sww-blog-list-container > li {
  width: 20rem;
  --border-radius: 0.3rem;
  --font-size:0.7rem;
  background-color: #fff;
  box-sizing: border-box;
  border: 0.05rem solid #e8e8e8;
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  transition: all 0.2s;
  cursor: pointer;
}
ul.sww-blog-list-container > li:hover{
  box-shadow: 0 0 0.1rem #999;
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
ul.sww-blog-list-container > li .title{
  height: 2rem;
  line-height: 2rem;
  border-bottom: 0.05rem dashed #ddd;
  color: #232323;
  padding: 0 0.5rem;

}
ul.sww-blog-list-container > li i{
  font-size: var(--font-size);
  margin-right: 0.3rem;
  color: #777;
}
ul.sww-blog-list-container > li .author,
ul.sww-blog-list-container > li .date,
ul.sww-blog-list-container > li .time{
  font-size: var(--font-size);
  color: #777;
}
ul.sww-blog-list-container > li .content{
  font-size: 0.7rem;
  text-indent: 1.3rem;
  padding: 0.2rem 0.5rem;
  border-color: #ccc;
  border-style: solid;
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
ul.sww-blog-list-container > li .tags::before{
  content: '标签:';
  font-size: 0.7rem;
  margin-right: 0.4rem;
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
</style>

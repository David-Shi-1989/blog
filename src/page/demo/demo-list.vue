<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <span>18作品</span><span>520281行代码</span>
    </div>
    <div class="sww-page-main">
      <ul class="sww-album-ul">
        <li v-for="(item,idx) in list" :key="idx">
          <demoCard
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :star="item.star"></demoCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import demoCard from '@/components/demo/demo-card'
export default {
  components: {demoCard},
  data () {
    return {
      list: [
        {id: 'kops', title: '排序算法', description: '动态展示快排的过程和复杂度', img: '', star: 4.2},
        {id: '12', title: '佣金计算', description: '利用Nodejs读取excel表格，进行计算，得到业务员的佣金结果', img: '', star: 3},
        {id: 'kosdps', title: '其他', description: '15', img: '', star: 2.8},
        {id: '123', title: '其他', description: '15', img: '', star: 5},
        {id: 'kod12sdps', title: '其他', description: '15', img: '', star: 5.6},
        {id: 'rrqew', title: '其他', description: '15', img: '', star: 0.6},
        {id: 'kod12sdps', title: '其他', description: '15', img: '', star: 0}
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.sww-album-ul {
  list-style: none;
  & >li {
    display: inline-block;
    margin-right: .5rem;
    margin-bottom: .5rem;
  }
}
</style>

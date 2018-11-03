<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <span>18作品</span><span>520281行代码</span>
    </div>
    <div class="sww-page-main">
      <ul class="sww-album-ul sww-clr-float">
        <li v-for="(item,idx) in list" :key="idx">
          <demoCard
            :id="item.id"
            :title="item.title"
            :count="item.count"></demoCard>
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
        {id: 'kops', title: '排序算法', count: 15, img: ''}
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped>
</style>

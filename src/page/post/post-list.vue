<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <span>58条说说</span><span>375个昼夜</span>
    </div>
    <div class="">
      <ul>
        <li>
          <xPostCard></xPostCard>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import xPostCard from '@/components/post/post-card'
export default {
  components: {xPostCard},
  data () {
    return {
      list: [
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped>
</style>

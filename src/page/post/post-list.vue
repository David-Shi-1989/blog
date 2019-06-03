<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <span>58条说说</span><span>375个昼夜</span>
    </div>
    <div class="sc-list-wrap">
      <ul>
        <li v-for="(item,idx) in list" :key="idx">
          <xPostCard :author="item.author" :datetime="item.datetime" :content="item.content"></xPostCard>
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
        {
          author: 'David Shi',
          datetime: 1559550867911,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559449271000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        },
        {
          author: 'David Shi',
          datetime: 1559404799000,
          content: 'This is a test content'
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less">
.sc-list-wrap {
  ul {
    & > li:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
}
</style>

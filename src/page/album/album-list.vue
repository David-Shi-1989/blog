<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      <span>18相册</span><span>520张</span>
    </div>
    <div class="sww-page-main">
      <ul class="sww-album-ul sww-clr-float">
        <li v-for="(item,idx) in list" :key="idx">
          <albumCard
            :id="item.id"
            :title="item.title"
            :count="item.count"
            :disMode="item.disMode"
            :imgArr="item.imgArr"></albumCard>
        </li>
      </ul>
    </div>
    <!-- <ul class="sww-album-ul sww-clr-float">
      <li v-for="(item,idx) in list" :key="idx">
        <albumCard
          :id="item.id"
          :title="item.title"
          :count="item.count"
          :disMode="item.disMode"
          :imgArr="item.imgArr"></albumCard>
      </li>
    </ul> -->
  </div>
</template>

<script>
import albumCard from '@/components/album/album-card'
export default {
  components: {albumCard},
  data () {
    return {
      list: [
        {
          id: 'a1',
          title: '算法图库',
          count: 3,
          disMode: 1,
          imgArr: [
            '../../../static/image/album/img_1.jpg',
            '../../../static/image/album/img_9.jpg'
          ]
        },
        {
          id: 'a2',
          title: 'CSS样式图片库',
          count: 10,
          disMode: 2,
          imgArr: [
            '../../../static/image/album/img_1.jpg',
            '../../../static/image/album/img_9.jpg'
          ]
        },
        {
          id: 'a3',
          title: '大屏素材图库',
          count: 5,
          disMode: 3,
          imgArr: [
            '../../../static/image/album/img_1.jpg',
            '../../../static/image/album/img_9.jpg',
            '../../../static/image/album/img_3.jpg'
          ]
        },
        {
          id: 'a4',
          title: '大屏素材图库',
          count: 5,
          disMode: 4,
          imgArr: [
            '../../../static/image/album/img_1.jpg',
            '../../../static/image/album/img_9.jpg',
            '../../../static/image/album/img_3.jpg',
            '../../../static/image/album/img_6.jpg'
          ]
        },
        {
          id: 'a5',
          title: '大屏素材图库',
          count: 5,
          disMode: 5,
          imgArr: [
            '../../../static/image/album/img_1.jpg',
            '../../../static/image/album/img_9.jpg',
            '../../../static/image/album/img_3.jpg',
            '../../../static/image/album/img_7.jpg',
            '../../../static/image/album/img_5.jpg'
          ]
        },
        {
          id: 'a6',
          title: '大屏素材图库',
          count: 15,
          disMode: 6,
          imgArr: [
            '../../../static/image/album/img_1.jpg',
            '../../../static/image/album/img_9.jpg',
            '../../../static/image/album/img_8.jpg',
            '../../../static/image/album/img_4.jpg',
            '../../../static/image/album/img_6.jpg',
            '../../../static/image/album/img_7.jpg'
          ]
        }
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped>
ul.sww-album-ul{
  list-style: none;
}
ul.sww-album-ul > li {
  --card-width: 12rem;
  --card-height: 8rem;
  height: var(--card-height);
  width: var(--card-width);
  border: 0.05rem solid #efefef;
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: #fff;
  float: left;
  margin-right: .5rem;
  margin-bottom: .5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,.15);
}
</style>

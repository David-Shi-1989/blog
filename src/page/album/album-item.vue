<template>
  <div class="sww-page-wrap">
    <div class="sww-page-header sww-page-header-statistic">
      {{this.title}}
    </div>
    <div class="sww-page-main">
      <div class="sww-page-main-info">
        <span><i class="fa fa-picture-o"></i>{{list.length}}张</span>
        <span><i class="fa fa-eye"></i>123</span>
        <span><i class="fa fa-heart"></i>21</span>
      </div>
      <div class="sww-album-item-content">
        <ul class="sww-album-ul-list sww-clr-float">
          <li v-for="(item,idx) in list" :key="idx">
            <div
              class="sww-album-ul-list-img-wrap"
              :style="'background-image:url(\''+item.url+'\')'"
              @click="onImageItemClick(idx)"
              ></div>
            <p>{{item.description}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      title: 'album Name',
      id: null,
      list: [
        {
          id: 'a1',
          url: '../../../static/image/album/img_1.jpg',
          description: 'description1'
        },
        {
          id: 'a2',
          url: '../../../static/image/album/img_2.jpg',
          description: 'description2'
        },
        {
          id: 'a3',
          url: '../../../static/image/album/img_3.jpg',
          description: 'description3'
        },
        {
          id: 'a4',
          url: '../../../static/image/album/img_4.jpg',
          description: 'description4'
        },
        {
          id: 'a5',
          url: '../../../static/image/album/img_5.jpg',
          description: 'description5'
        },
        {
          id: 'a6',
          url: '../../../static/image/album/img_6.jpg',
          description: 'description6'
        },
        {
          id: 'a7',
          url: '../../../static/image/album/img_7.jpg',
          description: 'description7'
        },
        {
          id: 'a8',
          url: '../../../static/image/album/img_8.jpg',
          description: 'description8'
        },
        {
          id: 'a9',
          url: '../../../static/image/album/img_9.jpg',
          description: 'description9'
        },
        {
          id: 'a10',
          url: '../../../static/image/album/img_10.jpg',
          description: 'description10'
        }
      ]
    }
  },
  created () {
    this.id = this.$route.params.id
  },
  methods: {
    onImageItemClick (index) {
      this.$store.commit('setIsShowImageViewLayer', {
        isShow: true,
        list: this.list,
        activeIndex: parseInt(index)
      })
    }
  }
}
</script>

<style scoped>
.sww-album-ul-list > li{
  float: left;
  margin: 0.5rem 0.5rem 0 0;
}
.sww-album-ul-list li > div.sww-album-ul-list-img-wrap{
  width: 8rem;
  height: 5rem;
  cursor: pointer;
  background-size: cover;
  background-position: 50% 50%;
  border: 0.05rem solid #ddd;
  box-sizing: border-box;
}
.sww-album-ul-list li > p{
  font-size: 0.55rem;
  color: var(--color-text-4);
  box-sizing: border-box;
  padding: 0.2rem 0.1rem;
  border: 0.05rem solid #ddd;
  border-top-width: 0;
}
</style>

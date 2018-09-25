<template>
  <div v-show="isShowLayer" class="sww-cpt-iv" tabindex="1" @keyup.left="onSwitchPreviousBtnClick" @keyup.right="onSwitchNextBtnClick">
    <div class="sww-size-full" style="position:relative">
      <div class="sww-cpt-iv-img-wrap-0">
        <div class="sww-cpt-iv-img-wrap-1">
          <div class="sww-cpt-iv-img-wrap-2">
            <div class="sww-clr-float">
              <div class="sww-cpt-iv-btn" style="margin-right:1rem;">
                <i class="fa fa-angle-left" @click="onSwitchPreviousBtnClick"></i>
              </div>
              <img :src="list[activeIdx]">
              <div class="sww-cpt-iv-btn" style="margin-left:1rem;">
                <i class="fa fa-angle-right" @click="onSwitchNextBtnClick"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sww-cpt-iv-thumbnail">
        <div class="sww-clr-float" :style="{width: (list.length * (4 + 0.5) + 2)+'rem'}">
          <div
            v-for="(item,idx) in list"
            :key="idx"
            :class="['css-img',activeIdx==idx?'active':'']"
            :style="{backgroundImage:'url(\''+item+'\')'}"
            @click="onThumbnailImgClick(idx)"
            ></div>
          <div class="css-active" :style="{left:activeThumbnailBorderLeft}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        '../../static/image/album/img_1.jpg',
        '../../static/image/album/img_2.jpg',
        '../../static/image/album/img_3.jpg',
        '../../static/image/album/img_4.jpg',
        '../../static/image/album/img_5.jpg',
        '../../static/image/album/img_6.jpg',
        '../../static/image/album/img_7.jpg',
        '../../static/image/album/img_8.jpg',
        '../../static/image/album/img_9.jpg',
        '../../static/image/album/img_10.jpg',
        '../../static/image/album/img_1.jpg',
        '../../static/image/album/img_2.jpg',
        '../../static/image/album/img_3.jpg',
        '../../static/image/album/img_4.jpg',
        '../../static/image/album/img_5.jpg',
        '../../static/image/album/img_6.jpg',
        '../../static/image/album/img_7.jpg',
        '../../static/image/album/img_8.jpg',
        '../../static/image/album/img_9.jpg',
        '../../static/image/album/img_10.jpg'
      ],
      activeIdx: 0
    }
  },
  methods: {
    onThumbnailImgClick (idx) {
      if (idx && !isNaN(idx) && idx < this.list.length && idx >= 0) {
        this.activeIdx = parseInt(idx)
      }
    },
    onSwitchNextBtnClick () {
      let newVal = this.activeIdx + 1
      if (newVal < this.list.length) {
        this.activeIdx = newVal
      }
    },
    onSwitchPreviousBtnClick () {
      let newVal = this.activeIdx - 1
      if (newVal > -1) {
        this.activeIdx = newVal
      }
    }
  },
  computed: {
    isShowLayer () {
      return this.$store.getters.isShowImageViewLayer
    },
    activeThumbnailBorderLeft () {
      return (this.activeIdx * 4.5) + 'rem'
    }
  },
  watch: {
    activeIdx (newVal) {
      let currentOffset = this.utils.screenSize.remToPx(this.activeIdx * 4.5)
      let screenWidth = document.body.clientWidth
      if (currentOffset > screenWidth) {
        debugger
      }
    }
  }
}
</script>

<style scoped>
.sww-cpt-iv{
  position: absolute;
  top: 0;
  left:0;
  width:100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  z-index: 100;
  --thumbnail-wrap-height: 6rem;
  --image-height: 25rem;
  --dot-width: 1.5rem;
}
/*主图*/
.sww-cpt-iv-img-wrap-0{
  position: absolute;
  height: var(--image-height);
  width: 100%;
  top: calc(100% - var(--image-height) - var(--thumbnail-wrap-height) - 1rem);
}
.sww-cpt-iv-img-wrap-0 div.sww-cpt-iv-img-wrap-1 {
  position:relative;
  width:100%;
  height:100%;
}
.sww-cpt-iv-img-wrap-0 div.sww-cpt-iv-img-wrap-2 {
  height:100%;
  width:100%;
  text-align: center;
}
.sww-cpt-iv-img-wrap-0 div.sww-cpt-iv-img-wrap-2 .sww-clr-float{
  height: 100%;
  display: inline-block;
}
.sww-cpt-iv-img-wrap-0 div.sww-cpt-iv-img-wrap-2 .sww-cpt-iv-btn{
  float:left;
  width:var(--dot-width);
  height:var(--image-height);
  line-height: var(--image-height);
}
.sww-cpt-iv-img-wrap-0 div.sww-cpt-iv-img-wrap-2 .sww-cpt-iv-btn i.fa{
  width: var(--dot-width);
  height: var(--dot-width);
  line-height: var(--dot-width);
  cursor: pointer;
  color: #fff;
  background-color: rgba(0,0,0,0.6);
  border-radius: 50%;
  text-align: center;
}
.sww-cpt-iv-img-wrap-0 div.sww-cpt-iv-img-wrap-2 img{
  height: 100%;
  float: left;
}
.sww-cpt-iv-img-wrap-0 div.sww-cpt-iv-img-wrap-2 span {
  display: block;
  float: left;
  font-size: 1rem;
  line-height: var(--image-height);
  width: 3rem;
  text-align: center;
}
/*缩略图*/
.sww-cpt-iv-thumbnail{
  position:absolute;
  width: 100%;
  height: var(--thumbnail-wrap-height);
  background-color: rgba(0,0,0,0.6);
  bottom: 0.5rem;
  padding: 0 1rem;
  overflow-x: auto;
}
.sww-cpt-iv-thumbnail::-webkit-scrollbar{
  height: .2rem;
  background: rgba(0,0,0,0.1);
}
.sww-cpt-iv-thumbnail::-webkit-scrollbar-track{
  background-color: rgba(0,0,0,0.1);
}
.sww-cpt-iv-thumbnail::-webkit-scrollbar-thumb{
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
}
.sww-cpt-iv-thumbnail .sww-clr-float{
  position: relative;
  width:auto;
  height: 100%;
}
.sww-cpt-iv-thumbnail div.css-img{
  float: left;
  width: 4rem;
  height: calc(100% - 0.5rem);
  margin-top: 0.25rem;
  box-sizing: border-box;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 0.5rem;
  opacity: 0.5;
  transition: all 0.3s;
  cursor: pointer;
}
.sww-cpt-iv-thumbnail div.css-img.active{
  opacity: 1;
}
.sww-cpt-iv-thumbnail div.css-img:last-child{
  margin-right: 0;
}
.sww-cpt-iv-thumbnail .css-active{
  width: 4rem;
  position:absolute;
  top:0.25rem;
  height: calc(100% - 0.5rem);
  box-sizing: border-box;
  border: 0.1rem solid red;
  transition: all 0.4s;
}
</style>

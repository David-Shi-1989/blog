<template>
  <div
    v-show="isShowLayer"
    class="sww-cpt-iv"
    tabindex="0"
    @keyup.left="onSwitchPreviousBtnClick"
    @keyup.right="onSwitchNextBtnClick"
    @keyup.esc="onCloseBtnClick">
    <div class="sww-size-full" style="position:relative">
      <!-- 主图 -->
      <div class="sww-cpt-iv-img-wrap-0">
        <div class="sww-cpt-iv-img-wrap-1">
          <div class="sww-cpt-iv-img-wrap-2">
            <div class="sww-clr-float">
              <div class="sww-cpt-iv-btn" style="margin-right:1rem;">
                <i class="fa fa-angle-left" @click="onSwitchPreviousBtnClick"></i>
              </div>
              <img v-if="list[activeIdx]&&list[activeIdx].url" :src="list[activeIdx].url">
              <div class="sww-cpt-iv-btn" style="margin-left:1rem;">
                <i class="fa fa-angle-right" @click="onSwitchNextBtnClick"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 文字说明 -->
      <div class="sww-cpt-iv-des">
        <span>{{this.activeIdx+1}}/{{this.list.length}}</span>
        <span v-if="list[activeIdx]&&list[activeIdx].description">{{list[activeIdx].description}}</span>
      </div>
      <!-- 缩略图 -->
      <div class="sww-cpt-iv-thumbnail" :id="domId.thumbnail">
        <div class="sww-clr-float" :style="{width: (list.length * (4 + 0.5) + 2)+'rem'}">
          <div
            v-for="(item,idx) in list"
            :key="idx"
            :class="['css-img',activeIdx==idx?'active':'']"
            :style="{backgroundImage:'url(\''+item.url+'\')'}"
            @click="onThumbnailImgClick(idx)"
            ></div>
          <div class="css-active" :style="{left:activeThumbnailBorderLeft}"></div>
        </div>
      </div>
      <!-- 关闭按钮 -->
      <div class="sww-cpt-iv-close">
        <i class="fa fa-close" title="关闭" @click="onCloseBtnClick"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      activeIdx: 0,
      domId: {
        thumbnail: 'sww_imageview_thumbnail'
      }
    }
  },
  methods: {
    onThumbnailImgClick (idx) {
      if (idx && !isNaN(idx) && idx < this.list.length && idx >= 0) {
        this.activeIdx = parseInt(idx)
      }
    },
    // TODO: DIV自动获取焦点问题
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
    },
    onCloseBtnClick () {
      this.$store.commit('setIsShowImageViewLayer', false)
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
    isShowLayer (newVal) {
      if (newVal) {
        this.list = this.$store.getters.getImageViewArr
        this.activeIdx = this.$store.getters.getImageViewActiveIndex
        // $('#' + this.domId.thumbnail).focus()
      }
    },
    activeIdx (newVal) {
      let imgPerVal = this.utils.screenSize.remToPx(4.5) // 单个缩略图的宽度
      let wrapPadding = this.utils.screenSize.remToPx(1) // padding为1rem
      let currentOffset = imgPerVal * this.activeIdx
      let screenWidth = document.body.clientWidth
      let thumbnailDom = $('#' + this.domId.thumbnail)
      let scrollLeft = thumbnailDom.scrollLeft()
      if (currentOffset > screenWidth + scrollLeft - imgPerVal - wrapPadding) {
        let newScrollLeft = scrollLeft + imgPerVal
        thumbnailDom.scrollLeft(newScrollLeft)
      } else if (currentOffset < scrollLeft) {
        let newScrollLeft = scrollLeft - imgPerVal
        thumbnailDom.scrollLeft(newScrollLeft)
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
  --des-height: 1.5rem;
}
/*主图*/
.sww-cpt-iv-img-wrap-0{
  position: absolute;
  height: var(--image-height);
  width: 100%;
  bottom: calc(0.5rem + var(--thumbnail-wrap-height) + var(--des-height));
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
/*文字说明*/
.sww-cpt-iv-des{
  position: absolute;
  width: 100%;
  height: var(--des-height);
  line-height: var(--des-height);
  bottom: calc(var(--thumbnail-wrap-height) + 0.5rem);
  left: 0;
  text-align: center;
  font-size: 0.65rem;
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
  transition: all 0.4s;
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
.sww-cpt-iv-close {
  position: absolute;
  top: 3rem;
  right: 3rem;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
  background-color: rgba(0,0,0,0.6);
  box-sizing: border-box;
  width:1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1.5rem;
}
</style>

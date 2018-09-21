<template>
  <div v-show="isShowLayer" class="sww-cpt-iv">
    <div class="sww-size-full" style="position:relative">
      <div class="sww-cpt-iv-img-wrap">
        <div style="position:relative;width:100%;height:100%;">
          <div class="sww-css-img-main" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:0 auto;">
            <span><i class="fa fa-angle-left"></i></span>
            <img src="../../static/image/album/img_1.jpg">
            <span><i class="fa fa-angle-right"></i></span>
          </div>
          <!-- <span><i class="fa fa-angle-left"></i></span>
          <img src="../../static/image/album/img_1.jpg">
          <span><i class="fa fa-angle-right"></i></span>
          <div class="clr"></div> -->
        </div>
      </div>
      <div class="sww-cpt-iv-thumbnail">
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isShowLayer () {
      return this.$store.getters.isShowImageViewLayer
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
}
/*主图*/
.sww-cpt-iv-img-wrap{
  position: absolute;
  height: var(--image-height);
  width: 100%;
  top: calc(100% - var(--image-height) - var(--thumbnail-wrap-height) - 2rem);
}
/* .sww-cpt-iv-img-wrap > div {
  width: auto;
  height: 100%;
  margin: 0 auto;
} */
.sww-cpt-iv-img-wrap div.sww-css-img-main > img{
  height: 100%;
  display: block;
  float: left;
  /* margin: 0 auto; */
}
.sww-cpt-iv-img-wrap div.sww-css-img-main > span {
  display: block;
  float: left;
  font-size: 1rem;
  line-height: var(--image-height);
  width: 3rem;
  text-align: center;
}
.sww-cpt-iv-img-wrap div.sww-css-img-main > span i.fa {
  --dot-width: 1.5rem;
  cursor: pointer;
  color: #fff;
  background-color: rgba(0,0,0,0.6);
  width: var(--dot-width);
  height: var(--dot-width);
  border-radius: 50%;
  text-align: center;
  line-height: var(--dot-width);
}
/*缩略图*/
.sww-cpt-iv-thumbnail{
  position:absolute;
  width: 100%;
  height: var(--thumbnail-wrap-height);
  background-color: rgba(0,0,0,0.6);
  bottom: 1rem;
}
</style>

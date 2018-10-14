<template>
  <div class="sww-cpt-post-card">
    <table>
      <thead>
        <tr>
          <th style="width:2.5rem;"></th>
          <th style="width:calc(100% - 2.5rem);"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img class="css-avatar" :src="avatarUrl"></td>
          <td style="padding-left:0.3rem;">
            <p class="css-author">David Shi</p>
            <p class="css-datetime">2天前</p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="css-content">这是一条很长的说说</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="sww-cpt-pc-bottom">
      <span :class="[activeBottomIdx==1?'active':'']" @click="activeBottomIdx=1">
        <i class="fa fa-thumbs-o-up"></i>
        <span class="css-title">点赞</span>
        <span class="css-val">14</span>
      </span>
      <span :class="[activeBottomIdx==2?'active':'']" @click="activeBottomIdx=2">
        <i class="fa fa-comment-o"></i>
        <span class="css-title">评论</span>
        <span class="css-val">5</span>
      </span>
    </div>
    <div class="sww-cpt-pc-comment-wrap">
      <div class="css-caret" :style="{left: (2.5+6*(activeBottomIdx-1))+'rem'}"><span></span></div>
      <ul class="css-comment-list-ul">
        <li>
          <table>
            <thead>
              <tr>
                <th style="width:calc(var(--avatar-width) + 0.5rem);"></th>
                <th style="width:calc(100% - var(--avatar-width) - 0.5rem);"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img class="css-avatar" src="../../../static/image/avatar/avatar_01.jpg"></td>
                <td>
                  <p class="css-username">User1</p>
                  <p class="css-datetime">2018/09/26 12:39:12</p>
                </td>
              </tr>
              <tr>
                <td colspan="2"><p class="css-content">Content</p></td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      default: '../../../static/image/avatar-colored-d.png'
    }
  },
  data () {
    return {
      activeBottomIdx: 1 // 1:点赞 2:评论
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.sww-cpt-post-card{
  background-color: #fff;
  box-shadow: 0 0 0.1rem #ddd;
  padding-top: 0.5rem;
}
.sww-cpt-post-card table {
  width: 100%;
  margin: 0 0.5rem;
}
.sww-cpt-post-card .css-avatar{
  width: 2.5rem;
  height: 2.5rem;
  box-sizing: border-box;
  border: 0.05rem solid #bbb;
}
.sww-cpt-post-card .css-author {
  font-size: 0.75rem;
  font-weight: bolder;
  line-height: 1rem;
  height: 1rem;
}
.sww-cpt-post-card .css-datetime{
  font-size: 0.6rem;
  color:#888;
  line-height: 1rem;
  height: 1rem;
}
.sww-cpt-post-card .css-content{
  font-size: 0.7rem;
  color:#444;
}
/*bottom*/
.sww-cpt-post-card .sww-cpt-pc-bottom{
  background-color: #eff1f6;
  box-sizing: border-box;
  border-bottom: 0.05rem solid #e3e5e9;
}
.sww-cpt-post-card .sww-cpt-pc-bottom i{
  color: #99a9c8;
  font-size: 0.8rem;
}
.sww-cpt-post-card .sww-cpt-pc-bottom > span{
  display: inline-block;
  height: 1.2rem;
  line-height: 1.2rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  padding: 0.3rem;
  width: 5rem;
  text-align: center;
  transition: all 0.2s ease-in-out;
}
.sww-cpt-post-card .sww-cpt-pc-bottom > span.active2::after{
  content: '';
  display: block;
  width:0;
  height: 0;
  border-width: 0 0.3rem 0.3rem;
  border-style: solid;
  border-color: transparent transparent #fff;
  position: relative;
  top: -0.15rem;
  left: 2.5rem;
  z-index: 99;
}
.sww-cpt-post-card .sww-cpt-pc-bottom > span.active i,
.sww-cpt-post-card .sww-cpt-pc-bottom > span.active span.css-val,
.sww-cpt-post-card .sww-cpt-pc-bottom > span.active span.css-title{
  color: #33518f;
}
.sww-cpt-post-card .sww-cpt-pc-bottom span.css-val{
  color:#99a9c8;
  font-size: 0.6rem;
}
.sww-cpt-post-card .sww-cpt-pc-bottom span.css-title {
  font-size: 0.65rem;
  color: #99a9c8;
}
/*评论wrap*/
.sww-cpt-post-card .sww-cpt-pc-comment-wrap{
  padding: 0.3rem;
  background-color: #fff;
  position: relative;
  --avatar-width: 1.5rem;
}
.sww-cpt-post-card .sww-cpt-pc-comment-wrap img.css-avatar{
  width: var(--avatar-width);
  height: var(--avatar-width);
  border-radius: 50%;
  box-sizing: border-box;
}
.sww-cpt-post-card .sww-cpt-pc-comment-wrap ul.css-comment-list-ul li img.css-avatar{
  float: left;
}
.sww-cpt-post-card .sww-cpt-pc-comment-wrap ul.css-comment-list-ul li p.css-username{
  font-size: 0.65rem;
  color:#fff;
  font-weight: bolder;
}
.sww-cpt-post-card .sww-cpt-pc-comment-wrap ul.css-comment-list-ul li p.css-datetime{
  font-size: 0.6rem;
  color:#ddd;
}
.sww-cpt-post-card .sww-cpt-pc-comment-wrap ul.css-comment-list-ul li p.css-content{
  float: left;
  color: #eee;
}
.sww-cpt-post-card .sww-cpt-pc-comment-wrap div.css-caret{
  width:0;
  height:0;
  border-width:0 0.3rem 0.3rem;
  border-style:solid;
  border-color:transparent transparent #e3e5e9;
  position:absolute;
  top: -0.3rem;
  transition: all 0.2s ease-in-out;
}
.sww-cpt-post-card .sww-cpt-pc-comment-wrap div.css-caret > span{
  display:block;
  width:0;
  height:0;
  border-width:0 0.25rem 0.25rem;
  border-style:solid;
  border-color:transparent transparent #fff;
  position:absolute;
  top: 0.05rem;
  left:-0.25rem;
}
</style>

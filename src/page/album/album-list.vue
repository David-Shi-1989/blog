<template>
  <div class="x-main">
    <div></div>
    <ul class="sww-album-ul sww-clr-float">
      <li>
        <router-link class="sww-album-title" to="/album/123">活动图片</router-link>
        <p class="sww-album-count"><span>1</span>张</p>
        <table class="sww-album-tb sww-album-tb-1">
          <tbody>
            <tr>
              <td><div style="background-image:url('../../../static/image/album/img_4.jpg');"></div></td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <p class="sww-album-title">活动图片</p>
        <p class="sww-album-count"><span>2</span>张</p>
        <table class="sww-album-tb sww-album-tb-2-h">
          <tbody>
            <tr>
              <td><div style="background-image:url('../../../static/image/album/img_5.jpg');"></div></td>
            </tr>
            <tr>
              <td><div style="background-image:url('../../../static/image/album/img_6.jpg');"></div></td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <p class="sww-album-title">活动图片</p>
        <p class="sww-album-count"><span>2</span>张</p>
        <table class="sww-album-tb sww-album-tb-2-v">
          <tbody>
            <tr>
              <td><div style="background-image:url('../../../static/image/album/img_5.jpg');"></div></td>
              <td><div style="background-image:url('../../../static/image/album/img_6.jpg');"></div></td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <p class="sww-album-title">技术图片</p>
        <p class="sww-album-count"><span>12</span>张</p>
        <table class="sww-album-tb sww-album-tb-3">
          <tbody>
            <tr>
              <td rowspan="2"><div style="background-image:url('../../../static/image/album/img_1.jpg');"></div></td>
              <td><div style="background-image:url('../../../static/image/album/img_2.jpg');"></div></td>
            </tr>
            <tr>
              <td><div style="background-image:url('../../../static/image/album/img_3.jpg');"></div></td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <p class="sww-album-title">技术图片</p>
        <p class="sww-album-count"><span>12</span>张</p>
        <table class="sww-album-tb sww-album-tb-4">
          <tbody>
            <tr>
              <td><div style="background-image:url('../../../static/image/album/img_7.jpg');"></div></td>
              <td><div style="background-image:url('../../../static/image/album/img_8.jpg');"></div></td>
            </tr>
            <tr>
              <td><div style="background-image:url('../../../static/image/album/img_9.jpg');"></div></td>
              <td><div style="background-image:url('../../../static/image/album/img_10.jpg');"></div></td>
            </tr>
          </tbody>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data () {
    return {
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
  --card-width: 15rem;
  --card-height: 10rem;
  height: var(--card-height);
  width: var(--card-width);
  border: 0.05rem solid #efefef;
  box-sizing: border-box;
  padding: 0.5rem;
  background-color: #fff;
  float: left;
  margin-right: .5rem;
  margin-bottom: .5rem;
}
ul.sww-album-ul > li .sww-album-title {
  font-size: 0.8rem;
  font-weight: bolder;
  color:#333;
  height: 1.5rem;
  line-height: 1.5rem;
  text-decoration: none;
}
ul.sww-album-ul > li .sww-album-count{
  font-size: 0.6rem;
  color:#777;
  height: 1rem;
  line-height: 1rem;
}
ul.sww-album-ul > li .sww-album-count span{
  margin-right: 0.15rem;
}
.sww-album-tb{
  --tb-height: 5rem;
  margin-top: 0.5rem;
  border-collapse:collapse;
}
.sww-album-tb div{
  background-position: 50% 50%;
  background-size: cover;
  border: 0.05rem solid #ddd;
  box-sizing: border-box;
}
.sww-album-tb.sww-album-tb-1 td div {
  height: var(--tb-height);
  width:  calc(var(--card-width) - 1rem);
}
.sww-album-tb.sww-album-tb-2-h td div{
  height: calc(var(--tb-height) / 2);
  width:  calc(var(--card-width) - 1rem);
}
.sww-album-tb.sww-album-tb-2-v td div{
  height: calc(var(--tb-height));
  width:  calc((var(--card-width) - 1rem - 0.1rem) / 2);
}
.sww-album-tb.sww-album-tb-2-v tr td:first-child div {
  margin-right: 0.2rem;
}
.sww-album-tb.sww-album-tb-3 td[rowspan='2'] > div {
  height: var(--tb-height);
  width: calc(((var(--card-width) - 1rem) / 2) - 0.1rem);
}
.sww-album-tb.sww-album-tb-3 td:not([rowspan='2']) div {
  height: calc(var(--tb-height) / 2);
  width: calc(((var(--card-width) - 1rem) / 2) - 0.1rem);
  margin-left: 0.2rem;
}
.sww-album-tb.sww-album-tb-4 td div{
  height: calc((var(--tb-height)) / 2);
  width:  calc((var(--card-width) - 1rem - 0.1rem) / 2);
}
.sww-album-tb.sww-album-tb-4 tr td:first-child div {
  margin-right: 0.2rem;
}
</style>

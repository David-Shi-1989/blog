<template>
  <div>
    <router-link class="sww-album-title" to="/album/123">{{title}}</router-link>
    <p class="sww-album-count"><span>{{count}}</span>张</p>
    <table :class="['sww-cpn-album-card-tb','sww-cpn-album-card-tb-'+disModeClass]">
      <tbody v-if="disModeClass=='1'">
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></div></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='2-h'">
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></div></td>
        </tr>
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></div></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='2-v'">
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></div></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='3'">
        <tr>
          <td rowspan="2"><div :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></div></td>
        </tr>
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></div></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='4'">
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></div></td>
        </tr>
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[3]+'\')'}"></div></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='5'">
        <tr>
          <td rowspan="2"><div :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></div></td>
        </tr>
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[3]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[4]+'\')'}"></div></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='6'">
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></div></td>
        </tr>
        <tr>
          <td><div :style="{backgroundImage:'url(\''+imgArr[3]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[4]+'\')'}"></div></td>
          <td><div :style="{backgroundImage:'url(\''+imgArr[5]+'\')'}"></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '【未命名】'
    },
    count: {
      type: Number,
      default: 0
    },
    disMode: {
      type: [Number, String],
      default: 0
    },
    imgArr: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      disModeClass: ''
    }
  },
  created () {
    if (this.disMode === 2) {
      this.disModeClass = '2-' + ((0).random() % 2 === 0 ? 'v' : 'h')
    } else {
      this.disModeClass = this.disMode.toString()
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.sww-album-title {
  font-size: 0.8rem;
  font-weight: bolder;
  color:var(--color-linkable);
  height: 1.5rem;
  line-height: 1.5rem;
  text-decoration: none;
}
.sww-album-count{
  font-size: 0.6rem;
  color:var(--color-text-4);
  height: 1rem;
  line-height: 1rem;
}
.sww-album-count span{
  margin-right: 0.15rem;
}
.sww-cpn-album-card-tb{
  --tb-height: 5rem;
  margin-top: 0.5rem;
  border-collapse:collapse;
}
.sww-cpn-album-card-tb div{
  background-position: 50% 50%;
  background-size: cover;
  border: 0.05rem solid #ddd;
  box-sizing: border-box;
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-1 td div {
  height: var(--tb-height);
  width:  calc(var(--card-width) - 1rem);
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-2-h td div{
  height: calc(var(--tb-height) / 2);
  width:  calc(var(--card-width) - 1rem);
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-2-v td div{
  height: calc(var(--tb-height));
  width:  calc((var(--card-width) - 1rem - 0.1rem) / 2);
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-2-v tr td:first-child div {
  margin-right: 0.2rem;
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-3 td[rowspan='2'] > div {
  height: var(--tb-height);
  width: calc(((var(--card-width) - 1rem) / 2) - 0.1rem);
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-3 td:not([rowspan='2']) div {
  height: calc(var(--tb-height) / 2);
  width: calc(((var(--card-width) - 1rem) / 2) - 0.1rem);
  margin-left: 0.2rem;
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-4 td div{
  height: calc((var(--tb-height)) / 2);
  width:  calc((var(--card-width) - 1rem - 0.1rem) / 2);
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-4 tr td:first-child div {
  margin-right: 0.2rem;
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-5 td[rowspan='2'] div {
  height: calc(var(--tb-height));
  width: calc((var(--card-width) - 1rem - 0.1rem) / 2);
  margin-right: 0.2rem;
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-5 td:not([rowspan='2']) div {
  height: calc(var(--tb-height) / 2);
  width: calc((var(--card-width) - 1rem - 0.1rem) / 4);
}
.sww-cpn-album-card-tb.sww-cpn-album-card-tb-6 td div {
  height: calc(var(--tb-height) / 2);
   width: calc((var(--card-width) - 1rem - 0.1rem) / 3);
}
</style>

<template>
  <div class="sww-album-wrap">
    <div class="sww-albu-title-wrap">
      <router-link class="sww-album-title" :to="'/album/'+id">{{title}}</router-link>
      <p class="sww-album-count"><span>{{count}}</span>张</p>
    </div>
    <table :class="['sww-cpn-album-card-tb','sww-cpn-album-card-tb-'+disModeClass]">
      <tbody v-if="disModeClass=='1'">
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></router-link></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='2-h'">
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></router-link></td>
        </tr>
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></router-link></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='2-v'">
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></router-link></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='3'">
        <tr>
          <td rowspan="2"><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></router-link></td>
        </tr>
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></router-link></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='4'">
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></router-link></td>
        </tr>
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[3]+'\')'}"></router-link></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='5'">
        <tr>
          <td rowspan="2"><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></router-link></td>
        </tr>
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[3]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[4]+'\')'}"></router-link></td>
        </tr>
      </tbody>
      <tbody v-if="disModeClass=='6'">
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[0]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[1]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[2]+'\')'}"></router-link></td>
        </tr>
        <tr>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[3]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[4]+'\')'}"></router-link></td>
          <td><router-link class="css-img" :to="'/album/'+id" :style="{backgroundImage:'url(\''+imgArr[5]+'\')'}"></router-link></td>
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
    },
    id: {
      type: [String, Number],
      default: '123'
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

<style lang="less" scoped>
.sww-album-wrap {
  .sww-albu-title-wrap {
    display: flex;
    .sww-album-title {
      font-size: 0.8rem;
      font-weight: bolder;
      color:var(--color-linkable);
      height: 1.5rem;
      line-height: 1.5rem;
      text-decoration: none;
      width: 100%;
      height: 100%;
    }
    .sww-album-count{
      font-size: 0.6rem;
      color:var(--color-text-4);
      height: 1rem;
      line-height: 1rem;
      width: 2rem;
      text-align: right;
      flex-shrink: 0;
      span{
        margin-right: 0.15rem;
      }
    }
  }
  .sww-cpn-album-card-tb{
    --tb-height: 4rem;
    margin-top: 0.5rem;
    border-collapse:collapse;
    .css-img{
      display: block;
      background-position: 50% 50%;
      background-size: cover;
      border: 0.05rem solid #ddd;
      box-sizing: border-box;
    }
    &.sww-cpn-album-card-tb-1 {
        td .css-img {
        height: var(--tb-height);
        width:  calc(var(--card-width) - 1rem);
      }
    }
    &.sww-cpn-album-card-tb-2-h td .css-img{
      height: calc(var(--tb-height) / 2);
      width:  calc(var(--card-width) - 1rem);
    }
    &.sww-cpn-album-card-tb-2-v {
      td .css-img{
        height: calc(var(--tb-height));
        width:  calc((var(--card-width) - 1rem - 0.1rem) / 2);
      }
      tr td:first-child .css-img {
        margin-right: 0.2rem;
      }
    }
    &.sww-cpn-album-card-tb-3 {
      td[rowspan='2'] > .css-img {
        height: var(--tb-height);
        width: calc(((var(--card-width) - 1rem) / 2) - 0.1rem);
      }
      td:not([rowspan='2']) .css-img {
        height: calc(var(--tb-height) / 2);
        width: calc(((var(--card-width) - 1rem) / 2) - 0.1rem);
        margin-left: 0.2rem;
      }
    }
    &.sww-cpn-album-card-tb-4 {
      td .css-img{
        height: calc((var(--tb-height)) / 2);
        width:  calc((var(--card-width) - 1rem - 0.1rem) / 2);
      }
      tr td:first-child .css-img {
        margin-right: 0.2rem;
      }
    }
    &.sww-cpn-album-card-tb-5 {
      td[rowspan='2'] .css-img {
        height: calc(var(--tb-height));
        width: calc((var(--card-width) - 1rem - 0.1rem) / 2);
        margin-right: 0.2rem;
      }
      td:not([rowspan='2']) .css-img {
        height: calc(var(--tb-height) / 2);
        width: calc((var(--card-width) - 1rem - 0.1rem) / 4);
      }
    }
    &.sww-cpn-album-card-tb-6 {
      td .css-img {
        height: calc(var(--tb-height) / 2);
        width: calc((var(--card-width) - 1rem - 0.1rem) / 3);
      }
    }
  }
}
</style>

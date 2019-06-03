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
            <p class="css-author">{{author}}</p>
            <p class="css-datetime">{{getDateTimeStr}}</p>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="css-content">{{content}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    avatarUrl: {
      type: String,
      default: '../../../static/image/avatar-colored-d.png'
    },
    author: '',
    datetime: {
      type: Number,
      default: null
    },
    content: ''
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  computed: {
    getDateTimeStr () {
      let now = new Date()
      let datetime = new Date(this.datetime)
      let DAY = 1000 * 60 * 60 * 24
      let FORMAT_STR = 'yyyy/MM/dd hh:mm:ss'
      let dis = (now.valueOf() - this.datetime)
      if (dis <= DAY * 2) {
        if (now.getDate() === datetime.getDate()) {
          return (`今天 ${datetime.format('hh:mm:ss')}`)
        } else if (now.getDate() === datetime.getDate() + 1) {
          return (`昨天 ${datetime.format('hh:mm:ss')}`)
        }
      }
      return datetime.format(FORMAT_STR)
    }
  }
}
</script>

<style scoped lang="less">
.sww-cpt-post-card{
  background-color: #fff;
  box-shadow: 0 0 0.1rem #ddd;
  padding: 0.5rem;
  --avatar-size: 2rem;
  table {
    width: 100%;
    /*头像*/
    .css-avatar{
      width: var(--avatar-size);
      height: var(--avatar-size);
      box-sizing: border-box;
      border: 0.05rem solid #bbb;
    }
    /*作者*/
    .css-author {
      font-size: 0.75rem;
      font-weight: bolder;
      line-height: 1rem;
      height: 1rem;
    }
    /*日期时间*/
    .css-datetime{
      font-size: 0.6rem;
      color:#888;
      line-height: 1rem;
      height: 1rem;
    }
    /*内容*/
    .css-content{
      font-size: 0.7rem;
      color:#444;
      padding:0.4rem 0;
      border-top: .05rem solid #ddd;
    }
  }
}
</style>

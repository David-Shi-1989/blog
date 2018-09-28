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
      <span><i class="fa fa-thumbs-o-up"></i></span>
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
  background-color: var(--header-bg2);
  padding: 0.5rem;
}
.sww-cpt-post-card .sww-cpt-pc-bottom i{
  color: #fff;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>

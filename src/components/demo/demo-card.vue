<template>
  <div class="sww-demo-wrap">
    <router-link class="sww-demo-title" :to="'/demo/'+id">{{title}}</router-link>
    <br>
    <p class="sww-star-wrap" :title="`${star}星`">
      <i v-for="idx in 5"
        :key="idx"
        :data-idx="idx"
        :class="star-idx + 1 <= 0 ? 'fa fa-star-o' : (star-idx+1<1?'fa fa-star-half-full':'fa fa-star')"
      ></i>
    </p>
    <p class="sww-demo-description sww-text-ellipsis" :title="description">
      {{description}} - {{star}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '【未命名】'
    },
    description: {
      type: String,
      default: ''
    },
    id: {
      type: [String, Number],
      default: '123'
    },
    star: {
      type: Number,
      default: 0
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

<style scoped lang="less">
.sww-demo-wrap {
  display: inline-block;
  width: 10rem;
  border: 0.05rem solid #ddd;
  padding: .2rem .4rem;
  .sww-demo-title {
    font-size: 0.8rem;
    font-weight: bolder;
    color:var(--color-linkable);
    height: 1.5rem;
    line-height: 1.5rem;
    text-decoration: none;
  }
  .sww-star-wrap {
    cursor: pointer;
    display: inline-block;
    &::before {
      content: "难度:";
      margin-right: 5px;
      color: var(--color-text-5);
    }
    i.fa {
      font-size: 0.7rem;
      &.fa-star, &.fa-star-half-full {
        color: rgb(255,215,0);
      }
      &.fa-star-o {
        color: #ccc;
      }
    }
  }
  .sww-demo-description{
    font-size: 0.6rem;
    height: 1.2rem;
    color:var(--color-text-4);
  }
}
</style>

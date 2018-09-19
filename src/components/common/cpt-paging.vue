<template>
  <div class="sww-cpt-paging">
    <span class="sww-cpt-paging-total">共<span class="css-val">{{total}}</span>条</span>
    <span class="sww-cpt-paging-current">
      <i class="fa fa-angle-left" title="上一页"></i>
      <span v-for="(item,idx) in calPageArr" :key="idx" :class="item.class" @click="onPageItemClick(item.val)">
        {{item.val}}
      </span>
      <!-- <span :class="['css-val', current==1?'active':'']">1</span>
      <span class="css-val">2</span>
      <span class="css-val">3</span>
      <i class="fa fa-ellipsis-h"></i>
      <span class="css-val">15</span> -->
      <i class="fa fa-angle-right" title="下一页"></i>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sumPage: 0,
      total: 0
    }
  },
  props: {
    // 数据总数
    value: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    }
  },
  created () {
    this.total = this.value
    this.sumPage = Math.ceil(this.total / this.pageSize)
  },
  methods: {
    onPageItemClick (val) {
      if (!isNaN(val) && val > 0 && val <= this.sumPage) {
        this.current = parseInt(val)
      }
    }
  },
  computed: {
    calPageArr () {
      var arr = []
      let ellipsis = {
        tag: 'i',
        class: 'fa fa-ellipsis-h'
      }
      for (let i = 1; i <= this.sumPage; i++) {
        let obj = {
          tag: 'span',
          class: ['css-val', this.current === i ? 'active' : ''],
          val: i
        }
        arr.push(obj)
      }
      // 全部push进去后再根据current来处理
      debugger
      for (let i = 1; i <= this.current - 2; i++) {
        arr[i].isRemoved = true
      }
      for (let i = this.current + 1; i < this.sumPage - 1; i++) {
        arr[i].isRemoved = true
      }
      let result = arr.filter(function (item) {
        return !(item.isRemoved === true)
      })
      for (let i = 1; i < result.length; i++) {
        if (result[i].val === (result[i - 1].val + 1)) {

        } else {
          result = result.slice(0, i).concat(ellipsis, result.slice(i))
          break
        }
      }
      return result
    }
  },
  watch: {
    total (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style scoped>
.sww-cpt-paging{
  font-size: 0.65rem;
  color:#666;
  padding: 0.1rem 0;
}
.sww-cpt-paging-total .css-val{
  margin: 0 0.2rem;
}
.sww-cpt-paging-current > i.fa{
  cursor: pointer;
  margin: 0 0.2rem;
}
.sww-cpt-paging-current > .css-val{
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
}
.sww-cpt-paging-current > .css-val.active{
  background-color: #2d8cf0;
  color: #fff;
  border-radius: 0.1rem;
}
.sww-cpt-paging-current > .css-val:not(.active){
  cursor: pointer;
}
</style>

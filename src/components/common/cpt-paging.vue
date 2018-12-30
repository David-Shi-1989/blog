<template>
  <div class="sww-cpt-paging">
    <span v-if="showTotoal" class="sww-cpt-paging-total">共<span class="css-val">{{total}}</span>条</span>
    <span v-if="showPageSize" class="sww-cpt-paging-pagesize">每页<span class="css-val">{{pageSize}}</span>条</span>
    <span class="sww-cpt-paging-current">
      <span class="sww-cpt-paging-btn" @click="onPreviousPageBtnClick">
        <i class="fa fa-angle-left" title="上一页"></i>
      </span>
      <span v-for="(item,idx) in calPageArr" :key="idx"
        :class="item.class" @click="onPageItemClick(item.val)" :title="item.val?'第'+item.val+'页':''">
        {{item.val}}
      </span>
      <span class="sww-cpt-paging-btn" @click="onNextPageBtnClick">
        <i class="fa fa-angle-right" title="下一页"></i>
      </span>
    </span>
    <span class="sww-cpt-paging-input">
      <span>跳至</span>
      <span style="width:2rem;display:inline-block;"><xInput type="text" v-model="inputCurrent" @on-change="onInputCurrentChange"></xInput></span>
      <span>页</span>
    </span>
  </div>
</template>

<script>
import xInput from '@/components/common/cpt-input'
export default {
  components: {xInput},
  data () {
    return {
      sumPage: 0,
      total: 0,
      current: 1,
      inputCurrent: 1
    }
  },
  props: {
    // 数据总数
    value: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 20
    },
    showTotoal: {
      type: Boolean,
      default: true
    },
    showPageSize: {
      type: Boolean,
      default: true
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
    },
    onNextPageBtnClick () {
      let newCurrent = this.current + 1
      if (newCurrent < this.sumPage) {
        this.current = newCurrent
      }
    },
    onPreviousPageBtnClick () {
      let newCurrent = this.current - 1
      if (newCurrent > 0) {
        this.current = newCurrent
      }
    },
    onInputCurrentChange () {
      if (!isNaN(this.inputCurrent) && this.inputCurrent > 0 && this.inputCurrent <= this.sumPage) {
        this.current = parseInt(this.inputCurrent)
      } else {
        this.inputCurrent = this.current
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
      for (let j = 1; j < this.current - 2; j++) {
        arr[j].isRemoved = true
      }
      for (let k = this.current + 1; k < this.sumPage - 1; k++) {
        arr[k].isRemoved = true
      }
      let result = arr.filter(function (item) {
        return !(item.isRemoved === true)
      })
      for (let i = 1; i < result.length; i++) {
        if (result[i].val === (result[i - 1].val + 1)) {
        } else {
          result = result.slice(0, i).concat(ellipsis, result.slice(i))
          i++
        }
      }
      return result
    }
  },
  watch: {
    total (newVal) {
      this.$emit('input', newVal)
    },
    current (newVal, oldValue) {
      this.inputCurrent = newVal
      this.$emit('currentChange', newVal, oldValue)
    }
  }
}
</script>

<style scoped>
.sww-cpt-paging{
  font-size: 0.65rem;
  color:#666;
  padding: 0.1rem 0;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.sww-cpt-paging-total{
  margin-right: 0.5rem;
}
.sww-cpt-paging-total .css-val{
  margin: 0 0.2rem;
}
.sww-cpt-paging-pagesize{
  margin-right: 0.5rem;
}
.sww-cpt-paging-pagesize .css-val{
  margin: 0 0.2rem;
}
.sww-cpt-paging-current{
  --span-width: 1rem;
}
.sww-cpt-paging-current > i.fa{
  cursor: pointer;
  margin: 0 0.2rem;
}
.sww-cpt-paging-current > .css-val{
  display: inline-block;
  width: var(--span-width);
  height: var(--span-width);
  line-height: var(--span-width);
  text-align: center;
  transition: all .3s;
}
.sww-cpt-paging-current > .css-val.active{
  background-color: #2d8cf0;
  color: #fff;
  border-radius: 0.1rem;
}
.sww-cpt-paging-current > .css-val:not(.active){
  cursor: pointer;
}
.sww-cpt-paging-current .fa.fa-ellipsis-h{
  margin: 0 0.3rem;
}
.sww-cpt-paging-current .sww-cpt-paging-btn{
  display: inline-block;
  width: var(--span-width);
  height: var(--span-width);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}
.sww-cpt-paging-current > span:not(:first-child) {
  margin-left: 0.3rem;
}
.sww-cpt-paging-current > span.css-val:not(.active):hover{
  background-color: rgba(45,140,240,0.2);
}
.sww-cpt-paging-input{
  display: inline-block;
}
</style>

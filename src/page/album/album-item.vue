<template>
  <div class="x-main">
    <h3>album</h3><span>{{this.id}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>

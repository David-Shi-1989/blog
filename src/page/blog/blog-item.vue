<template>
  <div class="x-main">
    <h2>Blog Item {{this.id}}</h2>
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

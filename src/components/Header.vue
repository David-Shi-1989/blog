<template>
  <div id="ng_header">
    <div class="x-header"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#ng_header{
  width: 100%;
}
#ng_header .x-header{
  height: var(--header-height);
  background-color: #535F6F;
}
</style>

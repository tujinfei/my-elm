<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

#app {
  box-sizing: border-box;
  padding-top: 41.2px;
  color: #333;
}
</style>

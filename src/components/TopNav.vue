<template>
  <div class="TopNav">
    <div class="main-area">
      <!-- 左边区域 -->
      <div class="left">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <!-- 返回事件 -->
        <span v-if="back" @click="$router.go(-1)"
          ><van-icon name="arrow-left"
        /></span>
      </div>

      <!-- 中间区域 -->
      <div class="center">
        <span>{{ title }}</span>
      </div>

      <!-- 右边区域 -->
      <div class="right">
        <span v-if="signUpLogin"
          ><span v-if="$store.state.userInfo" @click="$router.push('/login')"
            >登录|注册</span
          >
          <span v-else @click="$router.push('/my')">个人图像</span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  components: {},
  props: {
    back: Boolean,
    title: String,
    signUpLogin: Boolean
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.TopNav {
  width: 100%;
  .main-area {
    box-sizing: border-box;
    width: 100%;
    height: 41px;
    background-color: #3190e8;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8.4px;
  }
}
</style>

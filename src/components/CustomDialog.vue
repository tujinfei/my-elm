<template>
  <!-- <van-dialog
    v-model="show"
    width="211"
    :overlay="false"
    confirm-button-color="#fff"
  >
    <van-icon name="warning-o" size="70px" color="rgb(248, 203, 134)" />
    <div>{{ tip }}</div>
  </van-dialog> -->

  <van-dialog
    v-model="isShowAlertDialog"
    width="211"
    :overlay="false"
    confirm-button-color="#fff"
    @confirm="isShowAlertDialog = false"
  >
    <van-icon name="warning-o" size="70px" color="rgb(248, 203, 134)" />
    <div>{{ alertText }}</div>
  </van-dialog>
</template>

<script>
export default {
  name: 'CustomDialog',
  components: {},
  props: {
    // 外部传过来
    alertText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: false,
      tip: '',

      isShowAlertDialog: false
    }
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.van-dialog {
  /deep/ .van-dialog__content {
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  /deep/ .van-dialog__footer {
    .van-button {
      height: 42px;
      background-color: #4cd964;
    }
  }
}
</style>

<template>
  <div class="Login">
    <TopNav :back="true" title="密码登录" />
    <section class="form">
      <van-form @submit="onSubmit">
        <van-field
          v-model.trim="form.username"
          name="账号"
          label="账号"
          placeholder="请输入账号"
        />
        <van-field
          v-model.trim="form.password"
          :type="inputType"
          name="密码"
          label="密码"
          placeholder="请输入密码"
        >
          <template #right-icon>
            <van-switch v-model="isShowPassword" size="24" /></template
        ></van-field>
        <van-field
          v-model.trim="form.captcha_code"
          name="验证码"
          label="验证码"
          placeholder="请输入验证码"
        />

        <div class="down-area">
          <div class="tip">
            <div class="tip1">温馨提示：未注册过的账号，登录时将自动注册</div>
            <div class="tip2">注册过的用户可凭账号密码登录</div>
          </div>
          <div class="login-btn">
            <van-button block type="primary" native-type="submit"
              >登录</van-button
            >
          </div>
        </div>
      </van-form>
    </section>
    <section class="reset-area">
      <router-link to="/">重置密码？</router-link>
    </section>

    <!-- 提示错误弹框 -->
    <CustomDialog ref="CustomDialog" :alertText="alertText" />
  </div>
</template>

<script>
import TopNav from '@/components/TopNav'
import CustomDialog from '@/components/CustomDialog'
import { login } from '@/api/login'
export default {
  name: 'Login',
  components: { TopNav, CustomDialog },
  data() {
    return {
      form: { username: '', password: '', captcha_code: '' },

      isShowPassword: false,
      inputType: 'password', //动态切换是否密码类型
      alertText: '' //通过外部传来 提示框文本
    }
  },
  watch: {
    isShowPassword(newValue) {
      this.inputType = newValue ? 'text' : 'password'
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 登录
    async onSubmit() {
      try {
        if (!this.form.username) {
          // this.$refs.CustomDialog.show = true
          // this.$refs.CustomDialog.tip = '请输入手机号/邮箱/用户名'

          this.$refs.CustomDialog.isShowAlertDialog = true
          this.alertText = '请输入手机号/邮箱/用户名'
          return
        }
        if (!this.form.password) {
          // 方式 1 通过内部操作弹框，数据
          // this.$refs.CustomDialog.show = true
          // this.$refs.CustomDialog.tip = '请输入密码'

          // 方式 2
          this.$refs.CustomDialog.isShowAlertDialog = true
          //外部传过来，数据
          this.alertText = '请输入密码'
          return
        }
        if (!this.form.captcha_code) {
          // this.$refs.CustomDialog.show = true
          // this.$refs.CustomDialog.tip = '请输入验证码'

          this.$refs.CustomDialog.isShowAlertDialog = true
          this.alertText = '请输入验证码'
          return
        }
        const params = {
          username: this.form.username,
          password: this.form.password,
          captcha_code: this.form.captcha_code
        }
        await login(params)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.Login {
  .form {
    margin-top: 14px;
    .down-area {
      padding: 0 16px;
      .tip {
        margin-top: 9px;
        font-size: 12px;
        color: red;
        .tip1 {
          margin-bottom: 16px;
        }
        .tip2 {
          margin-bottom: 9px;
          color: red;
        }
      }
    }
  }
  .reset-area {
    padding: 0 16px;
    display: flex;
    justify-content: flex-end;
    margin-top: 23px;
    a {
      font-size: 14px;
      color: #3b95e9;
    }
  }
}
</style>

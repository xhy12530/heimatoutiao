<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit" ref="from">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="手机号"
        :rules="rules.mobile"
        required
        type="tel"
        maxlength="11"
      >
        <template #left-icon>
          <TouTiaoIcon icon="shouji" />
        </template>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="验证码"
        :rules="rules.code"
        required
        type="number"
        maxlength="6"
      >
        <template #left-icon>
          <TouTiaoIcon icon="yanzhengma" />
        </template>
        <template #button>
          <van-count-down
            v-if="isShowCountDone === true"
            :time="6000"
            format="ss s"
            @finish="isShowCountDone = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            plain
            size="small"
            type="info"
            native-type="button"
            @click="sendSmsCode"
            :loading="isDisable"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, getSmsCode } from "@/api";
import { Toast } from "vant";
// Toast约等于this.$Toast
export default {
  data() {
    return {
      user: {
        mobile: "13911111112",
        code: "246810"
      },
      rules: {
        mobile: [
          { required: true, message: "请填写手机号" },
          { pattern: /^1[3456789]\d{9}$/, message: "请输入正确手机号" }
        ],
        code: [
          { required: true, message: "请填写验证码" },
          { pattern: /^\d{6}$/, message: "请输入六位验证码" }
        ]
      },
      isShowCountDone: false,
      isDisable: false
    };
  },
  methods: {
    // value自动从表单里面获取的值
    // 获取到的值是对象:key >>表单的name值 value >> 用户输入的值
    // await后面写的是promise
    // 只有promise成功了的情况下才会继续执行
    // async onSubmit(values) {
    //   const res = await login(values);
    //   console.log(res);
    //   console.log("submit", values);
    // }

    // Promise：异步解决方案， 解决了什么问题?回调地域 >>链式调用形式
    // async await > 链式调用(不够优雅) >> 看起来是同步形式
    async onSubmit() {
      try {
        const res = await login(this.user);
        console.log(res);
        Toast.success("登录成功");
      } catch (e) {
        Toast.fail(e?.response?.data?.message || "登录失败");
      }
    },
    async sendSmsCode() {
      try {
        await this.$refs.from.validate("mobile");
      } catch (e) {
        console.log(e);
        return;
      }
      try {
        // console.log("验证码发送");
        // 发送成功 >> 倒计时>> 
        // 成功的提示发送失败>> 
        // 错误的提示拿到结果 >>解除禁用
        this.isDisable = true;

        await getSmsCode(this.user.mobile);
        this.isShowCountDone = true;
        this.$toast.success("验证码发送成功");
      } catch (e) {
        this.$toast.fail(e.response.data.message || "验证码发送错误");
        this.isShowCountDone = false;
        console.log(e);
      } finally {
        this.isDisable = false;
      }
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 160px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>

<template>
  <div class="login-container">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <template #left-icon>
          <TouTiaoIcon icon="shouji" />
        </template>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <template #left-icon>
          <TouTiaoIcon icon="yanzhengma" />
        </template>
        <template #button>
          <van-button
            class="send-sms-btn"
            plain
            size="small"
            type="info"
            native-type="button"
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
import { login } from "@/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      user: {
        mobile: "13911111112",
        code: "246810"
      }
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
    async onSubmit() {
      try {
        const res = await login(this.user);
        console.log(res);
        Toast.success("登录成功");
      } catch (e) {
        Toast.fail(e?.response?.data?.message || "登录失败");
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

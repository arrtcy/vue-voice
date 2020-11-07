<template>
  <div class="Reg">
    <div class="content">
      <img
        src="http://v2.logodashi.com/FileUpload/OldPic/635464924814548000.png"
        alt=""
      />

      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="phone"
          name="手机"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />
        <div class="capt">
          <van-field
            v-model="captcha"
            name="验证码"
            label="验证码"
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
          />
          <van-button type="danger" @click="cta">发送验证码</van-button>
        </div>

        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            注册</van-button
          >
        </div>
        <div class="reg-login">
          <router-link :to="{ name: 'Login' }"
            >已有账号，我要登录！</router-link
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { reg, captcha } from "../../unitls/Reg";
export default {
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      captcha: "",
    };
  },
  methods: {
    async onSubmit() {
      let nickname = this.username;
      let password = this.password;
      let phone = this.phone;
      let captcha = this.captcha;
      const res = await (reg(),
      { nickname, password, phone, captcha },
      { xhrFields: { withCredentials: true } });
      console.log(res);
    },
    async cta() {
      let phone = this.phone;
      const res1 = await captcha(phone);
      console.log(res1);
    },
  },
};
</script>

<style scoped>
.Reg {
  position: absolute;
  z-index: 999;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
  width: 375px;
}
.reg-login {
  text-align: center;
}
.capt {
  position: relative;
}
.content img {
  margin-left: 0.25rem;
}
</style>

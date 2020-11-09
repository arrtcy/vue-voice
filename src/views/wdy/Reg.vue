<template>
  <div class="Reg">
    <div class="content">
      <img src="/img/logo.png" alt="logo" />

      <van-form @submit="onSubmit">
        <van-field
          v-model="nickname"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />

        <van-field
          v-model="phone"
          type="text"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
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
          v-model="captcha"
          name="验证码"
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <van-button type="danger" @click="cta">发送验证码</van-button>

        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            注册
          </van-button>
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
import { reg ,send,Captcha} from "../../unitls/Login";
export default {
  data() {
    return {
      nickname: "",
      password: "",
      phone: "",
      captcha: "",
    };
  },
  methods: {
    async onSubmit() {
      console.log(123);
      let nickname = this.nickname;
      let password = this.password;
      let phone = this.phone;
      let captcha = this.captcha;
      let parmas={nickname,password,phone,captcha}
      let abc={phone,captcha}
      const res = await reg(parmas)
       console.log(res);
    const  res1 =await Captcha(abc)
    console.log(res1)
      // { xhrFields: { withCredentials: true } });
     
    },
     async cta(){
       let phone = this.phone;
       console.log(phone)
       const res1=await send(phone)
       console.log(res1)
   }

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
  width: 50%;
  display: block;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}
</style>

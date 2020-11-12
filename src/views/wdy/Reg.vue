<template>
  <div class="Reg">
    <div class="content">
      <img src="../../assets/logo.png" alt="logo" />
      <div id="box" @click="back"><van-icon name="arrow-left"  size="20"/>返回</div> 
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
        >
       
      <template #button>
    <van-button size="small" type="primary"  @click="cta">{{
        bol?fasong+'s':fasong
     }}</van-button>
  </template>
     </van-field>
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
import { reg, send, Captcha } from "../../unitls/Login";
export default {
  data() {
    return {
      nickname: "",
      password: "",
      phone: "",
      captcha: "",
      fasong: "发送验证码",
      bol:false
    };
  },
  methods: {
    async onSubmit() {
      console.log(123);
      let nickname = this.nickname;
      let password = this.password;
      let phone = this.phone;
      let captcha = this.captcha;
      let parmas = { nickname, password, phone, captcha };
      let abc = { phone, captcha };
      //注册
      const res = await reg(parmas);
      console.log(res);
      //验证验证码
      const res1 = await Captcha(abc);
      console.log(res1);
    },
    async cta() {
      let phone = this.phone;
      console.log(phone);
      //发送验证码
      const res1 = await send(phone);
      console.log(res1);
      this.fasong =60;
      this.bol=true
      let time = setInterval(() => {
          this.fasong--
        if (this.fasong ==0) {
          this.fasong="发送验证码"
          this.bol=false
          clearInterval(time);
        }
       
      }, 1000);
    },

     back(){
      this.$router.push({name:'Serach'})
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


.content img {
  width: 50%;
  display: block;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

#box{
  display: flex;
  position: absolute;
  top: 0.2rem;
  left: 0.1rem;
}
</style>

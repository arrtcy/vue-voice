<template>
  <div class="login">
    <img src="../../assets/logo.png" alt="logo" />
   <div id="box" @click="back"><van-icon name="arrow-left"  size="20"/>返回</div> 
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
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
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>

      <div class="login-choice">
        <div><van-icon name="chat-o" size="30" />微信</div>
        <div><van-icon name="smile-o" size="30" />QQ</div>
        <div><van-icon name="phone-circle-o" size="30" />手机</div>
        <div><van-icon name="share-o" size="30" />分享</div>
      </div>

      <div class="login-reg">
        <router-link :to="{ name: 'Reg' }">没有账号，我要注册！</router-link>
      </div>
      <div class="agreement">
        <input
          type="checkbox"
          @click="hand"
          name=""
          id=""
          v-model="checked"
        />同意《用户协议》《隐私政策》《儿童隐私政策》<br />《中国移动认证协议》
      </div>
    </van-form>
  </div>
</template>

<script>
import { LOGIN } from "../../unitls/Login";
import { Notify } from "vant";
export default {
  data() {
    return {
      phone: "",
      password: "",
      checked: false,
    };
  },
  methods: {
    hand() {
      this.checked = !this.checked;
    },
    async onSubmit() {
      let phone = this.phone;
      let password = this.password;
      let parmas = { phone, password };
      if (this.checked) {
        const res = await LOGIN(parmas);
        // console.log(res.data.profile);
        if (res.status == 200) {
          Notify("登陆成功");
          localStorage.setItem("uid", res.data.account.id);
          localStorage.setItem("user", JSON.stringify(res.data.profile));
          this.$router.push({ name: "Serach" });
        } else {
          alert("请检查用户名");
        }
      } else {
        alert("请同意协议");
      }
    },
    back(){
     this.$router.push({name:'Serach'})
    }
  },
};
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background: rgb(255, 255, 255);
  z-index: 9999;
}
.login-choice {
  display: flex;
  justify-content: space-around;
}

.login-choice div {
  justify-content: center;
  align-items: center;
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
}
.login-reg {
  margin-top: 0.3rem;
  text-align: center;
}
.agreement {
  font-size: 0.12rem;
  margin-top: 0.3rem;
  text-align: center;
}
img {
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

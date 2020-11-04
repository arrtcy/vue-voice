<template>
  <section class="login">
      <van-image
        round
        width="23rem"
        height="20rem"
        src="http://v2.logodashi.com/FileUpload/OldPic/635464924814548000.png"
      />
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
   <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      登录
    </van-button>
   </div>

    <div class="login-choice">
      <div> <van-icon name="chat-o" size="30"/>微信</div>
      <div> <van-icon name="smile-o" size="30"/>QQ</div>
      <div> <van-icon name="phone-circle-o" size="30"/>手机</div>
      <div> <van-icon name="share-o" size="30"/>分享</div>
    </div>
      
      <div class="login-reg"><router-link :to="{name:'Reg'}">没有账号，我要注册！</router-link></div> 
         <div class="agreement ">
          <input type="checkbox" @click="hand" name="" id=""  v-model="checked">同意《用户协议》《隐私政策》《儿童隐私政策》<br>《中国移动认证协议》
         </div>
   </van-form>
 
  </section>
</template>

<script>

import {LOGIN} from '../../unitls/Login'

export default {
   data() {
    return {
      phone: '',
      password: '',
      checked:false
    };
  },
  methods: {
    hand(){
      this.checked=!this.checked
    },
    async onSubmit() {
     let phone=this.phone
     let password=this.password
     let parmas={phone,password}
        if(this.checked){ 
        const res=await LOGIN(parmas)
        // let  name=res.data.profile.nickname
        console.log(res.data.profile)
        if(res.status==200){
          alert('登录成功')
          localStorage.setItem("uid",phone)
           this.$router.push({name:'Presonal'})
            this.$envetBus.$emit('name',this.name)
        }else{
          alert("请检查用户名")
        }
      
       }else{
         alert("请同意协议")
       }
    },
  },
}
</script>

<style scoped>
 .login{
   height: 100%;
   position: absolute;
   z-index: 999;
   background: rgb(172, 71, 71);
 }
 .login-choice{
   display: flex;
   justify-content: space-around;
 }
 
.login-choice div{
  justify-content: center;
  align-items: center;
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
}
.login-reg{
  margin-top:0.3rem;
  text-align: center;
}
.agreement{
  font-size: 0.12rem;
  margin-top:0.3rem ;
  text-align: center;
}


</style>

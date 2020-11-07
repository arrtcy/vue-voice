<template>
    <section class="update">
      <van-uploader :after-read="afterRead" />
          <van-form @submit="onSubmit">
  <van-field
    v-model="nickname"
    name="昵称"
    label="昵称"
    placeholder="昵称"
    :rules="[{ required: true, message: '请填写昵称' }]"
  />
  <van-field
    v-model="gender"
    name="性别"
    label="性别"
    placeholder="性别"
    :rules="[{ required: true, message: '请填写性别' }]"
  />
  <van-field
    v-model="birthday"
    name="生日"
    label="生日"
    placeholder="生日"
    :rules="[{ required: true, message: '请填写生日' }]"
  />
  <van-field
    v-model="city"
    name="城市"
    label="城市"
    placeholder="城市"
    :rules="[{ required: true, message: '请填写城市' }]"
  />
  <van-field
    v-model="province"
    name="省份"
    label="省份"
    placeholder="省份"
    :rules="[{ required: true, message: '请填写省份' }]"
  />
  <van-field
    v-model="signature"
    name="用户签名"
    label="用户签名"
    placeholder="用户签名"
    :rules="[{ required: true, message: '请填写用户签名' }]"
  />
 

  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
    </section>
</template>

<script>
import {update} from '../../unitls/Login'
export default {
    data() {
    return {
      nickname: '',
      gender:'',
      birthday:"",
      city:"",
      province:"",
      signature:"",
    };
  },
    methods: {
    afterRead(file) {
      
      console.log(file);
    },
     async onSubmit() {
        let nickname=this.nickname
        let gender=this.gender
        let birthday=this.birthday
        let city=this.city
        let province=this.province
        let signature=this.signature
        let parmas={nickname,gender,birthday,city,province,signature}
        const res=await update(parmas)
        console.log(res)
    },
  },
}
</script>

<style>

</style>
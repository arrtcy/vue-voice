<template>
  <section class="Presonal">
    <van-cell is-link @click="showPopup" icon=""></van-cell>
    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '85%', height: '100%' }"
    >
      <div id="top">
        <van-notice-bar scrollable text="Web前端百度招聘，https://talent.baidu.com/external/baidu/campus.html"  color="red" />
        <van-card
          :desc="use.signature"
          :title="use.nickname"
          :thumb="use.avatarUrl"
          @click="click1"
        />
      </div>
      <div id="nav">
        <p><van-icon name="bulb-o" size="24px" />创作者中心</p>
      </div>
      <div id="main">
        <p>音乐服务</p>
        <hr />
        <p><van-icon name="bullhorn-o" size="24px" />听歌识曲</p>
        <p><van-icon name="comment-circle-o" size="24px" />云村有票</p>
        <p><van-icon name="shopping-cart-o" size="24px" />商城</p>
        <p><van-icon name="points" size="24px" />游戏专区</p>
        <p><van-icon name="music-o" size="24px" />口袋彩铃</p>
      </div>
      <div id="footer">
        <p>其他服务</p>
        <hr />
        <p><van-icon name="aim" size="24px" />个性装扮</p>
        <p @click="off"><van-icon name="clock-o" size="24px" />定时关闭</p>
        <p><van-icon name="records" size="24px" />音乐黑名单</p>
        <p><van-icon name="points" size="24px" />边听边存</p>
        <p><van-icon name="description" size="24px" />我的订单</p>
      </div>
      <div id="set">
       <p><van-icon name="music-o" size="24px" />夜间模式</p> 
       <p><van-icon name="setting-o" size="24px" />设置</p> 
       <p @click="quit"> <van-icon name="close" size="24px" />退出</p> 
      </div>
    </van-popup>
  </section>
</template>

<script>
import { Dialog } from "vant";
// import { config } from 'vue/types/umd';
// import {info} from '../../unitls/Login'
export default {
  data() {
    return {
      show: false,
      active: 0,
      Dialog,
      use: {},
    };
  },
  methods: {
    showPopup() {
      // const  res=await info()
      // console.log(res)
      this.show = true;
    },
    quit() {
      localStorage.clear("uid");
      this.$router.push({ name: "Login" });
    },
    off() {
      Dialog.confirm({
        title: "定时关闭",
        message: "10分钟\n20分钟\n30分钟\n45分钟\n60分钟",
      })
        .then(() => {
          
        })
        .catch(() => {
          
        });
    },
    click1() {
      this.$router.push({ name: "Update" });
    },
  },
  created() {
    this.bus.$on("showPopup", this.showPopup);
    this.bus.$on("info", this.info);
    this.use = JSON.parse(localStorage.getItem("user"));
    console.log(this.use);
  },
};
</script>

<style scoped>
#top,
#nav,
#main,
#footer {
  padding: 0.16rem;
}
#nav {
  height: 0.16rem;
  background-color: rgb(247, 247, 247);
}
#nav p{
  display: flex;
}
#main {
  margin-top: 0.16rem;
  background-color: rgb(247, 247, 247);
}

#footer {
  margin-top: 0.16rem;
  background-color: rgb(247, 247, 247);
}

#main p {
  display: flex;
  margin-top: 0.08rem;
}

#main p:hover {
  background-color: rgb(230, 230, 230);
}

#footer p {
  margin-top: 0.08rem;
  display: flex;
}

#footer p:hover {
  background-color: rgb(230, 230, 230);
}


#set {
  margin-top: 0.16rem;
  /* display: flex; */
  justify-content: space-around;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: rgb(247, 247, 247);
}
#set p{
  /* display: flex; */
}
.van-card__title {
  font-size: 0.16rem;
}
</style>

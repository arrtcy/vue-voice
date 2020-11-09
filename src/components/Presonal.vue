<template>
  <div class="Presonal">
    <div id="top">
      <van-notice-bar scrollable text="开发团队，欢迎你的加入" color="red" />
      <van-card
        :desc="use.signature ? use.signature : '还未进行登录'"
        :title="use.nickname ? use.nickname : ''"
        :thumb="use.avatarUrl ? use.avatarUrl : '/img/timg.jpg'"
      />
    </div>
    <div id="nav">
      <p @click="hello"><van-icon name="bulb-o" size="24px" />创作者中心</p>
    </div>
    <div id="main">
      <p>音乐服务</p>
      <hr />
      <p><van-icon name="bullhorn-o" size="24px" />听歌识曲</p>
      <p @click="piao">
        <van-icon name="comment-circle-o" size="24px" />云村有票
      </p>
      <p @click="buy"><van-icon name="shopping-cart-o" size="24px" />商城</p>
      <p><van-icon name="points" size="24px" />游戏专区</p>
      <p><van-icon name="music-o" size="24px" />口袋彩铃</p>
    </div>
    <div id="footer">
      <p>其他服务</p>
      <hr />
      <p><van-icon name="aim" size="24px" />个性装扮</p>
      <p @click="off"><van-icon name="clock-o" size="24px" />定时关闭</p>
      <p @click="blc"><van-icon name="records" size="24px" />音乐黑名单</p>
      <p><van-icon name="points" size="24px" />边听边存</p>
      <p><van-icon name="description" size="24px" />我的订单</p>
    </div>
    <div id="set">
      <p><van-icon name="music-o" size="24px" /><span>夜间模式</span></p>
      <p><van-icon name="setting-o" size="24px" /><span>设置</span></p>
      <p @click="quit">
        <van-icon name="close" size="24px" /><span>退出</span>
      </p>
    </div>
  </div>
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

      use: {},
    };
  },
  created() {
    // this.bus.$on("info", this.info);
    if (localStorage.getItem("user")) {
      this.use = JSON.parse(localStorage.getItem("user"));
      // console.log(this.use);
    }
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

    hello() {
      Dialog.confirm({
        title: "仗键走天涯",
        message: "田崇阳\n刘甜\n张南\n王冬阳",
      });
    },
    piao() {
      Dialog.confirm({
        title: "云村有票",
        message: "来晚了，卖完了。",
      });
    },
    buy() {
      Dialog.confirm({
        title: "商城",
        message: "进货去了-。-",
      });
    },
    off() {
      Dialog.confirm({
        title: "定时关闭",
        message: "10分钟\n20分钟\n30分钟\n45分钟\n60分钟",
      })
        .then(() => {})
        .catch(() => {});
    },
    blc() {
      Dialog.confirm({
        title: "黑名单",
        message: "HTML\nCSS\nJS",
      });
    },
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
#nav p {
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
  display: flex;
  align-items: center;
}

.van-card__title {
  font-size: 0.16rem;
}

#set p {
  display: flex;
  align-items: center;
  width: fit-content;
  /* border: 1px solid; */
}
/* #set p span {
  margin-right: 0.5rem;
} */
</style>

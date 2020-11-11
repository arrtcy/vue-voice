<template>
  <section class="myself">
    <van-card
      v-show="isShow"
      thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604677154651&di=93111c8f71cae33eb1cd664a1cf86ee6&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb21bb051f81986184dd851494ced2e738ad4e664.jpg"
    >
      <template #footer>
        <van-button id="btn" @click="loginClick">立即登录>>></van-button>
      </template>
    </van-card>

    <van-card
      v-show="ok"
      :desc="use.signature"
      :title="use.nickname"
      :thumb="use.avatarUrl"
    />
    <van-grid>
      <van-grid-item icon="location" text="本地音乐" @click="bd" />
      <van-grid-item icon="audio" text="音乐" @click="yy" />
      <van-grid-item icon="friends" text="我的好友" @click="myfans" />
      <van-grid-item icon="live" text="视频" @click="mv" />
    </van-grid>

    <van-tabs v-model="activeName">
      <van-tab title="创建歌单" name="a">
        <h3 v-show="isShow">暂无收藏歌单，请登录后获取。</h3>
        <van-card
          v-for="item in playList"
          :key="item._id"
          :desc="item.description"
          :title="item.name"
          :thumb="item.coverImgUrl"
          @click="click(item)"
        />
      </van-tab>
      <van-tab title="收藏歌单" name="b">
        <h3 v-show="isShow">暂无收藏歌单，请登录后获取。</h3>
        <van-card
          v-for="item in topplayList"
          :key="item._id"
          :desc="item.description"
          :title="item.name"
          :thumb="item.coverImgUrl"
          @click="click(item)"
        />
      </van-tab>
      <van-tab title="最近播放" name="c">
        <h3 v-show="isShow">暂无收藏歌单，请登录后获取。</h3>
        <div id="main">
          <ul>
            <li
              v-for="(v, i) in nearList"
              :key="v.id"
              @click="click1(v, v.bol, i)"
            >
              <span> {{ v.name }}</span>
              <div>
                <van-icon :name="v.bol ? 'play-circle-o' : 'pause-circle'" />
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </section>
</template>

<script scoped>
import { Toast } from "vant";
import { info, near } from "../../unitls/Login";
export default {
  data() {
    return {
      activeName: "a",
      use: {},
      playList: [],
      topplayList: [],
      nearList: [],
      isShow: false,
      ok: false,
      num: 0.4,
    };
  },
  methods: {
    mv() {
      this.$router.push({ name: "Commend" });
    },
    loginClick() {
      this.$router.push({ name: "Login" });
    },
    bd() {
      Toast("没有下载");
    },
    yy() {
      Toast("随便听");
    },

    click(item) {
      this.$router.push({
        name: "Song",
        query: {
          id: item.id,
          coverImgUrl: item.coverImgUrl,
          name: item.name,
          description: item.description,
        },
      });
    },

    click1(v, bol, i) {
      this.nearList.forEach((v) => {
        // console.log(v.bol);
        v.bol = true;
      });
      this.nearList[i].bol = !bol;
      if (this.num == i) {
        this.bus.$emit("pause");
      } else {
        this.num = i;
        this.bus.$emit("play", this.songList[i]);
      }
    },

    myfans() {
      this.$router.push({ name: "Followeds", query: { id: this.use.userId } });
    },
  },
  async created() {
    if (localStorage.getItem("user")) {
      this.use = JSON.parse(localStorage.getItem("user"));
      // console.log(this.use.userId);
      const res = await info(this.use);
      // console.log(res.data.playlist);
      this.playList = res.data.playlist;
      this.topplayList = this.playList.splice(12);
      // console.log(this.topplayList)
      // console.log(this.playList)
      const res1 = await near(this.use);
      // console.log(res1.data.playlist.tracks);
      res1.data.playlist.tracks.forEach((v) => {
        v.bol = true;
      });
      this.nearList = res1.data.playlist.tracks;
      this.bus.$emit("near", this.nearList);
      this.ok = true;
    } else {
      this.isShow = true;
    }
  },
};
</script>
<style scoped>
.myself {
  padding: 0.1rem;
}

.van-card__title {
  font-size: 0.16rem;
}

#main li {
  border-radius: 5%;
  display: flex;
  justify-content: space-between;
  position: relative;
  /* border: 1px solid red; */
  line-height: 0.5rem;
  margin-top: 0.02rem;
  width: 100%;
  height: 0.5rem;
  background-color: rgb(240, 240, 240);
}

#main .van-icon {
  line-height: 0.5rem;
  font-size: 0.3rem;
}

#btn {
  width: 200px;
  height: 34px;
  background-color: rgb(240, 240, 240);
  position: absolute;
  top: 0.4rem;
  left: 1.3rem;
}

h3 {
  margin-top: 0.6rem;
  text-align: center;
}
</style>

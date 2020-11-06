<template>
  <section class="myself">
    <van-card
      :desc="use.signature"
      :title="use.nickname"
      :thumb="use.avatarUrl"
    />
    <van-grid>
      <van-grid-item icon="location" text="本地音乐" />
      <van-grid-item icon="audio" text="音乐" />
      <van-grid-item icon="checked" text="下载" />
      <van-grid-item icon="live" text="视频" />
    </van-grid>
    <van-grid>
      <van-grid-item icon="friends" text="我的好友" />
      <van-grid-item icon="invition" text="收藏" />
      <van-grid-item icon="cluster" text="电台" />
      <van-grid-item icon="weapp-nav" text="音乐应用" />
    </van-grid>
    <van-tabs v-model="activeName">
      <van-tab title="创建歌单" name="a">
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
        <div id="main">
          <ul>
            <li v-for="(v, i) in nearList" :key="v.id" @click="click1(i)">
              <span> {{ v.name }}</span>
              <div>
                <van-icon name="play-circle" />
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </section>
</template>

<script scoped>
import { info, near } from "../../unitls/Login";

export default {
  data() {
    return {
      activeName: "a",
      use: {},
      playList: [],
      topplayList: [],
      nearList: [],
    };
  },
  methods: {
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

    click1(i) {
      this.bus.$emit("play", this.nearList[i]);
    },
  },
  async created() {
    this.use = JSON.parse(localStorage.getItem("user"));
    // console.log(this.use);
    const res = await info(this.use);
    // console.log(res.data.playlist);
    this.playList = res.data.playlist;

    this.topplayList = this.playList.splice(12);
    // console.log(this.topplayList)
    // console.log(this.playList)
    const res1 = await near(this.use);
    console.log(res1.data.playlist.tracks);
    this.nearList = res1.data.playlist.tracks;
    this.bus.$emit("near", this.nearList);
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
</style>

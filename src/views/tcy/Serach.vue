<template>
  <section>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, i) in images" :key="i">
        <img :src="img.imageUrl" alt="banner图" />
      </van-swipe-item>
    </van-swipe>
    <div class="t">
      <a href="#tui">
        <div class="kuai">
          <span class="el-icon-date tb"></span>
          <span class="wz">每日推荐</span>
        </div></a
      >
      <router-link :to="{ name: 'Myself' }">
        <div class="kuai">
          <span class="el-icon-monitor tb"></span>
          <span class="wz">我的歌单</span>
        </div></router-link
      >
      <div class="kuai">
        <span class="el-icon-s-data tb"></span>
        <span class="wz">排行榜</span>
      </div>
      <div class="kuai">
        <span class="el-icon-monitor tb"></span>
        <span class="wz">直播</span>
      </div>
      <div class="kuai">
        <span class="el-icon-mic tb"></span>
        <span class="wz">电台</span>
      </div>
      <div class="kuai">
        <span class="el-icon-monitor tb"></span>
        <span class="wz">私人Fm</span>
      </div>
    </div>
    <div class="day-list home-font">
      <div class="title">
        <h3>那些年</h3>
        <span @click="refresh()">换一批 <van-icon name="replay"/></span>
      </div>
      <div class="day-listimg">
        <div v-for="v in listimg" :key="v.userId">
          <img :src="v.coverImgUrl" alt="不一样的风格" style="width:1rem" />
          <p>{{ v.name }}</p>
        </div>
      </div>
    </div>
    <div class="supply home-font">
      <div class="title">
        <h3>歌单补给站</h3>
        <span>更多 ></span>
      </div>
      <div class="content" id="tui">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="(v, i) in list" :key="i">
            <van-card
              tag="热榜"
              :desc="' 作曲： ' + v.ar[0].name"
              :title="v.name"
              :thumb="v.al.picUrl"
              @click="play(v)"
            />
          </van-cell>
        </van-list>
      </div>
    </div>
  </section>
</template>

<script>
import { banner, dayList, getsongs } from "../../unitls/Serach";
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      listimg: [],
      v: 347226,
      listsongs: [],
      list: [],
      loading: false,
      finished: false,
      pagelist: 4055,
    };
  },
  async created() {
    this.dayList();
    let res = await banner();
    this.images = res.data.banners;
  },
  methods: {
    async dayList(v) {
      //每日推荐列表
      let res = await dayList(v);
      this.listimg = res.data.playlists;
    },
    refresh() {
      //随机更换
      if (this.v < 347236) {
        this.dayList((this.v += 2));
      } else {
        this.v = 347226;
      }
    },
    async getsongs() {
      let res = await getsongs();
      this.listsongs = res.data.hotSongs;
    },
    async onLoad() {
      //懒加载数据列表
      // 异步更新数据
      let res = await getsongs(this.pagelist);
      this.pagelist += 2;
      this.list = [...this.list, ...res.data.hotSongs];
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 140) {
        this.finished = true;
      }
    },
    play(v) {
      //点击播放歌曲传入id
      console.log(v);

      this.bus.$emit("play", v);
    },
  },
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;

  text-align: center;
}
.my-swipe img {
  width: 100%;
}

.home-font {
  width: 90%;
  font-size: 0.14rem;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title h3 {
  font-size: 0.16rem;
  font-weight: 500;
  padding: 0.03rem;
}
.title span {
  font-size: 0.12rem;
  padding: 0.03rem;
}
.day-listimg {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.day-listimg p {
  width: 1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-card__title {
  font-size: 0.16rem;
  text-align: center;
  margin: 3px 5px;
}

/* 图标css */
.t {
  display: flex;
  /* width: auto; */
  overflow: hidden;
  overflow-x: auto;
  /* border: 1px solid; */
  margin: 0.2rem 0;
}
.kuai {
  margin: 0.01rem 0.01rem;
  /* border: 1px solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tb {
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 50%;
  background-image: linear-gradient(to right, #ff416c 0%, #ff4b2b 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.24rem;
  color: white;
  /* border: 1px solid; */
}
.kuai .wz {
  display: block;
  width: 0.64rem;
  /* border: 1px solid; */
  text-align: center;
  font-size: 0.15rem;
  font-weight: 550;
  margin: 0.08rem 0.08rem;
}
.day-list {
  margin-bottom: 0.1rem;
}
</style>

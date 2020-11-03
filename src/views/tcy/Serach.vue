<template>
  <section>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, i) in images" :key="i">
        <img :src="img.imageUrl" alt="banner图" />
      </van-swipe-item>
    </van-swipe>
    <div class="icon">
      <dl>
        <dt><img src="/img/tuijian.png" /></dt>
        <dd>每日推荐</dd>
      </dl>
      <dl>
        <dt><img src="/img/排行榜.png" /></dt>
        <dd>排行榜</dd>
      </dl>
      <dl>
        <dt><img src="/img/电台.png" /></dt>
        <dd>深夜电台</dd>
      </dl>
      <dl>
        <dt><img src="/img/mv.png" /></dt>
        <dd>视频</dd>
      </dl>
    </div>
    <div class="day-list home-font">
      <div class="title">
        <h3>每日30首</h3>
        <span @click="refresh()">换一批 <van-icon name="replay"/></span>
      </div>
      <div class="day-listimg">
        <div v-for="v in listimg" :key="v.userId">
          <img :src="v.coverImgUrl" alt="每日30首" style="width:1rem" />
          <p>{{ v.name }}</p>
        </div>
      </div>
    </div>
    <div class="supply home-font">
      <div class="title">
        <h3>歌单补给站</h3>
        <span>更多 ></span>
      </div>
      <div class="content">
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
      console.log(res.data.hotSongs);
      this.listsongs = res.data.hotSongs;
    },
    async onLoad() {
      //懒加载数据列表
      // 异步更新数据
      let res = await getsongs(this.pagelist);
      this.pagelist += 2;
      this.list = [...this.list, ...res.data.hotSongs];
      console.log(this.list);
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;

  text-align: center;
}
.my-swipe img {
  width: 100%;
}
.icon {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
}
dl {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon dd {
  padding-top: 0.06rem;
  font-size: 0.12rem;
  text-align: center;
}
.icon img {
  display: block;
  width: 0.4rem;
}
h3 {
  font-size: 0.2rem;
}
.home-font {
  width: 90%;
  font-size: 0.14rem;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: space-between;
}
.title h3 {
  font-size: 0.16rem;
  font-weight: 500;
}
.title span {
  font-size: 0.12rem;
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


</style>

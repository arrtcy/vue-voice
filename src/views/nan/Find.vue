<template>
  <section>
    <van-search
      v-model="keyWords"
      show-action
      placeholder="搜索歌曲、歌手、专辑"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

    <van-card
      v-for="(item, index) in searchSong"
      :key="index"
      :desc="item.artists[0].name"
      :title="item.name"
      :thumb="item.artists[0].img1v1Url"
      @click="playHandle(item)"
    />
    <div class="tag">
      <van-tag
        v-for="(item, index) in hotSongs"
        :key="index"
        type="success"
        size="large"
        @click="searchHotsong(item.first)"
        >{{ item.first }}</van-tag
      >
    </div>
  </section>
</template>

<script>
import { getSearchSong, getHotSong } from "../../utils/request";
export default {
  data() {
    return {
      keyWords: this.$route.query.name,
      searchSong: [],
      hotSongs: [],
    };
  },
  methods: {
    // 获取用关键词获取的歌曲信息
    async onSearch() {
      let result = await getSearchSong(this.keyWords);
      this.searchSong = result;
    },
    // 获取热门歌曲   10个标签
    async loadhotSong() {
      let result = await getHotSong();

      if (this.searchSong[0]) {
        this.hotSongs = [];
      } else {
        this.hotSongs = result;
      }
    },
    // 加载热门歌曲信息   热门标签内部的歌曲
    async searchHotsong(songName) {
      let result = await getSearchSong(songName);
      // console.log(result);

      this.keyWords = songName;
      this.searchSong = result;
    },
    // 向播放页分发歌曲的id，歌名和歌手
    playHandle(item) {
      this.bus.$emit("play", item);
    },
  },
  created() {
    if (this.$route.query.name != undefined) {
      this.onSearch();
    }
    this.loadhotSong();
  },
};
</script>

<style scoped>
section {
  display: block;
}
.tag {
  width: 90%;
  margin: 0 auto;
}
.van-tag {
  margin: 5px 8px;
}
.van-card__title {
  font-size: 0.18rem;
  padding: 0.05rem 0;
}
</style>

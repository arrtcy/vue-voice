<template>
  <div class="play">
    <van-tabs v-model="active" animated>
      <van-tab title="歌词">
        <section>
          <div class="songwords" ref="songwords" v-html="songWords"></div>
        </section>
      </van-tab>
      <van-tab title="正在播放">
        <section>
          <h3>{{ name }}</h3>
          <h4>{{ artist }}</h4>
          <div class="ball" ref="ball" @click="control">
            <img
              ref="img"
              style="width: 100%"
              :src="imgUrl ? imgUrl : record"
            />
          </div>
          <div class="control">
            <van-icon
              :name="like == true ? 'like' : 'like-o'"
              class="collect-btn"
              color="red"
              size="44"
              @click="likeSong"
            />
          </div>
        </section>
      </van-tab>
      <van-tab title="热门评论">
        <section class="comment">
          <h4 v-show="comments[0] ? false : true">歌曲暂无热门评论</h4>
          <van-card
            v-for="(item, index) in comments"
            :key="index"
            :desc="item.content"
            :title="item.user.nickname"
            :thumb="item.user.avatarUrl"
          />
        </section>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getSongWords, getSongComment } from "../utils/request";

export default {
  data() {
    return {
      id: "",
      active: 1,
      comments: [],
      playUrl: "",
      name: "",
      artist: "",
      songWords: "",
      like: false,
      imgUrl: "",
      record: require("../../public/record.jpg"),
    };
  },
  created() {
    // 事件总线监听分发歌曲信息时间
    this.bus.$on("play", this.play);
  },
  mounted() {
    this.$nextTick(() => {
      this.rota();
    });
  },
  methods: {
    // 获取监听事件分发的歌曲信息
    async play(obj) {
      let SongWordsResult = await getSongWords(obj.id);
      this.songWords = SongWordsResult.replaceAll(/\[(.+?)\]/g, "<br>");
      let commentResult = await getSongComment(obj.id);
      this.comments = commentResult;
      this.name = obj.name;
      this.artist = obj.artist;
      this.id = obj.id;
      if (obj.al && obj.al.picUrl) {
        this.imgUrl = obj.al.picUrl;
      } else {
        this.imgUrl = "/img/mv.png";
      }
    },
    //暂时没用
    likeSong() {
      this.like = !this.like;
      if (this.like == true) {
        if (localStorage.getItem("likeSong")) {
          let likeSong = JSON.parse(localStorage.getItem("likeSong"));
          likeSong.unshift({
            id: this.id,
            name: this.name,
            artist: this.artist,
          });
          localStorage.setItem("likeSong", JSON.stringify(likeSong));
        } else {
          localStorage.setItem(
            "likeSong",
            JSON.stringify([
              { id: this.id, name: this.name, artist: this.artist },
            ])
          );
        }
      } else {
        let likeSong = JSON.parse(localStorage.getItem("likeSong"));
        let index = likeSong.findIndex((item) => item.id == this.id);
        likeSong.splice(index, 1);
        localStorage.setItem("likeSong", JSON.stringify(likeSong));
      }
    },
    control() {
      this.bus.$emit("pause");
    },
    rota() {
      console.log(this.$refs.img);
    },
  },
};
</script>

<style scoped>
.ball {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  animation: rotate 10s linear infinite;
  animation-play-state: paused;
  overflow: hidden;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.songwords {
  width: 100%;
  height: 3rem;
  margin: 0 auto;
  font-size: 0.16rem;
  overflow: auto;
  text-align: center;
}
section {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
section h3 {
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
section h4 {
  font-size: 0.18rem;
}
.control {
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.van-popup {
  overflow-y: visible !important;
}
.van-card {
  width: 95%;
  height: auto;
}
.van-card__desc {
  height: auto;
}
.van-ellipsis {
  overflow: visible;
  white-space: normal;
  max-height: none;
  height: 0.7rem !important;
  overflow: hidden;
}
.comment {
  height: 3.2rem;
  width: 100%;
  overflow: auto;
}
</style>

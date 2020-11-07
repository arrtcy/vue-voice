<template>
  <!-- 底部播放 -->
  <div class="aplay">
    <aplayer
      ref="audio"
      id="aplayer"
      :list="audio"
      :showLrc="true"
      :listForded="false"
      listMaxHeight="100px"
      :music="{
        title: this.audio[0].title,
        artist: '歌手: ' + this.audio[0].artist,
        src: this.audio[0].src,
        lrc: this.audio[0].lrc,
        pic: this.audio[0].pic,
      }"
    >
    </aplayer>
    <div class="top" @click="top"></div>
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
import { getlyric, getnear } from "../unitls/Serach";
export default {
  data() {
    return {
      audio: [
        {
          title: "情非得已",
          artist: "田崇阳",
          src: "/mp3/小F4 - 情非得已.mp3",
          lrc: "心声，倾听你的心声",
          pic: "/img/mv.png",
        },
      ],
      au: "",
    };
  },
  components: {
    Aplayer,
  },
  created() {
    this.bus.$on("play", this.play);
    this.bus.$on("pause", this.control);
  },

  methods: {
    async play(v) {
      // console.log(v);
      let res = await getlyric(v.id); //.catch((err) => console.log(err));
      let obj1 = {};
      if (res.data.lrc && res.data.lrc.lyric) {
        obj1.lrc = res.data.lrc.lyric;
      } else {
        obj1.lrc = "暂无歌词";
      }
      obj1.src = `https://music.163.com/song/media/outer/url?id=${v.id}.mp3`;
      obj1.title = v.name;
      // console.log(v.ar);
      if (v.ar && v.ar[0].name) {
        obj1.artist = v.ar[0].name;
      } else {
        obj1.artist = v.artists[0].name;
      }
      if (v.al && v.al.picUrl) {
        obj1.pic = v.al.picUrl;
      } else {
        obj1.pic = "/img/mv.png";
      }

      this.obj = obj1;
      this.audio.unshift(obj1);
    },
    async loadnearSongs() {
      if (localStorage.getItem("uid")) {
        // let uid = localStorage.getItem("uid");
        let res = await getnear();
        let arr = [];
        res.data.weekData.forEach((v) => {
          arr.push({
            id: v.song.id,
            src: `https://music.163.com/song/media/outer/url?id=${v.song.id}.mp3`,
            title: v.song.name,
            pic: v.song.picUrl,
            artist: v.ar[0].name,
          });
          arr.forEach((v) => {
            getlyric(v.id).then((res) => (v.lrc = res.data.lrc.lyric));
          });
        });
      }
    },
    top() {
      console.log(568978);
      this.bus.$emit("lrc");
    },
    control() {
      if (this.au.paused) {
        this.au.play();
      } else {
        this.au.pause();
      }
    },
    nearList(v) {
      console.log(v);
    },
  },
  mounted() {
    // this.loadnearSongs();
    document.querySelector("audio").autoplay = true;
    this.au = this.$refs.audio.$refs.audio;
  },
};
</script>

<style>
.aplayer-music {
  position: relative;
}
#aplayer .aplayer-title {
  position: absolute;
  top: 0;
}
#aplayer .aplayer-author {
  position: absolute;
  right: 0;
}
.aplay {
  position: relative;
}
.top {
  position: absolute;
  z-index: 9999;
  height: 50px;
  top: 20%;
  left: 45%;
  width: 30%;
}
</style>

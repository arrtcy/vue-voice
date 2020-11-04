<template>
  <!-- 底部播放 -->
  <aplayer
    autoplay
    theme
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
    <slot> </slot>
  </aplayer>
</template>

<script>
import Aplayer from "vue-aplayer";
import { getlyric, getnear } from "../unitls/Serach";
export default {
  data() {
    return {
      obj: {
        title: "情非得已",
        artist: "田崇阳",
        src: "/mp3/小F4 - 情非得已.mp3",
        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
        pic: "/img/mv.png",
      },
      audio: [
        {
          title: "情非得已",
          artist: "田崇阳",
          src: "/mp3/小F4 - 情非得已.mp3",
          lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
          pic: "/img/mv.png",
        },
      ],
    };
  },
  components: {
    Aplayer,
  },
  created() {
    this.bus.$on("play", this.play);
  },
  methods: {
    async play(v) {
      console.log(v);
      let res = await getlyric(v.id).catch((err) => console.log(err));
      let obj1 = {};
      obj1.lrc = res.data.lrc.lyric;
      obj1.src = `https://music.163.com/song/media/outer/url?id=${v.id}.mp3`;
      obj1.title = v.name;
      obj1.artist = v.ar[0].name;
      obj1.pic = v.al.picUrl;
      this.obj = obj1;
      this.audio.unshift(obj1);
      document.querySelector(".aplayer-list-light")[0].click();
    },
    async loadnearSongs() {
      if (localStorage.getItem("uid")) {
        let uid = localStorage.getItem("uid");
        let res = await getnear(uid);
        let arr = [];
        console.log(res);
        res.data.weekData.forEach((v) => {
          arr.push({
            id: v.song.id,
            title: v.song.name,
            pic: v.song.picUrl,
            artist: v.ar[0].name,
          });
          console.log(arr);
        });
      }
    },
  },
  mounted() {
    // this.loadnearSongs();
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
  left: 1rem;
}
</style>

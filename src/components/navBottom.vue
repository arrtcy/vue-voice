<template>
  <!-- 底部播放 -->
  <aplayer
    id="aplayer"
    :music="{
      title: this.obj.title,
      artist: '歌手: ' + this.obj.artist,
      src: this.obj.src,
      lrc: this.obj.lrc,
    }"
  >
  </aplayer>
</template>

<script>
import Aplayer from "vue-aplayer";
import { getlyric } from "../unitls/Serach";
export default {
  data() {
    return {
      obj: {
        title: "情非得已",
        artist: "田崇阳",
        src: "/mp3/小F4 - 情非得已.mp3",
        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
      },
      arr: [],
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
      this.obj = obj1;
      console.log(this.obj);
    },
    start() {
      console.log(this.$refs.$refs.audio);
    },
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

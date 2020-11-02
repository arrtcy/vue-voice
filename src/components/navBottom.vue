<template>
  <!-- 底部播放 -->
  <aplayer
    :music="{
      title: '情非得已',
      artist: '田崇阳',
      src: '/mp3/小F4 - 情非得已.mp3',
      lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',
    }"
  >
  </aplayer>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  components: {
    Aplayer,
  },
  methods: {
    play() {
      console.log(this.$refs.audio.duration);
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
}
.van-tabbar--fixed {
  position: relative;
}
.kong {
  flex: 1;
}
</style>

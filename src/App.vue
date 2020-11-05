<template>
  <div id="app">
    <headerTop />
    <router-view />
    <navBottom />
    <van-popup
      :lazy-render="false"
      position="bottom"
      :style="{ height: '50%' }"
      v-model="show"
    >
      <Play></Play>
    </van-popup>
  </div>
</template>

<script>
import navBottom from "@/components/navBottom";
import headerTop from "@/components/headerTop";
import Play from "@/components/Play";

export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.bus.$on("lrc", this.showPopup);
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
  components: {
    navBottom,
    headerTop,
    Play,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 100px;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-size: 0.16rem;
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow: auto;
}
</style>

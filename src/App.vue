<template>
  <div id="app">
    <headerTop />
    <router-view />
    <navBottom />
    <van-popup
      v-model="isshow"
      position="left"
      :style="{ width: '85%', height: '100%' }"
    >
      <Personal></Personal>
    </van-popup>
    <keep-alive>
      <van-popup
        :lazy-render="false"
        position="bottom"
        :style="{ height: '50%' }"
        v-model="show"
      >
        <Play></Play>
      </van-popup>
    </keep-alive>
  </div>
</template>

<script>
import navBottom from "@/components/navBottom";
import headerTop from "@/components/headerTop";
import Play from "@/components/Play";
import Personal from "@/components/Presonal";
export default {
  name: "App",
  data() {
    return {
      show: false,
      isshow: false,
    };
  },
  created() {
    this.bus.$on("lrc", this.showPopup);
    this.bus.$on("showPopup", this.proup);
  },
  methods: {
    showPopup() {
      console.log(123);
      this.show = true;
    },
    proup() {
      this.isshow = true;
    },
  },
  components: {
    navBottom,
    headerTop,
    Play,
    // eslint-disable-next-line vue/no-unused-components
    Personal,
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

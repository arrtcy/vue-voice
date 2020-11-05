<template>
  <div id="app">
    <headerTop />
    <router-view />
    <keep-alive>
      <navBottom></navBottom>
    </keep-alive>
  </div>
</template>

<script>
import navBottom from "@/components/navBottom";
import headerTop from "@/components/headerTop";

export default {
  components: {
    navBottom,
    headerTop,
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

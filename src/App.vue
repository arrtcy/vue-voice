<template>
  <div id="app">
    <headerTop />

    <router-view />
    <navBottom />
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
html,
body,
#app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
section {
  flex: 1;
  overflow: auto;
}
</style>

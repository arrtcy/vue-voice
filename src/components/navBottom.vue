<template>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
    <van-tabbar-item icon="search">标签2</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onChange(v) {
      console.log(v);
    },
  },
};
</script>

<style scoped>
.van-tabbar--fixed {
  position: relative;
}
</style>

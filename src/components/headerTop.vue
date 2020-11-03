<template>
  <div class="header">
    <!-- 头部导航 -->
    <van-tabs v-model="active">
      <van-tab title="我的"></van-tab>
      <van-tab title="发现"></van-tab>
      <van-tab title="分类"></van-tab>
    </van-tabs>
  </div>
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

<style></style>

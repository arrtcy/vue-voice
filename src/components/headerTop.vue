<template>
  <div class="header">
    <!-- 头部导航 -->
    <van-tabs v-model="active">
      <van-tab title="我的">内容 1</van-tab>
      <van-tab title="发现">内容 2</van-tab>
      <van-tab title="分类">内容 3</van-tab>
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

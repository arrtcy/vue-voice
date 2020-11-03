<template>
  <div class="header" v-clock>
    <!-- 头部导航 -->
    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item>
        <router-link :to="{ name: 'Myself' }"
          >我的</router-link
        ></van-tabbar-item
      >

      <van-tabbar-item>
        <router-link :to="{ name: 'Serach' }"
          >发现</router-link
        ></van-tabbar-item
      >
      <van-tabbar-item>分类</van-tabbar-item>
      <van-tabbar-item>搜索</van-tabbar-item>
    </van-tabbar>
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

<style scoped>
[v-clock] {
  display: none;
}
.router-link-active {
  color: orange;
  font-size: 0.16rem;
  font-weight: 500;
}
.van-tabbar-item {
  font-size: 0.14rem;
}
a {
  color: #333;
}
</style>

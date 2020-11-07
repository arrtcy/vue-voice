<template>
  <div class="header">
    <!-- 头部导航 -->
    <van-tabbar v-model="active" :fixed="false">
      <van-icon
        name="exchange"
        color="#1989fa"
        size="20"
        class="icon"
        @click="showpop"
      />
      <van-tabbar-item>
        <router-link :to="{ name: 'Myself' }">我的</router-link>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link :to="{ name: 'Serach' }">发现</router-link>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link :to="{ name: 'Sort' }"> 分类</router-link>
      </van-tabbar-item>

      <van-tabbar-item
        ><router-link :to="{ name: 'Find' }">搜索</router-link>
      </van-tabbar-item>
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
    showpop() {
      // console.log(2323);
      this.bus.$emit("showPopup");
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: orange;
  font-size: 0.2rem;
  font-weight: 500;
}
.van-tabbar-item {
  font-size: 0.14rem;
}
a {
  color: #333;
}
.icon {
  margin: 16px 12px;
}
</style>

<template>
  <section>
    <van-tabs v-model="active">
      <van-tab title="我的粉丝">
        <div class="fredinfo" v-for="item in followeds" :key="item.id">
          <img :src="item.avatarUrl" alt="" />
          <div class="right">
            <span>名字：{{ item.nickname }}</span>
            <p>个性签名:{{ item.signature }}</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="我的关注">
        <div class="fredinfo" v-for="item in concern" :key="item.id">
          <img :src="item.avatarUrl" alt="" />
          <div class="right">
            <span>名字：{{ item.nickname }}</span>
            <p>个性签名:{{ item.signature }}</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </section>
</template>

<script>
import { fans, concern } from "../../unitls/Login";
export default {
  data() {
    return {
      active: 0,
      followeds: [],
      concern: [],
    };
  },
  async created() {
    // console.log(this.$route.query)
    const res = await fans(this.$route.query);
    // console.log(res.data.followeds)
    this.followeds = res.data.followeds;

    const res1 = await concern(this.$route.query);
    // console.log(res1.data.follow)
    this.concern = res1.data.follow;
    //  console.log(this.concern)
  },
};
</script>

<style scoped>
.fredinfo {
  padding: 0.15rem;
  background-color: rgb(240, 240, 240);
  width: 100%;
  height: 1.2rem;
  display: flex;
  /* border: 1px solid; */
  margin-top: 0.06rem;
}

.fredinfo img {
  width: 30%;
  height: 1.2rem;
  border: 1px solid;
}
.right {
  display: flex;
  flex-direction: column;
  padding: 0.15rem;
}

p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
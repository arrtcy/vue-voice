<template>
  <section>
    <div class="main" v-for="item in commentList" :key="item.id">
      <img :src="item.user.avatarUrl" alt="" />
      <div class="right">
        <span>用户：{{ item.user.nickname }}</span>
        <p>评论:{{ item.content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { comment } from "../../unitls/Login";
export default {
  data() {
    return {
      commentList: [],
    };
  },
  async created() {
    console.log(this.$route.query);
    const res = await comment(this.$route.query);

    console.log(res.data.hotComments);
    this.commentList = res.data.hotComments;
  },
};
</script>

<style>
.main {
  padding: 0.15rem;
  background-color: rgb(240, 240, 240);
  width: 100%;
  height: 1.2rem;
  display: flex;
  border: 1px solid;
  margin-top: 0.06rem;
}

.main img {
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
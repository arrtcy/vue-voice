<template>
  <section>
    <span  @click="back"><van-icon name="arrow-left" size="20"/>返回</span>
    <div class="main" v-for="item in commentList" :key="item.id">
      <img :src="item.user.avatarUrl" alt="" />
      <div class="right">
       <h4>用户：{{ item.user.nickname }}</h4> 
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
  methods: {
    back(){
      this.$router.back()
    }
  },
  async created() {
    // console.log(this.$route.query);
    const res = await comment(this.$route.query);
    // console.log(res.data.hotComments);
    this.commentList = res.data.hotComments;
  },
};
</script>

<style>
.main {
  padding: 0.1rem;
  background-color:#eeeeee;
   margin:0 auto;
  width: 85%;
  height: 1.2rem;
  display: flex;
  border: 1px solid;
  margin-top: 0.06rem;
}

.main img {
  width: 34%;
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
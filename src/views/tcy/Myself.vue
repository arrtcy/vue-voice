<template>
  <section class="myself">
    <van-card
      :desc="use.signature"
      :title="use.nickname"
      :thumb="use.avatarUrl"
    />
    <van-grid>
      <van-grid-item icon="location" text="本地音乐" />
      <van-grid-item icon="audio" text="音乐" />
      <van-grid-item icon="checked" text="下载" />
      <van-grid-item icon="live" text="视频" />
    </van-grid>
    <van-grid>
      <van-grid-item icon="friends" text="我的好友"  />
      <van-grid-item icon="invition" text="收藏" />
      <van-grid-item icon="cluster" text="电台" />
      <van-grid-item icon="weapp-nav" text="音乐应用" />
    </van-grid>
    <van-tabs v-model="activeName">
      <van-tab title="创建歌单" name="a">
        <van-card
          v-for="item in playList" :key="item._id"
          :desc="item.description"
          :title="item.name"
          :thumb="item.coverImgUrl"
          @click="click(item)"
        />
      </van-tab>
      <van-tab title="收藏歌单" name="b">
          <van-card
          v-for="item in topplayList" :key="item._id"
          :desc="item.description"
          :title="item.name"
          :thumb="item.coverImgUrl"
           @click="click(item)"
        />
      </van-tab>
    </van-tabs>
  </section>
</template>

<script>
import { info } from "../../unitls/Login";
export default {
  data() {
    return {
      activeName: "a",
      use: {},
      playList:[],
      topplayList:[],
      
    };
  },
  methods: {
    click(item){
      // console.log(item.id)
      this.$router.push({name:'Song',query:{id:item.id,coverImgUrl:item.coverImgUrl,name:item.name,description:item.description}})
    }
  },
  async created() {
    this.use = JSON.parse(localStorage.getItem("user"));
    // console.log(this.use);
    const res = await info(this.use);
    // console.log(res.data.playlist);
    this.playList = res.data.playlist;
    this.topplayList =this.playList.splice(12)
    // console.log(this.topplayList)
    // console.log(this.playList)
  },
};
</script>

<style scoped>
.myself {
  padding: 0.1rem;
}

.van-card__title {
  font-size: 0.16rem;
}
</style>

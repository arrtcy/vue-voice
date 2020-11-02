<template>
  <section>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="icon">
      <dl>
        <dt><img src="/img/tuijian.png" /></dt>
        <dd>每日推荐</dd>
      </dl>
      <dl>
        <dt><img src="/img/排行榜.png" /></dt>
        <dd>排行榜</dd>
      </dl>
      <dl>
        <dt><img src="/img/电台.png" /></dt>
        <dd>深夜电台</dd>
      </dl>
      <dl>
        <dt><img src="/img/mv.png" /></dt>
        <dd>视频</dd>
      </dl>
    </div>
    <div class="day-list home-font">
      <div class="title">
        <h3>每日30首</h3>
        <span>更多 ></span>
      </div>
      <div class="content"></div>
    </div>
    <div class="supply home-font">
      <div class="title">
        <h3>歌单补给站</h3>
        <span>更多 ></span>
      </div>
    </div>

    <div class="singer home-font">
      <div class="title">
        <h3>这些优质歌手,太可了</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.icon {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
}
dl {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon dd {
  padding-top: 0.06rem;
  font-size: 0.12rem;
  text-align: center;
}
.icon img {
  display: block;
  width: 0.4rem;
}
h3 {
  font-size: 0.2rem;
}
.home-font {
  width: 90%;
  font-size: 0.14rem;
  margin: 0 auto;
}
.title {
  display: flex;
  justify-content: space-between;
}
.title h3 {
  font-size: 0.16rem;
  font-weight: 500;
}
.title span {
  font-size: 0.12rem;
}
</style>

<template>
  <section class="sort">
    <!-- 插件 -->
    <div class="stacked-cards">
      <ul >
        <li class="li1" @click="clickShow($event)"> 
            <video 
            poster="http://pic1.win4000.com/mobile/2020-11-04/5fa2526d5a971_250_350.jpg"
          ></video>
          <van-icon color="#ddd" name="play-circle" size="0.6rem" />
        </li>
        <li class="li2" @click="clickShow($event)">
             <video 
           
            poster="http://pic1.win4000.com/mobile/2020-11-02/5f9fccd22f2b6_250_350.jpg"
          ></video>
          <van-icon color="#ddd" name="play-circle" size="0.6rem" />
        </li>

        <li class="li3">
            
            <video  
              
              poster="http://pic1.win4000.com/mobile/2020-10-26/5f967d14b58f7_250_350.jpg"
            >
            </video> 

          <van-icon color="#ddd" name="play-circle" size="0.6rem" />
        </li>

        <li class="li4" @click="clickShow($event)">
             <video 
            poster="http://pic1.win4000.com/mobile/2020-10-27/5f97b39cef663_250_350.jpg"
          ></video>
          <van-icon color="#ddd" name="play-circle" size="0.6rem" />
        </li>
        <li class="li5" @click="clickShow($event)">
             <video 
            
            poster="http://pic1.win4000.com/mobile/2020-09-27/5f7023c9e0287_250_350.jpg"
          ></video>
          <van-icon color="#ddd" name="play-circle" size="0.6rem" />
        </li>
      </ul>
    </div>
    <!-- ------ -->

    <ul class="ul">
      <li
        @click="newDie"
        style="background:url('http://p4.music.126.net/ed9Wlc8HvHd2cvI1FtLg9A==/109951165431104320.jpg?param=200y200') center/cover no-repeat"
      >
        新碟上架
      </li>
      <li
        @click="hotSearch"
        style="background:url('http://p2.music.126.net/fWQ5EX9BDCvuaKqtZoYs3A==/109951165425855499.jpg?param=140y140') center/cover no-repeat"
      >
        热搜歌曲
      </li>
      <li
        @click="newSong"
        style="background:url('http://p1.music.126.net/-tNQI9Gokz7o-m9TrbRlwg==/109951165389737885.jpg?param=140y140') center/cover no-repeat"
      >
        新歌速递
      </li>
      <li
        @click="hotSinger"
        style="background:url('http://p4.music.126.net/wTcIyvb9xPsNzZTJ7ettow==/109951164273697592.jpg?param=140y140') center/cover no-repeat"
      >
        热门歌手
      </li>
      <li
        @click="hotPlat"
        style="background:url('http://p2.music.126.net/ETm6jJLCvxXWl6nynqeGaQ==/109951165431530889.jpg?param=140y140') center/cover no-repeat"
      >
        热门电台
      </li>
      <li
        @click="Race"
        style="background:url('http://p3.music.126.net/IwUPGC1v8hObFwnoUlOqbA==/109951165387764913.jpg?param=140y140') center/cover no-repeat"
      >
        榜单
      </li>
      <li
        @click="Commend"
        style="background:url('http://p1.music.126.net/OXHVPwI1IKAUA9dSu3Xq8A==/109951165412411765.jpg?param=140y140') center/cover no-repeat"
      >
        Mv
      </li>
      <li
        @click="commendSong"
        style="background:url('http://p4.music.126.net/Lmcr9KJ1GFRxx4ODy1aR4w==/109951164884284284.jpg?param=140y140') center/cover no-repeat"
      >
        推荐新音乐
      </li>
      <li
        @click="commendJe"
        style="background:url('http://p3.music.126.net/-eo6zwqZEdRCX_4NhFIWNw==/109951165392959577.jpg?param=100y100') center/cover no-repeat"
      >
        推荐节目
      </li>
    </ul>

    <div class="kong"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    newDie() {
      this.$router.push({ name: "newDie" });
    },

    hotSearch() {
      this.$router.push({ name: "hotSearch" });
    },
    newSong() {
      this.$router.push({ name: "newSong" });
    },
    hotSinger() {
      this.$router.push({ name: "hotSinger" });
    },
    hotPlat() {
      this.$router.push({ name: "hotPlat" });
    },
    Race() {
      this.$router.push({ name: "Race" });
    },
    Commend() {
      this.$router.push({ name: "Commend" });
    },
    commendSong() {
      this.$router.push({ name: "commendSong" });
    },
    commendJe() {
      this.$router.push({ name: "commendJe" });
    },
    clickShow(event) {
      console.log(event.target);
      console.log(111);
      //   this.isShow = true;
    },
  },
  created() {},
  mounted() {
    var stackedCard = new window.stackedCards({
      selector: ".stacked-cards",
      layout: "slide",
      transformOrigin: "center",
    });

    stackedCard.init();
  },
};
</script>

<style scoped>
.sort {
  position: relative;
}
.ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.ul li {
  padding: 0;
  font-size: 0.2rem;
  font-weight: 600;
  color: yellow;
  margin-top: 20px;
  list-style: none;
  width: 1rem;
  height: 1.3rem;
  border: 0;
  border-radius: 0.05rem;
}
.stacked-cards {
  position: relative;
}
.stacked-cards ul {
  position: relative;
  max-width: 60%;
  margin: 0 auto;
  padding-left: 0;
}

.stacked-cards li {
  margin-top: 5px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0px #333;
  list-style: none;
  width: 65%;
  position: absolute;
  left: 50%;
  transition: 0.5s ease transform;
}

.stacked-cards li:after {
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.stacked-cards li.active:after {
  display: none;
}
.stacked-cards li img {
  position: relative;
  display: block;
  max-width: 100%;
  height: auto;
  z-index: 4;
}
.stacked-cards li.active {
  cursor: default;
  box-shadow: 0 5px 10px 0px #333;
  transition: 0.5s ease transform;
}

.stacked-cards {
  padding-top: 40px;
  padding-bottom: 15px;
}

.stacked-cards-fanOut {
  padding-bottom: 40px;
}

.stacked-cards-fanOut li img {
  max-height: 200px;
}

.stacked-cards li {
  height: 250px;
}

@media (max-width: 767px) {
  .stacked-cards li {
    height: 180px;
  }
}

/* .stacked-cards li {
  background-color: #00bcd4;
}

.stacked-cards li:nth-child(n) {
  background-color: #3599db;
}

.stacked-cards li:nth-child(2n) {
  background-color: #e61b77;
}

.stacked-cards li:nth-child(3n) {
  background-color: #00bcd4;
}

.stacked-cards li:nth-child(4n) {
  background-color: #f4b251;
}

.stacked-cards li:nth-child(5n) {
  background-color: #8e4497;
} */
video {
  filter: brightness(150%);
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 8px;
}
.van-icon {
  display: block;
  filter: brightness(300%);
  position: absolute;
  top: 30%;
  margin: auto;
  left: 30%;
  opacity: 0.7;
}
.li3,
.li1,
.li2,
.li4,
.li5 {
  position: relative;
}
.video {
  position: absolute;
  width: 100%;
  height: 230px;
  top: 10px;
  background-color: pink;
  z-index: 99999999;
}
.kong {
  height: 1rem;
  width: 100%;
}
</style>

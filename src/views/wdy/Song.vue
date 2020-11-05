<template>
    <section class="song">
      <div id="top">
          <div class="left"><van-icon name="arrow-left" @click="goback"/>歌单</div>
          <div class="right"> <van-icon name="search" /> <van-icon name="ellipsis" /></div>
          </div>
          <div id="nav">
            <van-card 
                 desc="请编辑"
                 :title="obj.name"
                 :thumb="obj.coverImgUrl"
                />
          </div>
          <div id="footer">
            <div><van-icon name="chat-o"/>评论</div>
            <div><van-icon name="share-o" />分享</div>
            <div><van-icon name="down" />下载</div>
            <div><van-icon name="sign" />多选</div>
          </div>
          <div id="main">
            <ul>
              <li v-for="(item,i) in songList" :key='item._id' @click="click(i)"><span>{{item.name}}</span>
                 <div>
                  
                   <van-icon name="play-circle-o"/></div>
              </li>
            </ul>
          </div>
    </section>
</template>

<script>
import { songs} from "../../unitls/Login";
export default {
  data(){
    return{
      perinfo:{},
      songList:[],
      obj:{}
    }
  },
  methods: {
    goback(){
      this.$router.back()
    },
    info(v) {
      this.perinfo = v;
      // console.log(this.perinfo.nickname);
    },
    async song(o){
      const res=await songs(o)
      // console.log(res.data.playlist.tracks)
      this.songList=res.data.playlist.tracks
    },
    click(i){
      this.bus.$emit("play",this.songList[i])
    }
  },
  created() {
    this.bus.$on("info", this.info);
    this.perinfo = JSON.parse(localStorage.getItem("user"));
    // console.log(this.$route.query)
    this.obj = this.$route.query
    // console.log(this.obj)
    this.song(this.obj)
  },
}
</script>
<style scoped>
  .song{
    padding: 0.1rem;
  }
.left{float:left}
.right{float:right}
#nav{
  clear: both;
  overflow: hidden;
  background-color: rgb(240, 240, 240);
}
.van-icon{
  font-size:0.2rem ;
}
#footer{
  border-radius: 3%;
  text-align: center;
  background-color: rgb(240, 240, 240);
  height: 1rem;
  display:flex;
  justify-content: space-around;
}
#footer div{
  margin-top: 0.3rem;
  flex-direction: column;
  display: flex;
}

#main li{
  border-radius: 5%;
  display: flex;
  justify-content: space-between;
  position: relative;
  /* border: 1px solid red; */
  line-height: 0.5rem;
  margin-top: 0.02rem;
  width: 100%;
  height: 0.5rem;
  background-color: rgb(240, 240, 240);
}
.van-card__title{
  font-size: 0.16rem;
}
.van-card__desc{
 margin-top: 0.12rem;
}
#main .van-icon{
  line-height: 0.5rem;
  font-size: 0.3rem;
}
</style>
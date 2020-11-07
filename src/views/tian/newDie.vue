<template>
  <section>
    <img src="http://p4.music.126.net/ed9Wlc8HvHd2cvI1FtLg9A==/109951165431104320.jpg?param=200y200" alt="" class="img1">



    <!-- 加载更多 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item, i) in list" :key="i" >
          <img class="img2" :src="item.picUrl" alt="" /> 
          <span>
           <p class="span1"> {{ item.name }}</p>
           <p class="span2">作者： {{item.song.artists[0].name}}</p>
           </span>
           <van-icon :name="item.bol?'play-circle':'pause-circle'" size="0.3rem" @click="playMusic(item,i)"  color="white"/>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </section>
</template>

<script>
import { newDie } from "../../unitls/sort";
export default {
  name: "newDie",
  data() {
    return {
      list: [],
      obj: {},
      page: 0,
      obj1: {},
      loading: false,
      finished: false,
      refreshing: false,
      num:0.5,
    };
  },
  created() {},
  methods: {
    //点击播放
   
   async playMusic(item,i){
      console.log(item.song.artists[0].name)
     let a=item.song.artists[0].name
    // console.log({id:item.id,name:item.name,ar:[{name:a}],al:{picUrl:item.picUrl}});
     let obj={id:item.id,name:item.name,ar:[{name:a}],al:{picUrl:item.picUrl}}
     
     //this.bus.$emit('play',obj)
     


      this.list[i].btn=!this.list[i].btn
      if(this.num == i){
          this.bus.$emit('pause')
           item.bol = true;
      }else{

        this.num = i;
        if (item.bol == false) {
          this.bus.$emit("play", obj);
        } else {
          this.bus.$emit("pause");
        }

      }

    },


    /* 加载更多 */
    async onLoad() {
      //console.log(this.page);
      this.loading = true;
      let res = await newDie(this.page);
      this.page++;
      //console.log(res.data.result);
      res.data.result.forEach(v => {
        v.bol=true

      });
      
      // console.log(this.list, res.data.albums);
      // if(this.page>=21){
      this.loading = false;
      // }

      this.list = [...this.list, ...res.data.result];
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      //this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style scoped>
.van-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.van-cell__value {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin:0 auto;
  margin-top: 0.2rem;
  height: 1.3rem;
  border: 0.01rem solid black;
  border-radius: 5px;
  background: url('/img/beg4.jpg') center/cover no-repeat;
  background-color:rgba(250, 244, 244, 0.966);
}
.img2 {
  display:block;
  width: 1rem;
  height: 1rem;
}
.span1 {
 color: white;
  width: 1.1rem;
  height:0.3rem;
  font-size: 0.25rem;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  margin-bottom: 0.1rem;
}
.span2 {
  color: white;
  width: 1.1rem;
  height:0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;

}
.img1{
  display: block;
  margin:0 auto;
  width:94%;
  height:2rem;
  border-radius: 8px;
}
van-icon{
  margin-left: 0.3rem;
}
</style>

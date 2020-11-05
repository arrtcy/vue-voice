<template>
  <section>
    <!-- 加载更多 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item, i) in list" :key="i"    @click="playClick(item)"   >
          <div >
            <span> {{ item.name }}</span>
            <!-- <span>{{item.subType}}</span> -->
            <img :src="item.artist.picUrl" alt=""   />
          </div>
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
      obj:{},
      page: 0, 
    
      obj1:{},
      loading: false,
      finished: false,
      refreshing: false,
     
    };
  },
  created() {},
  methods: {
    //点击播放
   
    playClick(items){
      console.log(items)
      console.log(items.artist.name)
      console.log(items.copyrightId,items.name)
      this.obj.id= items.copyrightId,
      this.obj.name = items.name,
      this.obj1.name=items.artist.name
      this.obj.ar=[this.obj1];
      console.log(this.obj)
    
    },



    /* 加载更多 */
    async onLoad() {
      //console.log(this.page);
      this.loading = true
      let res = await newDie(this.page);
      this.page++;
      //console.log(res);
     // console.log(this.list, res.data.albums);
// if(this.page>=21){
          this.loading = false
        // }
         
     
      this.list = [...this.list, ...res.data.albums];
        


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

<style>
.van-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.van-cell {
  margin-top: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1.1rem;
  height: 1.5rem;
  border: 0.01rem solid black;
   border-radius: 5px;
}
img {
  display: block;
  width: 1rem;
  height: 1.2rem;
}
span {
  display: block;
  width: 1.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
   text-align: center;
}
</style>

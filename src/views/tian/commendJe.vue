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
            <img :src="item.picUrl" alt=""   />
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </section>
</template>

<script>
import { hotSearch } from "../../unitls/sort";
export default {
  name: "hotSearch",
  data() {
    return {
      list: [],
      page: 0,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  created() {
     this.loadData()

  },
  methods: {
    //点击播放
    playClick(items){
        console.log(items.copyrightId)


    },
   async  loadData(){
        let res = await hotSearch();
        //  console.log(res.data.result);
         let arr = res.data.result
        let s= arr.sort(
       function(){
        return  Math.random()>0.5?1:-1
      })
        this.list = s;

      },

     


    /* 加载更多 */
    async onLoad() {
      //console.log(this.page);
      this.loading = true
      let res = await hotSearch(this.page);
      this.page++;
      // console.log(res.data.result);
     // console.log(this.list, res.data.albums);
// if(this.page>=21){
         this.loading = false
        // }
      this.list = [...this.list, ...res.data.result];
        

      let arr = res.data.result
      let s= arr.sort(
      function(){
        return  Math.random()>0.5?1:-1
      })
    this.list = [...this.list, ...s];




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

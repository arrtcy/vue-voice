
<template>
  <section>
    <van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
/> 

<van-popup v-model="show" position="bottom" :style="{ height: '60%' }" >
  <ul>
    <li class="comment" v-for="c in commentList" :key="c.commentId">
      <span class="s1">{{c.user.nickname}}</span>
     <span class="s2">{{c.content}}</span>
    </li>
  </ul>
  
<div class="b">
  <span>评论</span>
  <textarea name="" id="" cols="30" rows="10" placeholder="请发表你的评论"></textarea>
  <button @click="sent">发送</button>
</div>


</van-popup>   
    <div class="selection">
    
     <div  v-for="(item,i) in list" :key="item.id" class="mv">
       <p class="op">{{item.name}}</p>
       <div class="video">
        <video  ref="videoPlay"
         :src="videoURL[i]"
        :poster="item.cover"
        controls
        >
        </video>
        </div>
        <p class="bottom">
         <span @click="share(item)" > <van-icon name="share" :color="item.isColor"/>转发</span>
          <span @click="good(item)"><van-icon name="good-job" :color="item.goodColor"/>点赞</span> 
          <span @click="like(item)"><van-icon name="like" :color="item.likeColor"/>收藏</span>  
          <span @click="chat(item)"> <van-icon name="chat" :color="item.chatColor"/>评论</span> 
        </p>

    </div>
    
    </div>
  </section>
</template>

<script>


import{Mv, MvList,commit} from '../../unitls/sort'
export default {
  
    name:"Rock",
  data(){ 
    return{
      commentList:[],
       list:[],
        videoURL:[],
        show: false,
       showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],


    }
   

  },
 created(){
 
this.LoadData()

},
methods:{

async LoadData(){
  let res= await MvList()
  //console.log(res.data.data)

  res.data.data.forEach(v => {
    //console.log(v.id)
    Mv(v.id).then(res1=>{
 
this.videoURL.push(res1.data.data.url)

    })
  }); 
  
  
  res.data.data.forEach(v=>{
    v.isColor='#ccc'
    v.goodColor='#ccc'
    v.likeColor='#ccc'
    v.chatColor='#ccc'
  
  
  })
  this.list =res.data.data
 // console.log(this.list)
  }, 

share(item){
 // console.log(item)
    item.isColor="black"
     this.showShare=true
},
good(item){
 // console.log(item)
    item.goodColor="yellow"
},
like(item){
 // console.log(item)
    item.likeColor="red"
},
 async chat(item){
    item.chatColor="green"
    this.show = true;
    //console.log(item)
    let res = await commit(item.id)
    // console.log(res.data.comments)  
    this.commentList= res.data.comments
},
sent(){
   



}

},


}
</script>

<style scoped>
.section{
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.video{
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 95%;
  height: 2rem;

 
 border-radius: 0.08rem;
}
video{
  display: block;
  width: 100%;
  height: 100%;
   object-fit: fill;
   border-radius: 0.08rem;
}

.mv{
 
  margin-top:0.5rem;
}
.op{
  padding-left:0.10rem;
 margin-bottom:0.1rem ;
 font-size: 0.2rem;
}
.bottom{
 margin-top:0.1rem ;
 display: flex;
 justify-content: space-around;
 
}
template{
  position: relative;
}
.van-popup{
position: absolute;
bottom: 0;
display: flex;
flex-direction: column;
}
ul{
  flex: 1;
  overflow: auto;
}
.comment{
  margin-bottom:20px ;
  width: 100%;
  height: 40px;
  
  display: flex;
  flex-direction: column;
  background-color: rgba(192, 245, 68, 0.8);
  
}
.s1{
  display: block;
   background-color: rgb(233, 233, 153)
  
}
.s2{
  display: block;
  margin-left:10px;
}

.b{

height: 100px;
background-color: rgb(241, 238, 238);
height: 1rem;
display: flex;
 justify-content: space-between;
}
button{
  height: 40px;
  width: 60px;
}

</style>
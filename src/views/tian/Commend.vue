
<template>
  <section>
    
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


import{Mv, MvList} from '../../unitls/sort'
export default {
  
    name:"Rock",
  data(){ 
    return{
       list:[],
        videoURL:[],
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
},
good(item){
 // console.log(item)
    item.goodColor="yellow"
},
like(item){
 // console.log(item)
    item.likeColor="red"
},
chat(item){
  //console.log(item)
    item.chatColor="green"
},

},


}
</script>

<style>
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
</style>
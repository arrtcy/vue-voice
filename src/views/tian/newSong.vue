
<template>
  <section>
    <img class="img1" src="http://p1.music.126.net/-tNQI9Gokz7o-m9TrbRlwg==/109951165389737885.jpg?param=140y140" alt="">
     <ul>
       <li  class="new" v-for="(item,i) in list" :key="item.id">
         <img :src="item.album.picUrl" alt="" class="img2">
           <span>
          <p class="span1"> {{item.name}}</p>
          <p class="span2">{{item.artists[0].name}} </p>
          </span>
           <van-icon :name="item.btn?'play-circle':'pause-circle'" size="0.3rem" @click="playList(item,i)"  color="white"/>
        </li>
     </ul>
  </section>
</template>

<script>


import{ newSong} from '../../unitls/sort'
export default {
  
    name:"Chinese",
    data(){ 
    return{
       list:[]
    }
   

  },
 created(){
 
this.LoadData()

},
methods:{
  playList(item,i){
    console.log(i)
      console.log(item)
      console.log(this.list[i].btn)
      this.list[i].btn=!this.list[i].btn
    },


 async LoadData(){
  let res= await newSong()
  //console.log(res)
  console.log(res.data.data)
  this.list = res.data.data
  res.data.data.forEach(v => {
        v.btn = true;
      });
},
},

}
</script>

<style>

ul{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
}
.new{
 display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin:0 auto;
  margin-top: 0.2rem;
  height: 1.3rem;
  border: 0.01rem solid black;
  border-radius: 5px;
  background: url('/img/beg.jpg') center/cover no-repeat;
  background-color:rgba(250, 244, 244, 0.966);
}
.img2{
   display:block;
  width: 1rem;
  height: 1rem;
}
.span1 {
 color: white;
  width: 1.5rem;
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
  van-icon{
  margin-left: 0.3rem;
}

.img1{
  width:100%;
  height: 2rem;
}
</style>
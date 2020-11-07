
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
      this.list[i].btn=!this.list[i].btn
     /*  console.log(item)
      console.log(item.id)
      console.log(item.name)
      console.log(item.artists[0].name)
      console.log(item.album.picUrl) */
    let a = item.artists[0].name
    console.log({id:item.id,name:item.name,ar:[{name:a}],al:{picUrl:item.album.picUrl}});
    let obj = {id:item.id,name:item.name,ar:[{name:a}],al:{picUrl:item.album.picUrl}}
     this.bus.$emit('play',obj)
    },


 async LoadData(){
  let res= await newSong()
  //console.log(res)
  //console.log(res.data.data)

  res.data.data.forEach(v => {
        v.btn = true;
      });
    this.list = res.data.data 
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
  background: url('/img/beg4.jpg') center/cover no-repeat;
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
  display: block;
  margin:0 auto;
  width:94%;
  height:2rem;
  border-radius: 8px;
}
</style>
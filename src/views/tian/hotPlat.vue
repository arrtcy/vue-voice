
<template>
  <section>
    <img class="img1" src="http://p2.music.126.net/ETm6jJLCvxXWl6nynqeGaQ==/109951165431530889.jpg?param=140y140" alt="shuoming">
     <ul>
       <li  class="new" v-for="(item,i) in list" :key="item.id" @click="playList(item,i)">
         <img :src="item.picUrl" alt="" class="img2">
           <span>
          <p class="span1"> {{item.name}}</p>
          <p class="span2">{{item.copywriter}}</p>
          </span>
           <!-- <van-icon :name="item.btn?'play-circle':'pause-circle'" size="0.3rem"   color="black"/> -->
        </li>
     </ul>
  </section>
</template>

<script>


import{ Hotplat} from '../../unitls/sort'
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
   // console.log({id:item.id,name:item.name,ar:[{name:item.copywriter}],al:{picUrl:item.picUrl}});
    let obj = {id:item.id,name:item.name,ar:[{name:""}],al:{picUrl:item.picUrl}}
     this.bus.$emit('play',obj)
    },


 async LoadData(){
  let res= await Hotplat()
  //console.log(res)
  //console.log(res.data.result)

  res.data.result.forEach(v => {
        v.btn = true;
      });
    this.list = res.data.result
},
},

}
</script>

<style scoped>
section{
 width: 100%;
 height: 100%;
}

ul{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
}
.new{
 display: flex;
 flex-direction: column;
  width: 90%;
  margin:0 auto;
  margin-top: 0.2rem;
  height: 4rem;
 
  border-radius: 5px;
  
  background:url('/img/beg3.jpg') center/cover no-repeat;
}
.img2{
  display:block;
  margin:0.2rem auto;
  width: 90%;
  height: 1.8rem;
}
.span1 {
 color:black;
  width: 100%;
  
  font-size: 0.18rem;
  font-weight: 600;
  overflow: hidden;
  /* white-space: nowrap;
  text-overflow: ellipsis; */
  text-align: center;
  margin-bottom: 0.1rem;

}
/* .span2 {
  color: white;
  width: 1.1rem;
  height:0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  } */
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
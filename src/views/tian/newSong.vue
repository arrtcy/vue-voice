
<template>
  <section>
     <ul>
       <li v-for="item in list" :key="item.id">
         <span> {{item.name}}</span>
         <img :src="item.cover" alt="">
        </li>
     </ul>
  </section>
</template>

<script>


import{ Chinese} from '../../unitls/sort'
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

async LoadData(){
  let res= await Chinese()
   console.log(res.data.data)
  this.list = res.data.data

}
}

}
</script>

<style>

ul{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
li{
 margin-top:0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:1.1rem;
  height: 1.5rem;
  border:0.01rem solid black;
   border-radius: 5px;
}
img{
  display: block;
  width:1rem;
  height: 1.20rem;
}
span{
  display: block;
  width:1.1rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
   text-align: center;
}

</style>
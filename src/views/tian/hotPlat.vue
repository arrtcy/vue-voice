
<template>
  <section>
     <ul>
       <li v-for="(item,i) in list" :key="item.id">
         <span> {{item.name}}</span>
         <img v-lazy="picList[i]" alt="">
        </li>
     </ul>
  </section>
</template>

<script>


import{ Official} from '../../unitls/sort'
export default {
  
    name:"Official",
  data(){ 
    return{
       list:[],
       picList:[
         "https://p2.music.126.net/ntV1oaj_LTtN2-JoNyXGrg==/109951165438966874.jpg",
          "https://p2.music.126.net/8nC0KvySFYbcsg50emT8tg==/109951165433941511.jpg",
          "https://p2.music.126.net/ermg_AqM2pCJLpqBIVTKQw==/109951165438811154.jpg",
          "https://p2.music.126.net/2QcQlt-UC0OOrC09Co4N5A==/109951165438814067.jpg",
          "https://p2.music.126.net/wZ1G4Df86GMqnLB6CnL8jQ==/109951165437237429.jpg",
          "https://p2.music.126.net/GxZiQ6mqTNNEULydsLhoIw==/109951165436911276.jpg",
          "https://p2.music.126.net/uotUHD2obIWI4jZIcAEuyQ==/109951165436560526.jpg",
          "https://p2.music.126.net/uBrWz-nwWV22vaZ0JcSWng==/109951165434540250.jpg",
          "https://p2.music.126.net/sSopdMT-_Lrx3LyVMf9IIw==/109951165422304635.jpg",
          "https://p2.music.126.net/ilhSwYuf1t3_vVu5eU5Pnw==/109951165434590354.jpg",
          "https://p2.music.126.net/aSTWuFbIl6VLgOFlJV3d5A==/109951165433942002.jpg",
          "https://p2.music.126.net/fA92DBaEuQcCtaoqNy4qWQ==/109951165420348644.jpg",
          "https://p2.music.126.net/7j3sLhcXbqxMUZtTe13g-A==/109951165437065334.jpg",
          "https://p1.music.126.net/Sj8bELGmKvM3kZ6mqPdD6Q==/109951165404661949.jpg",
          "https://p1.music.126.net/pOrBjVPYyFw45JiH3HB1GQ==/109951165401075468.jpg",
          "https://p1.music.126.net/qD2pdKifzVfFCquRxiVu2Q==/109951165437304282.jpg",
          "https://p1.music.126.net/NyioB_srxf5VrEjCQsLpeA==/109951165434183025.jpg",
          "https://p1.music.126.net/SLBdZ1ha8uScLvKs1FDCKQ==/109951165436546869.jpg",
          "https://p1.music.126.net/eNqr4P5IrbE0hXcYUC04HQ==/109951165432557248.jpg",
          "https://p1.music.126.net/qu3BRdpqdxYlItE8m9Pbxw==/109951165416660292.jpg",
          "https://p1.music.126.net/nHzBu0DbvpUyXTuhD6OQ_A==/109951165437319747.jpg",
          "https://p1.music.126.net/tWv1wmlPx1vIcuAtKwBShQ==/109951165430765871.jpg",
          "https://p1.music.126.net/QCBsCEzag9X5DGEckWwdmA==/109951165432684886.jpg",
          "https://p1.music.126.net/igmKz3cKk3Xcgdz4NOVzaQ==/109951165418103075.jpg",
          "https://p1.music.126.net/jvTfqbjVjBA-RbTAO-3kAw==/109951165430764943.jpg",
          "https://p1.music.126.net/zjk9d6YYGQ93QC8X1G0U-w==/109951165437202768.jpg",
          "https://p1.music.126.net/a70tsPj-mf_KJoI0q4Ko2A==/109951165434879971.jpg",
          "https://p2.music.126.net/HLgZE2y_YEwSqJpeRoTUXg==/109951165436572005.jpg",
          "https://p2.music.126.net/luo30jo1KL5W7OTrJtXRNw==/109951165436412783.jpg",
          "https://p2.music.126.net/b1SXKrC7DFGzIuXv-18ZBw==/109951165434551864.jpg",
          "https://p2.music.126.net/LSkL4H6ZnyxWg9k-DBlLIQ==/109951165434540371.jpg",
          "https://p2.music.126.net/RyQGH2sRBpGhKyjSgM5k3w==/109951165432604593.jpg",
          "https://p2.music.126.net/3d2FaPF9jMiGMWOFDR8juA==/109951165436430659.jpg",
          "https://p2.music.126.net/kKEzUmrHDcMKVoJlV09c1Q==/109951165436411244.jpg",
          "https://p2.music.126.net/oh3YYouZTlvW70lcKw_yqw==/109951165422228082.jpg",
          "https://p2.music.126.net/JTLlVU9_PH2ivENxURVTwA==/109951165402811309.jpg",
          "https://p2.music.126.net/-7qJe2OAHVmDoN-FWOhEmw==/109951165432691612.jpg",
          "https://p2.music.126.net/xGZD9vjBgiHwHbwjUCtvIQ==/109951165404182036.jpg",
          "https://p2.music.126.net/TiXEpI-lWgQz8i5cE5S3mQ==/109951165404183011.jpg",
          "https://p2.music.126.net/pwbjTTCZ2KmnZz-fGBZEFg==/109951165434293124.jpg",
          "https://p2.music.126.net/pXAb4JguaWwFDWAMTung0g==/109951165424919017.jpg",
          "https://p2.music.126.net/LZs6zs3T9vwuSnMAeneofw==/109951165424916644.jpg",
          "https://p2.music.126.net/4BrmZtbUg1AfKC76ggIqWw==/109951165424907922.jpg",
          "https://p2.music.126.net/YoDbc10253H88rFaV4s-5A==/109951165409146997.jpg",
          "https://p2.music.126.net/ZbdS7qZGb2wnUDmOZ6ebGw==/109951165404181550.jpg",
          "https://p2.music.126.net/J2JGrLFN668Os4JHoh4mZg==/109951165424914202.jpg",
          "https://p2.music.126.net/47e5rW3oN9nzQgrWHDZhYA==/109951165434760459.jpg",
          "https://p2.music.126.net/wjsajlsQ1k6imnqwpCAy7Q==/109951165424904937.jpg",
          "https://p2.music.126.net/cePXFk70M8-1DgxR8nmntQ==/109951165424909392.jpg",
          "https://p2.music.126.net/qa_Jfl0ki9fdm9tLXV9CZA==/109951165434506188.jpg",
         
       ]
    }
   

  },
 created(){
 
this.LoadData()

},
methods:{

async LoadData(){
  let res= await Official()
   console.log(res.data.albums)
   this.list = res.data.albums

    res.data.albums.forEach(v => {
      console.log(`"${ v.blurPicUrl}",`  )
    });


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
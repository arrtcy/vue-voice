<template>
 <section class="sort">
<ul class="ul"> 
    <li @click="newDie" style="background:url('http://p4.music.126.net/ed9Wlc8HvHd2cvI1FtLg9A==/109951165431104320.jpg?param=200y200') center/cover no-repeat">新碟上架</li>
    <li @click="hotSearch" style="background:url('http://p2.music.126.net/fWQ5EX9BDCvuaKqtZoYs3A==/109951165425855499.jpg?param=140y140') center/cover no-repeat">热搜歌曲</li>
    <li @click="newSong" style="background:url('http://p1.music.126.net/-tNQI9Gokz7o-m9TrbRlwg==/109951165389737885.jpg?param=140y140') center/cover no-repeat">新歌速递</li>
    <li @click="hotSinger" style="background:url('http://p4.music.126.net/wTcIyvb9xPsNzZTJ7ettow==/109951164273697592.jpg?param=140y140') center/cover no-repeat">热门歌手</li>
    <li @click="hotPlat" style="background:url('http://p2.music.126.net/ETm6jJLCvxXWl6nynqeGaQ==/109951165431530889.jpg?param=140y140') center/cover no-repeat">热门电台</li>
    <li @click="Race" style="background:url('http://p3.music.126.net/IwUPGC1v8hObFwnoUlOqbA==/109951165387764913.jpg?param=140y140') center/cover no-repeat">榜单</li>
    <li @click="Commend" style="background:url('http://p1.music.126.net/OXHVPwI1IKAUA9dSu3Xq8A==/109951165412411765.jpg?param=140y140') center/cover no-repeat">推荐歌单</li>
    <li @click="commendSong" style="background:url('http://p4.music.126.net/Lmcr9KJ1GFRxx4ODy1aR4w==/109951164884284284.jpg?param=140y140') center/cover no-repeat">推荐新音乐</li>
    <li @click="commendJe" style="background:url('http://p3.music.126.net/-eo6zwqZEdRCX_4NhFIWNw==/109951165392959577.jpg?param=100y100') center/cover no-repeat">推荐节目</li> 
</ul>
 </section>
</template>

<script>
export default {
    data(){

        
    },
    methods:{
        newDie(){
            this.$router.push({name:"newDie"})
        },
       
        hotSearch(){
            this.$router.push({name:"hotSearch"})
        },
        newSong(){
            this.$router.push({name:"newSong"})
        },
        hotSinger(){
            this.$router.push({name:"hotSinger"})
        },
        hotPlat(){
            this.$router.push({name:"hotPlat"})
        },
        Race(){
            this.$router.push({name:"Race"})
        },
        Commend(){
            this.$router.push({name:"Commend"})
        },
        commendSong(){
            this.$router.push({name:"commendSong"})
        },
        commendJe(){
            this.$router.push({name:"commendJe"})
        }

    }

}
</script>

<style>
 
.ul{
    
    margin-top:30px;
    padding: 0;
   display: flex;
   flex-wrap:wrap;
   justify-content: space-around;
    align-items:center; 
   
   

}
.ul li{
    padding: 0;
    font-size: 0.20rem;
    font-weight: 600;
    color:yellow;
    margin-top:20px;
    list-style: none;
    width: 1rem;
    height: 1.3rem;
    border: 0;
    border-radius: 0.05rem;
}


</style>
import axios from "axios"
//新碟上架
export  function newDie(){
return axios.get(`http://net-music.penkuoer.com/personalized/newsong`)
}

//热搜歌曲
export  function hotSearch(){
    return axios.get(`http://net-music.penkuoer.com/top/song?type=16`);

    }
//新歌速递
export  function newSong(){
        return axios.get(`http://net-music.penkuoer.com/top/song?type=8`);   
        }

    
//热门歌手
export  function Boutique(){
        return axios.get(`http://net-music.penkuoer.com/dj/recommend`);
        
        }
//热门电台
export  function Hotplat(){
    return axios.get(`http://net-music.penkuoer.com/personalized/djprogram`);
    } 
    






export  function Chinese(){
    return axios.get(`http://net-music.penkuoer.com/top/mv`);
    
    } 
    
export  function Official(){
        return axios.get(`http://net-music.penkuoer.com//top/album`);
        
        } 
   
  /* mv列表接口 */      
export  function MvList(){
    return axios.get(`http://net-music.penkuoer.com/mv/first`);
    
    }
    
/* 获取mv播放地址 */

export  function Mv(v){
    return axios.get(`http://net-music.penkuoer.com/mv/url?id=${v}`);
    
    }


/* 获取mv评论的接口 */

export  function commit(v){
    return axios.get(`http://net-music.penkuoer.com/comment/mv?id=${v}`);
    
    }

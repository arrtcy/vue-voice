import axios from "axios"
//新碟上架
export  function newDie(){
return axios.get(`http://net-music.penkuoer.com/personalized/newsong`)
}


export  function hotSearch(){
    return axios.get(`http://net-music.penkuoer.com/personalized`);

    }

export  function newSong(){
        return axios.get(`http://net-music.penkuoer.com/top/song?type=8`);   
        }

    

export  function Boutique(){
        return axios.get(`http://net-music.penkuoer.com/dj/recommend`);
        
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


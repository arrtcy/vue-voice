import axios from "axios"
//新碟上架
export  function newDie(id){

    //id
    //console.log(id);
return axios.get(`http://net-music.penkuoer.com//top/album?offset=${id}&limit=24`);
}
//
export  function hotSearch(){
    return axios.get(`http://net-music.penkuoer.com/personalized`);
    
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




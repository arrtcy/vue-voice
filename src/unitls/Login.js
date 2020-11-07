import axios from "axios";

//登录
export function LOGIN(parmas) {
     return axios.get(
       `http://net-music.penkuoer.com/login/cellphone?phone=${parmas.phone}&password=${parmas.password}`
     );
   }
//修改个人信息
// export function update(parmas){
//   return axios.post(
//     `http://net-music.penkuoer.com/user/update?gender=${parmas.gender}&signature=${parmas.signature}&city=${parmas.city}&nickname=${parmas.nickname}&birthday=${parmas.birthday}&province=${parmas.province}`
//   );
// }


//个人信息
export function info(v) {
  return axios.get(`https://music.api.mcloc.cn/user/playlist?uid=${v.userId}`);
}


//歌曲
export function songs(v) {
  // console.log(v)
  return axios.get(
    `http://net-music.penkuoer.com/playlist/detail?id=${v.id}`
  );
}
//最近播放列表
export function near(v) {
  // console.log(v)
  return axios.get(
    `http://net-music.penkuoer.com/playlist/detail?id=${v.userId}&type=1`
  );
}
//粉丝
export function fans(v) {
  // console.log(v)
  return axios.get(
    `http://net-music.penkuoer.com/user/followeds?uid=${v.id}`
  );
}

//关注
export function concern(v) {
         // console.log(v)
         return axios.get(
           `http://net-music.penkuoer.com//user/follows?uid=${v.id}`
         );
       }

  //歌单评论

export function comment(v) {
         // console.log(v)
         return axios.get(
           `http://net-music.penkuoer.com/comment/playlist?id=${v.id}`
         );
       }
import axios from "axios";


export function LOGIN(parmas) {
         return axios.get(
           `http://net-music.penkuoer.com/login/cellphone?phone=${parmas.phone}&password=${parmas.password}`
         );
       }
export function update(parmas){
  return axios.post(
    `http://net-music.penkuoer.com/user/update?gender=${parmas.gender}&signature=${parmas.signature}&city=${parmas.city}&nickname=${parmas.nickname}&birthday=${parmas.birthday}&province=${parmas.province}`
  );
}

export function info(v) {
  return axios.get(`https://music.api.mcloc.cn/user/playlist?uid=${v.userId}`);
}

export function songs(v) {
  // console.log(v)
  return axios.get(
    `http://net-music.penkuoer.com/playlist/detail?id=${v.id}`
  );
}

export function near(v) {
  // console.log(v)
  return axios.get(
    `http://net-music.penkuoer.com/playlist/detail?id=${v.userId}&type=1`
  );
}



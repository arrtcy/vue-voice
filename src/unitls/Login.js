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

export function info() {
  return axios.get(
    `http://net-music.penkuoer.com/user/subcount/token="df69a51f24b2ed152e029f5854bb910d9726f7a8e50fd0e98e3fc8e5cb79f5630931c3a9fbfe3df2"`
  );
}



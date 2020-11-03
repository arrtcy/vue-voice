import axios from "axios";

export  function  captcha(phone){
  return axios.get("http://net-music.penkuoer.com/captcha/sent?phone="+phone);
}

export function  reg(){
  return axios.get("http://net-music.penkuoer.com/register/cellphone");
}


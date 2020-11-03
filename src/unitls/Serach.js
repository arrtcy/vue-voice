import axios from "axios";
export function banner() {
  return axios.get("http://net-music.penkuoer.com/banner");
}
export function dayList(v = 347226) {
  return axios.get("http://net-music.penkuoer.com/simi/playlist?id=" + v);
}
///artists?id=6450
export function getsongs(v = 4052) {
  return axios.get("http://net-music.penkuoer.com/artists?id=" + v);
}
///recommend/songs
export function tuijian() {
  return axios.get("http://net-music.penkuoer.com/recommend/songs");
}

//根据歌曲id获取歌词
//http://localhost:3000/lyric?id=347230
export function getlyric(id) {
  return axios.get("http://net-music.penkuoer.com/lyric?id=" + id);
}

//根据歌曲id获取url
export function geturl(id) {
  return axios.get(`https://music.163.com/song/media/outer/url?id=${id}.mp3`);
}

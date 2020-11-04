import axios from "axios";
// 获取轮播图
export async function getBanner() {
  let result = await axios.get("http://net-music.penkuoer.com/banner");
  return result.data.banners;
}
// 获取搜索的歌曲
export async function getSearchSong(keywords) {
  let result = await axios.get(
    `http://net-music.penkuoer.com/search?keywords=${keywords}`
  );
  return result.data.result.songs;
}
// 获取歌曲播放链接
export async function getPlaySong(id) {
  let result = await axios.get(
    `http://net-music.penkuoer.com/song/url?id=${id}`
  );
  let endResult = await axios.get(result.config.url);
  return endResult.data.data[0].url;
}
// 获取歌词
export async function getSongWords(id) {
  let result = await axios.get(`http://net-music.penkuoer.com/lyric?id=${id}`);
  if (result.data.sfy == false) {
    return result.data.lrc.lyric;
  } else {
    return "纯音乐，请您欣赏";
  }
}
// 获取热搜歌曲
export async function getHotSong() {
  let result = await axios.get("http://net-music.penkuoer.com/search/hot");
  return result.data.result.hots;
}
// 获取歌曲评论
export async function getSongComment(id) {
  let result = await axios.get(
    `http://net-music.penkuoer.com/comment/music?id=${id}&limit=1`
  );
  return result.data.hotComments;
}
// 获取新歌速递
export async function getNewSong(country) {
  let result = await axios.get(
    `http://net-music.penkuoer.com/top/song?type=${country}`
  );
  return result.data.data;
}
// 获取歌单
export async function getSongList() {
  let result = await axios.get(
    `http://net-music.penkuoer.com/top/playlist/highquality`
  );
  return result.data.playlists;
}
// 获取歌单详情
export async function getSongListDetails(id) {
  let result = await axios.get(
    `http://net-music.penkuoer.com/playlist/detail?id=${id}`
  );
  return result.data;
}
// 获取热门歌手
export async function gteHotSinger() {
  let result = await axios.get(
    `http://net-music.penkuoer.com/top/artists?offset=0&limit=30`
  );
  return result.data.artists;
}
// 获取热门电台
export async function gteHotRadio() {
  let result = await axios.get(
    `http://net-music.penkuoer.com/personalized/djprogram`
  );
  return result.data.result;
}
// 获取榜单
export async function getTopList() {
  let result = await axios.get(`http://net-music.penkuoer.com/toplist/detail`);
  console.log(1);
  return result.data;
}
// 注册
export async function register(username, password) {
  let result = await axios.get(
    `http://jx.xuzhixiang.top/ap/api/reg.php?username=${username}&password=${password}`
  );
  return result.data;
}
// 登录
export async function login(username, password) {
  let result = await axios.get(
    `http://jx.xuzhixiang.top/ap/api/login.php?username=${username}&password=${password}`
  );
  return result.data;
}
// 收藏歌曲
export function collectionSongs(id, name, artist) {
  console.log(id, name, artist);
}

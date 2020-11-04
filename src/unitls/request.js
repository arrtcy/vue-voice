import axios from "axios";

const instance = axios.create({
  timeout: 5000, // 请求超时时间,5s
});

// 全局拦截
// Add a request interceptor
// 全局请求拦截,网络请求之前触发
instance.interceptors.request.use(function(error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
// 全局相应拦截，网络请求完成之后触发
instance.interceptors.response.use(
  //   function(response) {
  //     // Any status code that lie within the range of 2xx cause this function to trigger
  //     // Do something with response data
  //     // console.log("请求数据成功");
  //     // console.log(response);
  //     return response;
  //   },
  function(error) {
    console.log(2222);
    //   // Any status codes that falls outside the range of 2xx cause this function to trigger
    //   // Do something with response error
    console.dir(error.response);
    //   if (error && error.message.indexOf("timeout") > -1) {
    //     console.log("网络超时了");
    //     Notify({ type: "warning", message: "网络不稳定，请刷新重试" });
    //   }
    if (error.response && error.response.status === 502) {
      // Notify({ type: "warning", message: "用户信息异常，请重新登录" });
      alert("用户信息异常，请重新登录");
      setTimeout(() => {
        window.location.href = "/#/login";
      }, 3000);
    }
    return Promise.reject(error);
  }
);

export const get = (url) => instance.get(url);

/**
 * 发起一个post请求
 * @param {*} url   请求地址
 * @param {*} data  传递的数据
 */
export const post = (url, data) => instance.post(url, data);

export let del = (url) => instance.delete(url);

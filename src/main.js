import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";

/* 图片懒加载 */


//import App from '. /App. vue'
import VueLazyload from 'vue - lazyload' // 引入这个懒加载插件
Vue . use(VueLazyload)
//或者添加VueLazyload选项
Vue. use(VueLazyload, {
preLoad: 1.3,
error: ' dist/error .png',
loading: ' dist/loading.gif',
attempt: 1
})
new Vue({
el:
'body',
components: {
App
}
})
/* 图片懒加载结束 */





Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
/* 懒加载 */
  el:
  'body',
  components: {
  App
  },
/* 懒加载结束 */




  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

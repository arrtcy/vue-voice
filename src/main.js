import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import { Swipe, SwipeItem } from "vant";
import { Card } from "vant";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


/* ------------------------------------------------- */
import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
/* -------------------------------------------------- */
Vue.use(ElementUI);

Vue.use(Card);
Vue.use(Vant);
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false;

let bus = new Vue();
Vue.prototype.bus = bus;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

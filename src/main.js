import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";


Vue.use(Vant);

Vue.config.productionTip = false;

 let $envetBus=new Vue()
 Vue.prototype.$envetBus=$envetBus

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.less";
// vant
import Vant from "vant";
// import "vant/lib/index.css";
import "vant/lib/index.less";
Vue.use(Vant);
// rem
import "amfe-flexible";
// icon
import TouTiaoIcon from "@/components/TouTiaoIcon";

//测试axios
import request from "@/utils/request";
request.get("/v1_0/channels").then((res) => {
  console.log(res);
});
//测试axios

Vue.config.productionTip = false;
Vue.component("TouTiaoIcon", TouTiaoIcon);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
// 1、根标签的font - size根据屏幕宽度动态设置,
// 2、样式里面单位px全部换成rem
// 3.rem >> 根标签的font - size

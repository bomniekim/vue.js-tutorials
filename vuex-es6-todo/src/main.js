import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store.js";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store, // 향상된 객체 리터럴로 인한 축약 (es6)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/*
var App = {
  template: "<div>app</div>",

new Vue({
  el: '#app'
  components: {
    app: App,
  },
});
*/

new Vue({
  // render: template 정의 시 실행
  // App이라는 컴포넌트를 가져와 render
  render: (h) => h(App),
}).$mount("#app");

<template>
  <!-- template root는 무조건 하나의 HTML element만 있어야 함 -->
  <div>
    {{ str }}
    <!-- <app-header v-bind:컴포넌트의 프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// 1) 컴포넌트의 내용을 변수에 담음
import AppHeader from "./components/AppHeader.vue";

/*
var AppHeader = {
  template: '<header><h2>Header</h2></header>'
}*/

// App.vue라는 Root component
export default {
  // 우선규칙 A
  // 컴포넌트의 data 는 객체(object)를 반환하는 함수!
  // 컴포넌트를 재사용하겠다는 의지, 확률이 높기 때문에 여러 개의 컴포넌트에서 동일한 값을 참조하면 안됨
  data: function () {
    return {
      str: "data descending",
    };
  },

  components: {
    "app-header": AppHeader, // 2) 변수를 연결
  },

  methods: {
    renewStr: function () {
      this.str = "renew function is implemented";
    },
  },
};

// new Vue({
//   data: {
//     str: 'hi vue!'
//   }
// })
</script>

<style></style>

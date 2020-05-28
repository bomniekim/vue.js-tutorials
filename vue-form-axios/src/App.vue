<template>
  <form v-on:submit.prevent="submitForm">
    <!-- Vue event modifier -->
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username" />
      <!-- v-model: 폼 입력 바인딩 -->
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
// Axios: http 통신 라이브러리 (npm i axios)
import axios from "axios";

export default {
  // 반드시 객체를 return하는 함수
  data: function() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm: function() {
      // event.preventDefault(); // 이벤트의 고유 동작 중단 (Vanilla JS에서 제어하는 방식)
      console.log(this.username, this.password);

      // Rest API 규칙에 의해서 아래 URL로 데이터를 보내고 결과를 받을 수 있음
      var url = "https://jsonplaceholder.typicode.com/users";
      var data = {
        username: this.username,
        password: this.password,
      };

      axios
        .post(url, data)
        // promise 문법
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>

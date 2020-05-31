<template>
  <div class="inputBox shadow">
    <!-- v-model : two way data-binding (화면단과 script단의 동기화)-->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- .enter : event modifier -->

    <!-- span으로 button customizing -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo: function() {
      var obj = { completed: false, value: this.newTodoItem };
      if (this.newTodoItem !== "") {
        // 저장하는 로직 api - localStorage.setItem(key, value);
        // 개발자 도구 > Application > local storage에서 확인
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        // JSON.stringify(): 자바스크립트 객체를 String으로 변환해주는 api
        // 객체를 문자열로 변환하여 저장
        this.clearInput();
      }
    },
    // 메서드 분할
    clearInput: function() {
      this.newTodoItem = ""; // input 값 초기화 꼼수
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  height: 40px;
  line-height: 40px;
}
/* span */
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>

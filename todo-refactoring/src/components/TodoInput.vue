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
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem); // 하위 컴포넌트에서의 event emit
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

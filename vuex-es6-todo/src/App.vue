<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- <todo-input v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 이름"></todo-input> -->
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <!-- <todo-list v-bind:내려보낼 프롭스 속성="현재 위치의 컴포넌트 데이터 속성"></todo-list> -->
    <todo-list
      v-bind:propsdata="todoItems"
      v-on:removeTodoItem="removeOneItem"
      v-on:toggleTodoItem="toggleOneItem"
    ></todo-list>
    <todo-footer v-on:clearAllTodo="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      todoItems: [] // 모든 컴포넌트에서 동일하게 사용되는 data
    };
  },
  methods: {
    // == store의 mutations
    // addOneItem(todoItem) {
    //   // todoItem: 하위 컴포넌트에서 보낸 이벤트의 인자인 this.newTodoItem
    //   const obj = { completed: false, value: todoItem };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    removeOneItem(item, index) {
      localStorage.removeItem(item.value);
      // 객체 item이 아닌 특정 문자열 삭제
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(item, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(item.value);
      localStorage.setItem(item.value, JSON.stringify(item)); // {completed: true, value: 공부하기}
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  components: {
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList,
    "todo-footer": TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

/* cascading되어 하위 컴포넌트까지 스타일링 */
.shadow {
  box-shadow: 5px 10px 10px rbga(0, 0, 0, 0.03);
}
</style>

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
  data: function() {
    return {
      todoItems: [], // 모든 컴포넌트에서 동일하게 사용되는 data
    };
  },
  methods: {
    addOneItem: function(todoItem) {
      // todoItem: 하위 컴포넌트에서 보낸 이벤트의 인자인 this.newTodoItem
      var obj = { completed: false, value: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(item, index) {
      localStorage.removeItem(item.value);
      // 객체 item이 아닌 특정 문자열 삭제
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(item, index) {
      // item.completed = !item.completed;
      // props로 내려서 사용한 데이터를 app.vue로 다시 올려서 사용하는 것은 안티패턴(비효율)
      // app.vue의 container component라는 특징을 이용해서 data에 접근하는 것이 better
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(item.value);
      localStorage.setItem(item.value, JSON.stringify(item)); // {completed: true, value: 공부하기}
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // input에서 문자열로 넣어준 값을 다시 객체로 꺼내오기: JSON.parse()
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  components: {
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList,
    "todo-footer": TodoFooter,
  },
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

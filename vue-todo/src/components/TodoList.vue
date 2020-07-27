<template>
  <div>
    <ul>
      <!-- vscode에서는 v-for 사용 시 v-bind:key 설정 요구 -->
      <li v-for="(item, index) in todoItems" v-bind:key="item.value" class="shadow">
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: item.completed }"
          v-on:click="toggleComplete(item, index)"
        ></i>
        <span v-bind:class="{ textCompleted: item.completed }">
          {{
          item.value
          }}
          <!-- TodoInput에 value로 값을 설정했으므로 item.value로 접근 -->
        </span>
        <!-- v-bind를 통해 엘리먼트의 속성을 동적으로 설정 -->
        <!-- ex) 이 예시에서는 boolean의 값에 따라 클래스가 추가 or 배제 -->
        <span class="removeBtn" v-on:click="removeTodo(item, index)">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo: function (item, index) {
      console.log(item, index);
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1); // 하나 삭제
      // splice()를 사용하기 위해 index를 받아온 것!

      // splice(): 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
      // array.splice(배열의 변경을 시작할 index, 배열에서 제거할 요소의 수, 배열에 추가할 요소)
    },
    toggleComplete: function (item) {
      item.completed = !item.completed;
      // 갱신: update하는 api가 존재하지 않기 때문에 지웠다가 새로 설정하는 방법 사용
      localStorage.removeItem(item.value);
      localStorage.setItem(item.value, JSON.stringify(item));
      // JSON.stringify(item) == {completed: true, value: 공부하기}
    },
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          // localStorage.getItem(localStorage.key(i));
          // key 값에 해당하는 value 꺼내기

          // input에서 문자열로 넣어준 값을 다시 객체로 꺼내오기: JSON.parse()
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
          // storage.key(n): n번째 key 이름 반환
        }
      }
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-right: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: tomato;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>

import Vue from "vue";
import Vuex from "vuex";

// use: vue의 plug-in을 전역적으로 사용 (global functionality 추가)
Vue.use(Vuex);
// this.$store로 접근 가능

const storage = {
  fetch() {
    // 속성 메소드
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    headerText: "Vuex Todo!",
    todoItems: storage.fetch(), // arr 리턴
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, value: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
      // console.log(this); // Store
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.item.value);
      // 객체 item이 아닌 특정 문자열 삭제
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed;
      localStorage.removeItem(payload.item.value);
      localStorage.setItem(payload.item.value, JSON.stringify(payload.item)); // {completed: true, value: 공부하기}
    },
    clearAllItems() {
      localStorage.clear();
      state.todoItems = [];
    },
  },

  // mutations의 첫번째 인자로는 항상 state! vue의 규약

  // mutations로 state를 변경하는 이유?
  // state는 여러개의 컴포넌트에서 공유하는 데이터이므로 특정 컴포넌트에서 state의 값을 직접 변경하였을 경우
  // 특정 시점에 어느 컴포넌트가 state를 접근하여 변경한 것인지를 확인하기 어려움
});

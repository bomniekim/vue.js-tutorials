<template>
  <div>
    <!-- name: css와 연관된 속성 / tag: html 태그 의미 -->
    <transition-group name="list" tag="ul">
      <li v-for="(item, index) in storedTodoItems" v-bind:key="item.value" class="shadow">
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: item.completed }"
          v-on:click="toggleComplete({item, index})"
        ></i>
        <span v-bind:class="{ textCompleted: item.completed }">
          {{
          item.value
          }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo({item, index})">
          <i class="far fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    // storedTodoItems() {
    //   return this.$store.getters.storedTodoItems;
    // },
    ...mapGetters(["storedTodoItems"]),
  },
  methods: {
    ...mapMutations({
      // * Helper 의 유연한 문법 *
      // Vuex에 선언한 속성을 컴포넌트의 특정 메서드에 연결할 때는 객체 형태로 매핑
      // 인자를 선언하지 않아도 암묵적으로 인자를 가져와서 넘겨줌
      // 다만, 인자의 선언 방식을 맞추어 주어야 함 (객체면 객체, 배열이면 배열)
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem",
    }),
    // removeTodo(item, index) {
    //   this.$store.commit("removeOneItem", { item, index });
    // },
    // toggleComplete(item, index) {
    //   this.$store.commit("toggleOneItem", { item, index });
    // },
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

/* 리스트 아이템 transition 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

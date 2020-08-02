<template>
  <header>
    <!-- <h1>Vuex ToDo!</h1> -->
    <h1>{{ headerText }}</h1>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    // computed 내에 state를 선언하는 것을 권장
    ...mapState(["headerText"]),
  },
};
</script>

<style scoped>
/* local style: 현재 component의 element에만 적용됨 */
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
  /* rem 단위는 문서의 최상위 요소, 즉 html 요소의 크기의 몇 배인지로 크기를 정함 */
}
</style>

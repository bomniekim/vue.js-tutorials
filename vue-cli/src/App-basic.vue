<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 스타일 가이드 (우선규칙 B) -->
    <!-- <hello-world></hello-world>
    <HelloWorld/> self-closing-->
  </div>
</template>

<script>
export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: "App",
  components: {
    // 'hello-world': HelloWorld
    // HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

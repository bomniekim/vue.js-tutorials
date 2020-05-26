<template>
  <header>
    <h2>{{ propsdata }}</h2>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
// 우선규칙 A
// 컴포넌트의 이름은 항상 합성어 사용 (충돌방지)
// 컴포넌트가 <main></main>과 같이 단일어일 경우 html 표준태그인지 뷰 컴포넌트인지 브라우저가 인식하기 어려움
export default {
  props: ["propsdata"],
  methods: {
    sendEvent: function() {
      this.$emit("renew"); // App.vue로 이벤트 올리기
    }
  }
};
</script>

<style></style>

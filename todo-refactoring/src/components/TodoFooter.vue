<template>
  <footer class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">clear ALL</span>
  </footer>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      this.$emit("clearAllTodo");
    },
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: red;
  display: block;
}
</style>

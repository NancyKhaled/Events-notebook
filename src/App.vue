<template>
  <div id="app">
    <main-header></main-header>
    <router-view />
    <main-footer></main-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MainFooter from "@/components/MainFooter.vue";
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "app",
  components: {
    MainFooter,
    MainHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

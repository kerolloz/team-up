<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
export default {
  components: { NavigationBar },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html,
body,
#app {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto', sans-serif;
}
</style>

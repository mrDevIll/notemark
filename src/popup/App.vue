<template>
  <div id="app">
    <h3>NoteMark extension</h3>
    <hr />
   <ToggleButton /> 
  </div>
</template>

<script>
import ToggleButton from "../components/ToggleButton.vue";
import { getMessage } from "../utility/getMessage.js"

export default {
  name: "App",
  components: {
    ToggleButton,
  },
  mounted: function () {
    getMessage();

  }
};
</script>

<style>
#app {
  width: 20rem;
  height: 15rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 1rem 2rem;
  color: #2c3e50;
}
</style>
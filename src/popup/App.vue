<template>
  <div id="app">
 
    <h3>NoteMark extension</h3>
    <hr />
   <ToggleButton /> 
    <ul>
      <li v-for="value in message">
        {{value}} 
      </li>
    </ul>
    
  </div>
</template>

<script>
import ToggleButton from "../components/ToggleButton.vue";
// import { getMessage } from "../utility/getMessage.js"

export default {
  name: "App",
  components: {
    ToggleButton,
  },
  data() {
    return {
      message: []
    }
  },
  methods: {

    updateMessage: function () {
      let m = this.message;

      chrome.runtime.onMessage.addListener(function ({ textMessage }, sender, response) {
        if (textMessage) {
          let title = textMessage.title
          m.push(textMessage);// doesn't update the message

        }
      })

    }
  },
  mounted() {
    this.updateMessage()
  }
}


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

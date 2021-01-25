<template>
<div class="notemark-print-button">
    <font-awesome-icon :icon="printIcon" class="icons cliccable print-icon shadow" v-on:click="printNotes" title="Print notes"/>
</div>
</template>
<script>
import { printContent } from './printUtility.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
export default {
    name: "PrintButton",
    data: function () {
        return {
            printIcon: faPrint
        }
    },
    methods: {
        printNotes: function () {
            printContent("notemark-note")
        }
    },
    components: {
        FontAwesomeIcon
    }

}

</script >
<style scoped>
.notemark-print-button {
  padding: 0.5rem;
}
.print-icon {
  position: fixed;
  bottom: 0.3rem;
  left: 0.7rem;
  padding: 0.5rem;
  color: white;
  background-color: #7c4dff;
  border: 1px #616161 solid;
  border-radius: 50%;
  font-size: large;
  opacity: 0.9;
}
</style>




























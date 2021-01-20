<template>
<div class="notemark-button">

    <button @click="printNotes" class="button" > print </button>
</div>
</template>
<script>
import { printContent } from '../utility/printUtility.js'
export default {
    name: "PrintButton",
    methods: {
        printNotes: function () {
            printContent("notemark-note")
        }
    },

}

</script >
<style scoped>
.notemark-button {
  padding: 0.2rem;
}
</style>




























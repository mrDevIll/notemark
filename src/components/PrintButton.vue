<template>
    <button @click="printNotes" class="button" > print </button>
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




























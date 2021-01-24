<template>
    <div>
        <button v-on:click="deleteAllItems" class="btn btn-lg"> delete all </button>
    </div>
</template>

<script>
import { deleteAllNode } from '../../utility/manageMessage.js';
export default {
    name: "deleteAllButton",
    methods: {
        deleteAllItems: function () {
            deleteAllNode();
            location.reload(true);
        }
    },
}
</script>
<style scoped>
.btn {
  color: #ffffff;
  background-color: #f39c12;
  font-family: "Comfortaa", cursive;
  font-size: 1rem;
  font-weight: 700;
  text-transform: lowercase;
  padding: 0.3rem 0.5rem;

  border-radius: 15px;

  position: relative;
}
.btn:hover {
  background-color: #9b59b6;
}
</style>

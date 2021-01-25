<template>
    <div class="delete-all-button-container">
        <button v-on:click="deleteAllItems" class="btn btn-lg"> delete all </button>
    </div>
</template>

<script>
import { deleteAllNode } from '../../utility/manageMessage.js';
export default {
    name: "DeleteAllButton",
    methods: {
        deleteAllItems: function () {
            deleteAllNode();
            location.reload(true);
        }
    },
}
</script>
<style scoped>
.delete-all-button-container {
  padding: 0.2rem;
  margin-right: 0.5rem;
  float: right;
}
.btn {
  color: #ffffff;
  background-color: #7c4dff;
  font-family: "Comfortaa", cursive;
  font-size: 1rem;
  font-weight: 700;
  text-transform: lowercase;
  padding: 0.2rem 0.3rem;
  border-radius: 15px;
  opacity: 0.9;
  position: relative;
}
.btn:hover {
  transform: scale(1.1);
}
</style>

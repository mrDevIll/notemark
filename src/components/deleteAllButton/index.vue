<template>
    <div class="delete-all-button-container">
        <button v-on:click="deleteAllItems" class="btn"> Delete All </button>
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
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1rem;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  opacity: 0.9;
  position: relative;
}
.btn:hover {
  transform: scale(1.1);
}
</style>

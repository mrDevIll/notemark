<template>
<div class="notemark-footer">
    <DeleteAllButton />
    <PrintButton />
</div>
    
</template>
<script>
import PrintButton from '../PrintButton';
import DeleteAllButton from '../deleteAllButton';

export default {
    name: "FooterBar",
    components: {
        PrintButton,
        DeleteAllButton

    },

}
</script>
<style scoped>
.notemark-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ecf0f1;
  font-family: "Comfortaa", cursive, Georgia, Times, "Times New Roman", serif;
  width: 100%;
  padding-top: 0.3rem;
  padding-right: 0.5rem;
}
</style>

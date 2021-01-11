<template>
  <div id="main-note-mark">
      <div class="side-note-mark">
        <button> create a note </button>

      </div>
  </div>
</template>

<script>
export default {
  name: "ContextSideContainer",

};
</script>

<style scoped>
#main-note-mark {
  position: absolute;
  right: 0;
  top: 15%;

  padding: 2rem;
  border-top-left-radius: 20px;
  background-color: dimgrey;
  opacity: 0.6;
  color: white;
  z-index: 10000;
}
</style>

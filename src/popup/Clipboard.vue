<template>
    <div class="note-side-menu">
       
        <div v-for="(note, key) in nodes" :key="key" class="note-side-menu-content">
            <div class="note-side-menu-title">
            {{key}} <font-awesome-icon :icon="trash" title="delete note" class="trash-icon icons cliccable" v-on:click="deleteParent(key)"/> 
           
            
            </div>
            
            <Note :children="note" :father="key" />
        </div>


        
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Note from './Note';

export default {
  name: "Clipboard",
  components: { Note, FontAwesomeIcon },
  props: ["nodes", "k"],
  data: function () {
    return {
      trash: faTrashAlt
    }
  },
  methods: {
    deleteParent(key) {
      this.$emit("deleteNote", key)
    }

  }

}

</script>
<style>
.note-side-menu {
  padding: 0.1rem;
}
.note-side-menu-content {
  padding: 0.2rem;
}
.note-side-menu-title {
  text-transform: uppercase;
  padding: 0.3rem;
  color: #616161;
  font-size: x-large;
  /* font-weight: bolder; */
}
.trash-icon {
  color: darkmagenta;
}
</style>

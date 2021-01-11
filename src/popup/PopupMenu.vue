<template>
    <div class="note-side-menu">
       
        <div v-for="(note, key) in nodes" :key="key" class="note-side-menu-content">
            <div class="note-side-menu-title">
            {{key}} <font-awesome-icon :icon="faMinus" title="delete" class="delete-icon icons cliccable" v-on:click="deleteParent(key)"/> 
           
            
            </div>
            <hr>
            <ChildNote :children="note" :father="key" />
        </div>


        
    </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import ChildNote from './ChildNote';
import { deleteNode } from '../utility/manageMessage.js'

export default {
  name: "PopupMenu",
  components: { ChildNote, FontAwesomeIcon },
  props: ["nodes", "k"],
  data: function () {
    return {
      faMinus: faMinusCircle
    }
  },
  methods: {
    deleteParent: function (name) {
      deleteNode(name);
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
  padding: 0.3rem;
  color: #512da8;
  font-size: x-large;
  font-weight: bolder;
}
</style>

<template>
<div>
    <div class="mini-menu-selected"  v-bind:style="{top:top, left:left}">
    <span v-if="iselect">
      <label for="node" name="node" >new note</label>
        <input type="node" name="node" />
    </span>
        <font-awesome-icon :icon="copyIcon" class="mini-menu-selected-icon mini-menu-selected-icon-copy" v-on:click="copyMessage" title="copy"/>
        <font-awesome-icon :icon="plusCircle" class="mini-menu-selected-icon mini-menu-selected-icon-plus" v-on:click="takeNote" title="add to your notes"/> 
      
    </div>
</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusCircle, faEdit, faCopy } from '@fortawesome/free-solid-svg-icons';
import { insertMessage } from '../utility/manageMessage.js'


export default {
  name: "SelectionMainMenu",
  props: ['note'],
  data: function () {
    return {
      plusCircle: faPlusCircle, copyIcon: faCopy,
      iselect: false


    }
  },

  methods: {
    copyMessage() {
      //TODO: add timer to 

      try {
        navigator.clipboard.writeText(this.note.data);
        function n(x) { return function () { console.log(n) } }
        chrome.storage.sync.get(['node'], function (result) {
          n(result);
          console.log(result)
        })
        this.$emit("menuOff");
      } catch (e) {
        console.log("error copying the data: " + e)
      }
    },

    takeNote() {

      insertMessage(this.note, "name");



      this.$emit("menuOff");





    }
  },
  computed: {
    top: function () {
      return `${this.note.position.top - 35}px`;
    },
    left: function () {
      return `${this.note.position.left - 45}px`
    }

  },
  components: {
    FontAwesomeIcon
  }

}
</script>
<style scoped>
.mini-menu-selected {
  position: absolute;

  padding: 0.4rem 0.8rem;
  background-color: #111827;
  border-radius: 5%;

  z-index: 10000;
}
.mini-menu-selected-icon {
  color: white;
}
.mini-menu-selected-icon:first-child {
  margin-right: 1rem;
}
.mini-menu-selected-icon:hover {
  color: #6ee7b7;
  transform: scale(1.3);
}
</style>

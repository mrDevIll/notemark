<template>
<div>
    <div class="notemark-mini-menu-selected"  v-bind:style="{top:top, left:left}">
        <font-awesome-icon :icon="copyIcon" class="notemark-mini-menu-selected-icon notemark-mini-menu-selected-icon-copy" v-on:click="copyMessage" title="copy"/>
        <font-awesome-icon :icon="plusCircle" class="notemark-mini-menu-selected-icon notemark-mini-menu-selected-icon-plus" v-on:click="takeNote" title="add to your notes"/> 
    <span class="notemark-mini-menu-selected-noteInput">
       <input type="node" name="node" v-model="noteName"/>
    </span>
      
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
      plusCircle: faPlusCircle,
      copyIcon: faCopy,
      iselect: true,
      noteName: "note"


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

      insertMessage(this.noteName, this.note);



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
.notemark-mini-menu-selected {
  position: absolute;

  padding: 0.4rem 0.8rem;
  background-color: #111827;
  border-radius: 5%;

  z-index: 10000;
}
.notemark-mini-menu-selected-icon {
  margin-right: 0.5rem;
  color: white;
}
.notemark-mini-menu-selected-icon:first-child {
  margin-right: 1rem;
}
.notemark-mini-menu-selected-icon:hover {
  color: #6ee7b7;
  transform: scale(1.3);
}
</style>

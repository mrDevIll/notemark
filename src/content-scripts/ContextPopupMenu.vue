<template>
<div>
    <div class="notemark-mini-menu-selected"  v-bind:style="{top:top, left:left}">
        
        <font-awesome-icon :icon="copyIcon" class="notemark-mini-menu-selected-icon notemark-mini-menu-selected-icon-copy" v-on:click="copyMessage" title="copy"/>
        <font-awesome-icon :icon="plusCircle" class="notemark-mini-menu-selected-icon notemark-mini-menu-selected-icon-plus" v-on:click="takeNote" title="add to your notes"/> 
    <span class="">
       <input type="node" name="node" v-model="noteName" class="notemark-mini-menu-selected-noteInput"/>
    </span>
      
    </div>
</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusCircle, faEdit, faCopy } from '@fortawesome/free-solid-svg-icons';
import { insertMessage } from '../utility/manageMessage.js'


export default {
  name: "ContextPopupMenu",
  props: ['note', 'states'],
  data: function () {
    return {
      plusCircle: faPlusCircle,
      copyIcon: faCopy,
      noteName: "note"
    }
  },

  methods: {
    copyMessage() {

      try {
        navigator.clipboard.writeText(this.note.text);

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
  background-color: #515151;
  border: 0.1rem solid #fcefc7;
  border-radius: 3%;
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
  color: #b1b1b1;
  transform: scale(1.2);
}
.notemark-mini-menu-selected-noteInput {
  padding: 0 0.2rem;
  width: 6rem;
}
</style>

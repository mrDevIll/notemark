<template>
<div>
 
    <div class="notemark-mini-menu-selected shadow"  v-bind:style="{top:top, left:left}" >
                                                                                     
        <font-awesome-icon :icon="timesCircle" class=" close-icon cliccable" v-on:click="closeMenu" title="close" />
        <font-awesome-icon :icon="copyIcon" class="notemark-mini-menu-selected-icon cliccable" v-on:click="copyMessage" title="copy" />
        <font-awesome-icon :icon="plusCircle" class="notemark-mini-menu-selected-icon cliccable" v-on:click="takeNote" title="add to your notes" /> 
    
       <input type="node" name="node" v-model="noteName" class="notemark-mini-menu-selected-noteInput" onclick="this.select();" />
    
      
    </div>
</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusCircle, faTimesCircle, faCopy } from '@fortawesome/free-solid-svg-icons';
import { insertMessage, updateBadge } from '../utility/manageMessage.js'
import { addCssSelectors } from '../utility/cssManager.js';

export default {
  name: "MenuItems",
  props: ['note', 'states'],
  data: function () {
    return {
      plusCircle: faPlusCircle,
      copyIcon: faCopy,
      timesCircle: faTimesCircle,
      noteName: "insert note",
    }
  },

  methods: {
    closeMenu() {
      this.$emit("menuOff");
    },

    copyMessage() {
      this.$emit("menuOff");
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
    },

  },
  mounted: function () {

    addCssSelectors();

  },
  components: {
    FontAwesomeIcon
  }

}
</script>

